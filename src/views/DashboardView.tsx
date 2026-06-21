import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Travel, Vehicle, Driver } from '../types';
import {
  TrendingUp,
  Coins,
  Truck,
  MapPin,
  Compass,
  UserCheck,
  CalendarDays,
  Plus,
  CompassIcon,
  CircleCheck,
  User,
  ArrowRight,
  ClipboardList,
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const {
    travels,
    vehicles,
    drivers,
    setActiveTab,
    updateTravelStatus,
    clients,
    t,
    language,
  } = useApp();

  // Dynamically calculate metrics
  const stats = useMemo(() => {
    let totalGenerated = 0;
    let totalBudgeted = 0;
    let completedTrips = 0;

    travels.forEach((t) => {
      // In compliance with screen calculations
      totalGenerated += t.valueGenerated;
      totalBudgeted += t.valueBudgeted;
      if (t.status === 'completo') completedTrips++;
    });

    const activeDrivers = drivers.filter((d) => d.status === 'em_viagem').length;
    const restingDrivers = drivers.filter((d) => d.status === 'folga').length;
    const availableDrivers = drivers.filter((d) => d.status === 'disponível').length;

    // Fleet maintenance count: vehicles with any alert > 75%
    const criticalMaintenanceVehicles = vehicles.filter((v) => {
      return (
        v.maintenance.oilChange > 75 ||
        v.maintenance.oilFilter > 75 ||
        v.maintenance.airFilter > 75 ||
        v.maintenance.tires > 75 ||
        v.maintenance.brakePads > 75
      );
    }).length;

    return {
      totalGenerated,
      totalBudgeted,
      totalVehicles: vehicles.length,
      totalTravelsCount: travels.length,
      activeDrivers,
      restingDrivers,
      availableDrivers,
      criticalMaintenanceVehicles,
    };
  }, [travels, vehicles, drivers]);

  // Formatter for Currency
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(val);
  };

  // Group travels by week of Jan 2026 for the "Desempenho Mensal" SVG Chart
  // Week 1 (Days 1-7), Week 2 (8-14), Week 3 (15-21), Week 4 (22-31)
  const chartData = useMemo(() => {
    const data = [
      { name: `${t('Semana')} 1`, faturamento: 0, orcado: 0 },
      { name: `${t('Semana')} 2`, faturamento: 0, orcado: 0 },
      { name: `${t('Semana')} 3`, faturamento: 0, orcado: 0 },
      { name: `${t('Semana')} 4`, faturamento: 0, orcado: 0 },
    ];

    travels.forEach((t) => {
      // Date format is YYYY-MM-DD
      const day = parseInt(t.date.split('-')[2]) || 1;
      if (day <= 7) {
        data[0].faturamento += t.valueGenerated;
        data[0].orcado += t.valueBudgeted;
      } else if (day <= 14) {
        data[1].faturamento += t.valueGenerated;
        data[1].orcado += t.valueBudgeted;
      } else if (day <= 21) {
        data[2].faturamento += t.valueGenerated;
        data[2].orcado += t.valueBudgeted;
      } else {
        data[3].faturamento += t.valueGenerated;
        data[3].orcado += t.valueBudgeted;
      }
    });

    return data;
  }, [travels]);

  // High point mapping for rendering responsive SVG Chart coordinates
  const maxVal = Math.max(
    ...chartData.map((d) => Math.max(d.faturamento, d.orcado, 8000))
  );

  const getPoints = (key: 'faturamento' | 'orcado') => {
    const width = 500;
    const height = 180;
    const paddingX = 40;
    const paddingY = 20;

    return chartData
      .map((d, index) => {
        const x = paddingX + (index * (width - 2 * paddingX)) / 3;
        const ratio = d[key] / maxVal;
        const y = height - paddingY - ratio * (height - 2 * paddingY);
        return `${x},${y}`;
      })
      .join(' ');
  };

  // Helper matching Travel client objects
  const getClientName = (clientId: string) => {
    const c = clients.find((client) => client.id === clientId);
    return c ? c.name : t('Cliente Geral');
  };

  const getVehicleModel = (vehicleId: string) => {
    const v = vehicles.find((veh) => veh.id === vehicleId);
    return v ? `${v.brand} ${v.model}` : t('Veículo Especial');
  };

  const getDriverName = (driverId: string) => {
    const d = drivers.find((drv) => drv.id === driverId);
    return d ? d.name : t('Motorista Reserva');
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#F4F6FB] p-md md:p-xl space-y-md md:space-y-lg">
      
      {/* 1. Header Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-md">
        {/* Valor Gerado */}
        <div className="bg-white p-md rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
          <div>
            <span className="font-sans text-[11px] text-[#767586] font-bold">{t('valor_gerado')}</span>
            <h4 className="font-headline font-bold text-base md:text-lg text-[#1B1B23] tracking-tight mt-xs">
              {formatCurrency(stats.totalGenerated)}
            </h4>
          </div>
          <div className="flex items-center gap-[4px] mt-md text-[#2ECC71] font-sans text-[11px] font-bold">
            <span>➜ {t('Sem alteração')}</span>
          </div>
        </div>

        {/* Valor Orçado */}
        <div className="bg-white p-md rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
          <div>
            <span className="font-sans text-[11px] text-[#767586] font-bold">{t('valor_orcado')}</span>
            <h4 className="font-headline font-bold text-base md:text-lg text-[#1B1B23] tracking-tight mt-xs">
              {formatCurrency(stats.totalBudgeted)}
            </h4>
          </div>
          <div className="flex items-center gap-[4px] mt-md text-[#5B5FEF] font-sans text-[11px] font-bold">
            <span>➜ {t('Este mês')}</span>
          </div>
        </div>

        {/* Veículos Cadastrados */}
        <div className="bg-white p-md rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
          <div>
            <span className="font-sans text-[11px] text-[#767586] font-bold">{t('vehicles')}</span>
            <h4 className="font-headline font-semibold text-lg md:text-2xl text-[#1B1B23] mt-xs">
              {stats.totalVehicles}
            </h4>
          </div>
          <span className="font-sans text-[10px] text-[#767586] mt-md">{t('Cadastrados')}</span>
        </div>

        {/* Viagens Realizadas */}
        <div className="bg-white p-md rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
          <div>
            <span className="font-sans text-[11px] text-[#767586] font-bold">{t('viagens_realizadas').split(' ')[0]}</span>
            <h4 className="font-headline font-semibold text-lg md:text-2xl text-[#1B1B23] mt-xs">
              {stats.totalTravelsCount}
            </h4>
          </div>
          <span className="font-sans text-[10px] text-[#767586] mt-md">{t('viagens_realizadas')}</span>
        </div>

        {/* Motoristas Ativos */}
        <div className="bg-white p-md rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
          <div>
            <span className="font-sans text-[11px] text-[#767586] font-bold">{t('Motoristas Ativos')}</span>
            <h4 className="font-headline font-semibold text-lg md:text-2xl text-[#2ECC71] mt-xs">
              {stats.activeDrivers}
            </h4>
          </div>
          <span className="font-sans text-[10px] text-[#767586] mt-md">{t('Em operação')}</span>
        </div>

        {/* Motoristas de Folga */}
        <div className="bg-white p-md rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
          <div>
            <span className="font-sans text-[11px] text-[#767586] font-bold">{t('Em Folga')}</span>
            <h4 className="font-headline font-semibold text-lg md:text-2xl text-[#767586] mt-xs">
              {stats.restingDrivers}
            </h4>
          </div>
          <span className="font-sans text-[10px] text-[#767586] mt-md">{t('Disponíveis hoje')}</span>
        </div>
      </div>

      {/* 2. Middle Section (Chart + Action Next Steps) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-lg">
        {/* Left Column: Line Chart */}
        <div className="lg:col-span-3 bg-white p-lg rounded-xxl border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-md border-b border-[#F4F6FB] pb-xs">
            <div>
              <h3 className="font-headline font-bold text-sm text-[#1B1B23]">{t('Desempenho Mensal')}</h3>
              <p className="font-sans text-[11px] text-[#767586]">{t('Comparativo de faturamento vs. orçamento')}</p>
            </div>
            {/* Chart Legend */}
            <div className="flex items-center gap-md text-xs font-semibold">
              <div className="flex items-center gap-xs">
                <span className="w-3 h-3 bg-[#5B5FEF] rounded-full inline-block" />
                <span className="text-[#464555]">{t('Faturamento')}</span>
              </div>
              <div className="flex items-center gap-xs">
                <span className="w-3 h-3 bg-[#C6C5D7] rounded-full inline-block" />
                <span className="text-[#767586]">{t('Orçamento')}</span>
              </div>
            </div>
          </div>

          {/* Interactive Responsive SVG Graph */}
          <div className="relative h-48 w-full mt-sm">
            <svg viewBox="0 0 500 180" className="w-full h-full overflow-visible">
              {/* Grid Lines */}
              <line x1="40" y1="20" x2="460" y2="20" stroke="#EFECF9" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="40" y1="65" x2="460" y2="65" stroke="#EFECF9" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="40" y1="110" x2="460" y2="110" stroke="#EFECF9" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="40" y1="155" x2="460" y2="155" stroke="#E2E8F0" strokeWidth="1" />

              {/* Faturamento Area fill */}
              <polyline
                fill="none"
                stroke="#5B5FEF"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={getPoints('faturamento')}
              />

              {/* Orçamento Area Fill */}
              <polyline
                fill="none"
                stroke="#C6C5D7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="4 4"
                points={getPoints('orcado')}
              />

              {/* Interactive nodes circle */}
              {chartData.map((d, index) => {
                const width = 500;
                const height = 180;
                const paddingX = 40;
                const paddingY = 20;
                const x = paddingX + (index * (width - 2 * paddingX)) / 3;
                
                const yFat = height - paddingY - (d.faturamento / maxVal) * (height - 2 * paddingY);
                const yOrc = height - paddingY - (d.orcado / maxVal) * (height - 2 * paddingY);

                return (
                  <g key={index} className="group cursor-pointer">
                    <circle cx={x} cy={yFat} r="4.5" fill="#5B5FEF" className="hover:scale-125 transition-transform" />
                    <circle cx={x} cy={yOrc} r="3" fill="#767586" />
                    
                    {/* Tooltip dynamic labels */}
                    <text x={x} y={yFat - 8} className="font-sans text-[9px] font-bold fill-[#1B1B23] text-anchor-middle text-center" textAnchor="middle">
                      {formatCurrency(d.faturamento)}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="flex justify-between items-center text-[#767586] font-sans text-[11px] px-lg mt-sm border-t border-[#F4F6FB] pt-xs">
            {chartData.map((d, i) => (
              <span key={i}>{d.name}</span>
            ))}
          </div>
        </div>

        {/* Right Column: Next Steps Guide */}
        <div className="bg-[#5B5FEF] text-white p-lg rounded-xxl shadow-lg shadow-[#5B5FEF]/20 flex flex-col justify-between">
          <div>
            <h3 className="font-headline font-bold text-sm leading-tight border-b border-white/20 pb-sm">
              {t('Próximos Passos')}
            </h3>
            <p className="font-sans text-[11px] text-white/70 mt-xs leading-normal">
              {t('Ações necessárias para operar o sistema:')}
            </p>
          </div>

          <div className="space-y-md my-lg">
            {/* Step 1: Vehicle setup */}
            <div
              onClick={() => setActiveTab('vehicles')}
              className="flex items-start gap-sm p-sm hover:bg-white/10 rounded-xl cursor-pointer transition-all"
            >
              <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                <Truck className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <h5 className="font-headline font-bold text-xs leading-tight">{t('Cadastrar Veículos')}</h5>
                <p className="font-sans text-[10px] text-white/75 mt-[2px]">
                  {t('Adicione sua frota para começar o rastreio.')}
                </p>
              </div>
              <span className="text-white/60 font-mono text-xs">➜</span>
            </div>

            {/* Step 2: Driver setup */}
            <div
              onClick={() => setActiveTab('drivers')}
              className="flex items-start gap-sm p-sm hover:bg-white/10 rounded-xl cursor-pointer transition-all"
            >
              <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                <User className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <h5 className="font-headline font-bold text-xs leading-tight font-semibold">{t('Vincular Motoristas')}</h5>
                <p className="font-sans text-[10px] text-white/75 mt-[2px]">
                  {t('Gerencie quem opera cada elemento da frota.')}
                </p>
              </div>
              <span className="text-white/60 font-mono text-xs">➜</span>
            </div>

            {/* Step 3: Budget setups */}
            <div
              onClick={() => setActiveTab('commercial')}
              className="flex items-start gap-sm p-sm hover:bg-white/10 rounded-xl cursor-pointer transition-all"
            >
              <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                <ClipboardList className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <h5 className="font-headline font-bold text-xs leading-tight font-semibold">{t('Criar Orçamento')}</h5>
                <p className="font-sans text-[10px] text-white/75 mt-[2px]">
                  {t('Projete seus orçamentos e ganhos de faturamentos.')}
                </p>
              </div>
              <span className="text-white/60 font-mono text-xs">➜</span>
            </div>
          </div>

          <div
            onClick={() => setActiveTab('settings')}
            className="text-[11px] font-sans font-bold text-white bg-white/20 hover:bg-white/30 text-center py-sm rounded-xl cursor-pointer transition-colors"
          >
            {t('Ver tutoriais e presets')}
          </div>
        </div>
      </div>

      {/* 3. Bottom Section: Active Travels & Fleet maintenance status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        {/* Travels List (Col-span-2) */}
        <div className="lg:col-span-2 bg-white rounded-xxl border border-[#E2E8F0] shadow-sm p-lg flex flex-col">
          <div className="flex justify-between items-center mb-md border-b border-[#F4F6FB] pb-sm">
            <div>
              <h3 className="font-headline font-bold text-sm text-[#1B1B23]">{t('travels')}</h3>
              <p className="font-sans text-[11px] text-[#767586]">
                {language === 'en' 
                  ? 'Urgency of active tracks for the month' 
                  : language === 'es'
                  ? 'Urgencia de rutas programadas para el mes' 
                  : 'Urgência de rotas agendadas para o mês'}
              </p>
            </div>
            <button
              onClick={() => setActiveTab('travels')}
              className="font-sans text-xs font-bold text-[#5B5FEF] hover:underline flex items-center gap-[4px] cursor-pointer"
            >
              <span>{language === 'en' ? 'View all' : language === 'es' ? 'Ver todo' : 'Ver todas'}</span>
              <span>➜</span>
            </button>
          </div>

          {travels.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center py-xl text-center">
              <div className="w-12 h-12 rounded-full bg-[#F4F6FB] flex items-center justify-center text-[#767586] mb-sm">
                <CalendarDays className="w-6 h-6" />
              </div>
              <h5 className="font-headline font-bold text-xs text-[#1B1B23]">
                {language === 'en' ? 'No travels scheduled' : language === 'es' ? 'Sin viajes programados' : 'Nenhuma viagem agendada'}
              </h5>
              <p className="font-sans text-xs text-[#767586] mt-xs max-w-xs font-medium">
                {language === 'en' ? 'The travels you schedule will appear here.' : language === 'es' ? 'Los viajes que programe aparecerán aquí.' : 'As viagens que você agendar aparecerão aqui.'}
              </p>
              <button
                onClick={() => setActiveTab('travels')}
                className="mt-md px-md py-[10px] border border-[#5B5FEF] hover:bg-[#5B5FEF]/5 text-[#5B5FEF] font-headline text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                {language === 'en' ? 'Schedule First Trip' : language === 'es' ? 'Programar Primer Viaje' : 'Agendar Primeira Viagem'}
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-xs">
                <thead>
                  <tr className="border-b border-[#F4F6FB] text-[#767586] font-semibold text-[11px] pb-xs">
                    <th className="py-sm font-semibold">{t('day')}</th>
                    <th className="py-sm font-semibold">{t('tabela_cliente')}</th>
                    <th className="py-sm font-semibold">{t('tabela_veiculo')}</th>
                    <th className="py-sm font-semibold">{t('tabela_motorista')}</th>
                    <th className="py-sm font-semibold">{t('tabela_status')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F4F6FB]">
                  {travels.slice(0, 5).map((travel) => {
                    const statusColors = {
                      completo: 'bg-[#E8F8EF] text-[#2ECC71]',
                      em_viagem: 'bg-[#F0F0FF] text-[#5B5FEF]',
                      pendente: 'bg-[#FFF6E3] text-[#F5A623]',
                      cancelado: 'bg-[#FFDAD6] text-[#AE2F34]',
                    };

                    const statusLabels = {
                      completo: t('status_completo'),
                      em_viagem: t('status_em_viagem'),
                      pendente: language === 'en' ? 'Pending' : language === 'es' ? 'Pendiente' : 'Pendente',
                      cancelado: language === 'en' ? 'Cancelled' : language === 'es' ? 'Cancelado' : 'Cancelado',
                    };

                    return (
                      <tr key={travel.id} className="hover:bg-[#F4F6FB]/50 transition-colors">
                        <td className="py-[14px] font-bold text-[#1B1B23]">
                          {travel.date.split('-')[2] || '01'}
                        </td>
                        <td className="py-[14px] font-medium text-[#1B1B23] max-w-[140px] truncate">
                          {getClientName(travel.clientId)}
                        </td>
                        <td className="py-[14px] text-[#464555] truncate max-w-[130px]">
                          {getVehicleModel(travel.vehicleId)}
                        </td>
                        <td className="py-[14px] text-[#464555] truncate max-w-[110px]">
                          {getDriverName(travel.driverId)}
                        </td>
                        <td className="py-[14px]">
                          <span
                            className={`px-sm py-xs font-sans font-bold text-[10px] rounded-full inline-block ${
                              statusColors[travel.status]
                            }`}
                          >
                            {statusLabels[travel.status]}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Fleet Maintenance Status (donut chart) */}
        <div className="bg-white rounded-xxl border border-[#E2E8F0] shadow-sm p-lg flex flex-col justify-between">
          <div>
            <h3 className="font-headline font-bold text-sm text-[#1B1B23]">{t('Status da Frota')}</h3>
            <p className="font-sans text-[11px] text-[#767586]">{t('Controle de integridade dos veículos da frota')}</p>
          </div>

          {/* Interactive Progress donut */}
          <div className="flex justify-center items-center my-lg relative h-36">
            {/* SVG Progress circle */}
            <svg className="w-32 h-32 transform -rotate-90">
              <circle cx="64" cy="64" r="48" fill="transparent" stroke="#EFECF9" strokeWidth="12" />
              <circle
                cx="64"
                cy="64"
                r="48"
                fill="transparent"
                stroke="#5B5FEF"
                strokeWidth="12"
                strokeDasharray={2 * Math.PI * 48}
                strokeDashoffset={2 * Math.PI * 48 * (1 - (stats.totalVehicles > 0 ? (stats.totalVehicles - stats.criticalMaintenanceVehicles) / stats.totalVehicles : 0))}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-headline text-3xl font-bold text-[#1B1B23]">
                {stats.totalVehicles}
              </span>
              <span className="font-sans text-[10px] text-[#767586] font-bold uppercase tracking-wider">
                Total
              </span>
            </div>
          </div>

          <div className="space-y-sm font-sans text-xs">
            <div className="flex justify-between items-center text-[#464555]">
              <div className="flex items-center gap-sm">
                <span className="w-3 h-3 bg-[#5B5FEF] rounded-full inline-block" />
                <span>{t('Em Viagem')}</span>
              </div>
              <span className="font-bold text-[#1B1B23]">
                {stats.totalVehicles > 0 ? Math.round((stats.activeDrivers / stats.totalVehicles) * 100) : 0}%
              </span>
            </div>

            <div className="flex justify-between items-center text-[#464555]">
              <div className="flex items-center gap-sm">
                <span className="w-3 h-3 bg-[#E8F8EF] border border-[#2ECC71]/30 rounded-full inline-block" />
                <span>{t('Disponíveis')}</span>
              </div>
              <span className="font-bold text-[#1B1B23]">
                {stats.totalVehicles > 0 ? Math.round((stats.availableDrivers / stats.totalVehicles) * 100) : 0}%
              </span>
            </div>

            <div className="flex justify-between items-center text-[#464555]">
              <div className="flex items-center gap-sm">
                <span className="w-3 h-3 bg-[#FFDAD6] border border-[#AE2F34]/30 rounded-full inline-block" />
                <span>{t('Em Manutenção')}</span>
              </div>
              <span className="font-bold text-[#1B1B23]">
                {stats.totalVehicles > 0 ? Math.round((stats.criticalMaintenanceVehicles / stats.totalVehicles) * 100) : 0}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
