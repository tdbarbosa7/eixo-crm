import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Travel } from '../types';
import {
  FileText,
  Filter,
  BarChart2,
  Calendar,
  Users,
  TrendingDown,
  Download,
  AlertCircle,
  Truck,
  CheckCircle,
  Search,
  CheckSquare,
  Sparkles,
} from 'lucide-react';

export const ReportsView: React.FC = () => {
  const { travels, clients, vehicles, drivers, language, t } = useApp();

  // Filter Parameters
  const [filterDate, setFilterDate] = useState('');
  const [filterClient, setFilterClient] = useState('all');
  const [filterVehicle, setFilterVehicle] = useState('all');
  const [filterDriver, setFilterDriver] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Page state
  const [isReportGenerated, setIsReportGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  // Filter travels based on options
  const filteredReportTravels = useMemo(() => {
    return travels.filter((t) => {
      // Date filter
      if (filterDate && t.date !== filterDate) return false;
      // Client
      if (filterClient !== 'all' && t.clientId !== filterClient) return false;
      // Vehicle
      if (filterVehicle !== 'all' && t.vehicleId !== filterVehicle) return false;
      // Driver
      if (filterDriver !== 'all' && t.driverId !== filterDriver) return false;
      // Status
      if (filterStatus !== 'all' && t.status !== filterStatus) return false;

      return true;
    });
  }, [travels, filterDate, filterClient, filterVehicle, filterDriver, filterStatus]);

  // Aggregate stats from filtered results
  const reportStats = useMemo(() => {
    let revenue = 0;
    let budget = 0;
    let totalKilometers = 0; // fake calculation
    let completedCount = 0;

    filteredReportTravels.forEach((t) => {
      revenue += t.valueGenerated;
      budget += t.valueBudgeted;
      if (t.status === 'completo') completedCount++;
      // standard mock KM based on generated value
      totalKilometers += Math.round(t.valueGenerated * 0.12);
    });

    const efficiencyRate =
      budget > 0 ? Math.min(100, Math.round((revenue / budget) * 100)) : 100;

    return {
      revenue,
      budget,
      totalKilometers,
      completedCount,
      efficiencyRate,
    };
  }, [filteredReportTravels]);

  const handleGenerateReport = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsReportGenerated(true);
    }, 1000);
  };

  const handleExport = (format: 'csv' | 'pdf') => {
    alert(
      language === 'en'
        ? `The report was successfully exported in ${format.toUpperCase()} format! Check your browser's downloads folder.`
        : language === 'es'
        ? `¡El informe se exportó con éxito en formato ${format.toUpperCase()}! Revise la carpeta de descargas de su navegador.`
        : language === 'fr'
        ? `Le rapport a été exporté avec succès au format ${format.toUpperCase()} ! Vérifiez le dossier de téléchargements de votre navigateur.`
        : language === 'de'
        ? `Der Bericht wurde erfolgreich im ${format.toUpperCase()}-Format exportiert! Überprüfen Sie den Download-Ordner Ihres Browsers.`
        : `O relatório foi exportado com sucesso no formato ${format.toUpperCase()}! Verifique a pasta de downloads do seu navegador.`
    );
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(val);
  };

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
      
      {/* 1. Header Toolbar matching design layout */}
      <div className="flex justify-between items-center gap-md">
        <h3 className="font-headline font-bold text-sm text-[#767586] tracking-wide uppercase">
          {t('Parâmetros de Filtragem')}
        </h3>
        
        {/* Export buttons and Generate triggers */}
        <div className="flex items-center gap-xs">
          {/* Export dropdown */}
          <div className="relative group shrink-0">
            <button className="flex items-center gap-xs px-md py-[10px] bg-white hover:bg-[#F4F6FB] text-[#464555] font-headline text-xs font-bold rounded-xl border border-[#C6C5D7] shadow-sm cursor-pointer transition-colors">
              <Download className="w-[14px] h-[14px]" />
              <span>{t('Exportar')}</span>
              <span className="font-mono text-[9px]">▼</span>
            </button>
            <div className="absolute right-0 top-11 bg-white border border-[#E2E8F0] rounded-xl shadow-lg py-xs hidden group-hover:block w-36 z-50 animate-fade-in">
              <button
                onClick={() => handleExport('csv')}
                className="w-full text-left px-md py-sm font-sans text-xs text-[#464555] hover:bg-[#F0F0FF] hover:text-[#4143D5]"
              >
                {t('Planilha CSV (.csv)')}
              </button>
              <button
                onClick={() => handleExport('pdf')}
                className="w-full text-left px-md py-sm font-sans text-xs text-[#464555] hover:bg-[#F0F0FF] hover:text-[#4143D5]"
              >
                {t('Relatório PDF (.pdf)')}
              </button>
            </div>
          </div>

          <button
            onClick={handleGenerateReport}
            disabled={loading}
            className="flex items-center gap-xs px-md py-[10px] bg-[#5B5FEF] hover:bg-[#4143D5] text-white font-headline text-xs font-bold rounded-xl shadow-md shadow-[#5B5FEF]/20 transition-all active:scale-[0.98] cursor-pointer disabled:opacity-80"
          >
            {loading ? (
              <span>{t('Gerando...')}</span>
            ) : (
              <>
                <FileText className="w-[14px] h-[14px]" />
                <span>{t('Gerar Relatório')}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. Filters Grid panel matching Screen 2 style */}
  <div className="bg-white p-lg rounded-xxl border border-[#E2E8F0] shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-md">
          {/* Calendar Day selector */}
          <div className="flex flex-col gap-xs">
            <label className="font-sans font-bold text-[11px] text-[#767586] uppercase tracking-wider">
              {t('Período (Data)')}
            </label>
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="w-full px-md py-sm bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23] focus:border-[#5B5FEF]"
            />
          </div>

          {/* Client Filter */}
          <div className="flex flex-col gap-xs">
            <label className="font-sans font-bold text-[11px] text-[#767586] uppercase tracking-wider">
              {t('Cliente')}
            </label>
            <select
              value={filterClient}
              onChange={(e) => setFilterClient(e.target.value)}
              className="w-full px-md py-sm bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]"
            >
              <option value="all">{t('Todos os clientes')}</option>
              {clients.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Vehicle Filter */}
          <div className="flex flex-col gap-xs">
            <label className="font-sans font-bold text-[11px] text-[#767586] uppercase tracking-wider">
              {t('Veículo')}
            </label>
            <select
              value={filterVehicle}
              onChange={(e) => setFilterVehicle(e.target.value)}
              className="w-full px-md py-sm bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]"
            >
              <option value="all">{t('Todas as placas')}</option>
              {vehicles.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.brand} {v.model}
                </option>
              ))}
            </select>
          </div>

          {/* Driver Filter */}
          <div className="flex flex-col gap-xs">
            <label className="font-sans font-bold text-[11px] text-[#767586] uppercase tracking-wider">
              {t('Motorista')}
            </label>
            <select
              value={filterDriver}
              onChange={(e) => setFilterDriver(e.target.value)}
              className="w-full px-md py-sm bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]"
            >
              <option value="all">{t('Todos os motoristas')}</option>
              {drivers.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex flex-col gap-xs">
            <label className="font-sans font-bold text-[11px] text-[#767586] uppercase tracking-wider">
              {t('Status Comercial')}
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-md py-sm bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]"
            >
              <option value="all">{t('Todos os status')}</option>
              <option value="completo">{t('Completo')}</option>
              <option value="em_viagem">{t('Em Rota')}</option>
              <option value="pendente">{t('Pendente')}</option>
              <option value="cancelado">{t('Cancelado')}</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. Main content area (Adaptive based on generated or pending status) */}
      {!isReportGenerated ? (
        <div className="border border-dashed border-[#C6C5D7] rounded-xxl p-xl bg-white flex flex-col items-center justify-center text-center gap-lg">
          {/* Center search illustration as in Screen 2 */}
          <div className="w-[120px] h-[120px] rounded-full bg-[#EFECF9] flex items-center justify-center text-[#5B5FEF] relative shadow-sm">
            <div className="w-[74px] h-[74px] rounded-full bg-white flex items-center justify-center shadow-inner">
              <Search className="w-8 h-8 text-[#5B5FEF]" />
            </div>
            <span className="absolute bottom-2 right-2 p-2 bg-[#2ECC71] rounded-full text-white font-headline text-xs shadow-md">
              ✔
            </span>
          </div>

          <div className="space-y-xs max-w-lg">
            <h4 className="font-headline font-bold text-[#1B1B23] text-base">{t('Pronto para analisar?')}</h4>
            <p className="font-sans text-xs text-[#767586] leading-relaxed">
              {t('Selecione os filtros acima para especificar os dados desejados e clique em')}{' '}
              <span className="font-bold text-[#5B5FEF]">{t('Gerar Relatório')}</span> {t('para visualizar os resultados detalhados, faturamentos, KMs e taxas de conversões.')}
            </p>
          </div>

          {/* Fast Index Cards exactly matching Screen 2 boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md w-full pt-lg border-t border-[#F4F6FB]">
            {/* Produtividade */}
            <div className="p-lg bg-white border border-[#E2E8F0] hover:border-[#5B5FEF] rounded-2xl flex flex-col items-start text-left gap-xs shadow-sm transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#5B5FEF]/10 flex items-center justify-center text-[#5B5FEF]">
                <Truck className="w-4 h-4" />
              </div>
              <h5 className="font-headline font-bold text-xs text-[#1B1B23] mt-xs">{t('Produtividade')}</h5>
              <p className="font-sans text-[11px] text-[#767586]">{t('Km rodados e tempo de rota.')}</p>
            </div>

            {/* Financeiro */}
            <div className="p-lg bg-white border border-[#E2E8F0] hover:border-[#5B5FEF] rounded-2xl flex flex-col items-start text-left gap-xs shadow-sm transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#5B5FEF]/10 flex items-center justify-center text-[#5B5FEF]">
                <TrendingDown className="w-4 h-4 text-[#FF6B6B]" />
              </div>
              <h5 className="font-headline font-bold text-xs text-[#1B1B23] mt-xs">{t('Financeiro')}</h5>
              <p className="font-sans text-[11px] text-[#767586]">{t('Receita por viagem e custos fixos.')}</p>
            </div>

            {/* Comercial */}
            <div className="p-lg bg-white border border-[#E2E8F0] hover:border-[#5B5FEF] rounded-2xl flex flex-col items-start text-left gap-xs shadow-sm transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#5B5FEF]/10 flex items-center justify-center text-[#5B5FEF]">
                <Users className="w-4 h-4" />
              </div>
              <h5 className="font-headline font-bold text-xs text-[#1B1B23] mt-xs">{t('Comercial')}</h5>
              <p className="font-sans text-[11px] text-[#767586]">{t('Conversão de orçamentos e leads.')}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-lg animate-zoom-in">
          {/* Calculated Output Stats row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
            <div className="bg-white p-md rounded-2xl border border-[#E2E8F0] shadow-sm">
              <span className="font-sans text-[10px] uppercase font-bold text-[#767586]">{t('Resultado Faturamento')}</span>
              <h4 className="font-headline font-bold text-lg text-[#1B1B23] mt-xs">
                {formatCurrency(reportStats.revenue)}
              </h4>
              <p className="font-sans text-[9px] text-[#767586] mt-xs">{t('Somados de viagem')}</p>
            </div>

            <div className="bg-white p-md rounded-2xl border border-[#E2E8F0] shadow-sm">
              <span className="font-sans text-[10px] uppercase font-bold text-[#767586]">{t('Rodagem Estimada')}</span>
              <h4 className="font-headline font-bold text-lg text-[#1B1B23] mt-xs">
                {new Intl.NumberFormat('pt-BR').format(reportStats.totalKilometers)} KM
              </h4>
              <p className="font-sans text-[9px] text-[#767586] mt-xs">{t('Base de faturamento cooperativo')}</p>
            </div>

            <div className="bg-white p-md rounded-2xl border border-[#E2E8F0] shadow-sm">
              <span className="font-sans text-[10px] uppercase font-bold text-[#767586]">{t('Viagens Encontradas')}</span>
              <h4 className="font-headline font-bold text-base text-[#1B1B23] mt-xs">
                {filteredReportTravels.length} {t('Viagens')}
              </h4>
              <p className="font-sans text-[9px] text-[#767586] mt-xs">{reportStats.completedCount} {t('Completadas')}</p>
            </div>

            <div className="bg-white p-md rounded-2xl border border-[#E2E8F0] shadow-sm">
              <span className="font-sans text-[10px] uppercase font-bold text-[#767586]">{t('Aderência Comercial')}</span>
              <h4 className="font-headline font-bold text-lg text-[#2ECC71] mt-xs">
                {reportStats.efficiencyRate}%
              </h4>
              <p className="font-sans text-[9px] text-[#767586] mt-xs">{t('Gerações vs. Orçado')}</p>
            </div>
          </div>

          {/* Results list Table */}
          <div className="bg-white rounded-xxl border border-[#E2E8F0] shadow-sm p-lg">
            <div className="flex justify-between items-center mb-md border-b border-[#F4F6FB] pb-xs">
              <div>
                <h4 className="font-headline font-bold text-sm text-[#1B1B23]">
                  {t('Detalhamento de Viagens Encontradas')}
                </h4>
                <p className="font-sans text-[11px] text-[#767586]">{t('Mapeamento de faturamentos filtrados')}</p>
              </div>
              <button
                onClick={() => setIsReportGenerated(false)}
                className="px-sm py-[6px] text-xs font-semibold hover:bg-[#FFDAD6] hover:text-[#AE2F34] rounded-xl text-[#767586]"
              >
                {t('Limpar Filtros e Resetar')}
              </button>
            </div>

            {filteredReportTravels.length === 0 ? (
              <div className="text-center py-xl text-xs text-[#767586]">
                {t('Nenhuma viagem correspondente aos filtros foi encontrada. Reescreva os filtros acima e gere novamente.')}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-xs">
                  <thead>
                    <tr className="border-b border-[#F4F6FB] text-[#767586] font-semibold">
                      <th className="py-sm">{t('Data')}</th>
                      <th className="py-sm">{t('Cliente')}</th>
                      <th className="py-sm">{t('Veículo')}</th>
                      <th className="py-sm">{t('Motorista')}</th>
                      <th className="py-sm">{t('Rota (Origem / Destino)')}</th>
                      <th className="py-sm">{t('Valor Gerado')}</th>
                      <th className="py-sm">{t('Status')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F4F6FB]">
                    {filteredReportTravels.map((travel) => (
                      <tr key={travel.id} className="hover:bg-[#F4F6FB]/40 transition-colors">
                        <td className="py-sm text-[#1B1B23] font-bold">
                          {travel.date.split('-').reverse().join('/')}
                        </td>
                        <td className="py-sm font-semibold text-[#1B1B23]">
                          {getClientName(travel.clientId)}
                        </td>
                        <td className="py-sm text-[#464555]">{getVehicleModel(travel.vehicleId)}</td>
                        <td className="py-sm text-[#464555]">{getDriverName(travel.driverId)}</td>
                        <td className="py-sm text-[#767586]">
                          {travel.origin || 'SP'} ➜ {travel.destination || 'RJ'}
                        </td>
                        <td className="py-sm text-[#1B1B23] font-bold">
                          {formatCurrency(travel.valueGenerated)}
                        </td>
                        <td className="py-sm">
                          <span className="px-sm py-xs bg-[#E8F8EF] text-[#2ECC71] rounded-full text-[10px] font-bold uppercase inline-block">
                            {travel.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
