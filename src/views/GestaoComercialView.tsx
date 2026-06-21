import React, { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { TrendingUp, FileSpreadsheet, User, Users, Compass, HelpCircle, Trophy, BarChart2 } from 'lucide-react';

export const GestaoComercialView: React.FC = () => {
  const {
    travels,
    clients,
    monthlyGoal,
    selectedExecutive,
    setSelectedExecutive,
    availableExecutives,
    executiveContractsCount,
    t,
  } = useApp();

  // Aggregate stats from travels
  const commercialStats = useMemo(() => {
    let totalGerado = 0;
    let totalOrcado = 0;

    travels.forEach((t) => {
      totalGerado += t.valueGenerated;
      totalOrcado += t.valueBudgeted;
    });

    const percentOfGoal = Math.min(100, Math.round((totalGerado / monthlyGoal) * 100));

    return {
      totalGerado,
      totalOrcado,
      percentOfGoal,
    };
  }, [travels, monthlyGoal]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(val);
  };

  // Weekly data for Comparativo de Performance (4 weeks of January 2026)
  const weeklyData = useMemo(() => {
    const data = [
      { week: 'Semana 1', gerado: 0, orcado: 0, meta: 37500 },
      { week: 'Semana 2', gerado: 0, orcado: 0, meta: 37500 },
      { week: 'Semana 3', gerado: 0, orcado: 0, meta: 37500 },
      { week: 'Semana 4', gerado: 0, orcado: 0, meta: 37500 },
    ];

    travels.forEach((t) => {
      const day = parseInt(t.date.split('-')[2]) || 1;
      if (day <= 7) {
        data[0].gerado += t.valueGenerated;
        data[0].orcado += t.valueBudgeted;
      } else if (day <= 14) {
        data[1].gerado += t.valueGenerated;
        data[1].orcado += t.valueBudgeted;
      } else if (day <= 21) {
        data[2].gerado += t.valueGenerated;
        data[2].orcado += t.valueBudgeted;
      } else {
        data[3].gerado += t.valueGenerated;
        data[3].orcado += t.valueBudgeted;
      }
    });

    return data;
  }, [travels]);

  // Is there active performance data to render?
  const hasPerformanceData = commercialStats.totalGerado > 0;

  return (
    <div className="flex-1 overflow-y-auto bg-[#F4F6FB] p-md md:p-xl space-y-md md:space-y-lg">
      
      {/* 1. Header Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {/* Valor Gerado Card */}
        <div className="bg-white p-lg rounded-2xl border border-[#E2E8F0] shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-4 right-4 w-10 h-10 bg-[#5B5FEF]/10 rounded-xl flex items-center justify-center text-[#5B5FEF]">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-xs">
              <span className="font-sans text-xs text-[#767586] font-semibold">{t('Valor Gerado')}</span>
              <span className="px-sm py-xs bg-[#E8F8EF] text-[#2ECC71] text-[9px] font-bold rounded-full">
                +14.5%
              </span>
            </div>
            <h3 className="font-headline font-bold text-2xl text-[#1B1B23] tracking-tight mt-sm">
              {formatCurrency(commercialStats.totalGerado)}
            </h3>
          </div>
          <p className="font-sans text-[11px] text-[#767586] mt-lg">{t('Cálculo de faturamento efetivado')}</p>
        </div>

        {/* Valor Orçado Card */}
        <div className="bg-white p-lg rounded-2xl border border-[#E2E8F0] shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-4 right-4 w-10 h-10 bg-[#F5A623]/10 rounded-xl flex items-center justify-center text-[#F5A623]">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-xs">
              <span className="font-sans text-xs text-[#767586] font-semibold">{t('Valor Orçado')}</span>
              <span className="px-sm py-xs bg-[#F4F6FB] text-[#767586] text-[9px] font-bold rounded-full">
                {t('Pendente')}
              </span>
            </div>
            <h3 className="font-headline font-bold text-2xl text-[#1B1B23] tracking-tight mt-sm">
              {formatCurrency(commercialStats.totalOrcado)}
            </h3>
          </div>
          <p className="font-sans text-[11px] text-[#767586] mt-lg">{t('Projeções em elaboração')}</p>
        </div>

        {/* Meta Mensal progress card */}
        <div className="bg-white p-lg rounded-2xl border border-[#E2E8F0] shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-4 right-4 w-10 h-10 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center text-[#2ECC71]">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <div className="flex justify-between items-center pr-12">
              <span className="font-sans text-xs text-[#767586] font-semibold">{t('Meta Mensal')}</span>
              <span className="font-sans text-[11px] text-[#767586] font-bold">
                {t('Meta:')} {commercialStats.percentOfGoal}%
              </span>
            </div>
            <h3 className="font-headline font-bold text-2xl text-[#1B1B23] tracking-tight mt-sm">
              {formatCurrency(monthlyGoal)}
            </h3>
          </div>
          {/* Progress bar */}
          <div className="mt-lg">
            <div className="w-full h-[6px] bg-[#EFECF9] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#2ECC71] rounded-full transition-all duration-1000"
                style={{ width: `${commercialStats.percentOfGoal}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Comparativo de Performance (Bar Chart) */}
      <div className="bg-white rounded-xxl border border-[#E2E8F0] shadow-sm p-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-sm mb-lg border-b border-[#F4F6FB] pb-sm">
          <div>
            <h3 className="font-headline font-bold text-base text-[#1B1B23]">
              {t('Comparativo de Performance')}
            </h3>
            <p className="font-sans text-xs text-[#767586]">{t('Análise de Valor Gerado, Orçado e Metas')}</p>
          </div>

          <div className="flex items-center gap-md">
            {/* Filters */}
            <select className="px-sm py-xs bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]">
              <option>{t('Barras')}</option>
              <option>{t('Linhas')}</option>
            </select>
            {/* Legend */}
            <div className="flex items-center gap-sm text-[11px] font-bold text-[#464555]">
              <div className="flex items-center gap-xs">
                <span className="w-2.5 h-2.5 bg-[#5B5FEF] rounded-full inline-block" />
                <span>{t('Gerado')}</span>
              </div>
              <div className="flex items-center gap-xs">
                <span className="w-2.5 h-2.5 bg-[#FF6B6B] rounded-full inline-block" />
                <span>{t('Orçado')}</span>
              </div>
              <div className="flex items-center gap-xs">
                <span className="w-2.5 h-2.5 bg-[#2ECC71] rounded-full inline-block" />
                <span>{t('Metas')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive layout matching screen 1 */}
        {!hasPerformanceData ? (
          <div className="h-64 flex flex-col items-center justify-center p-xl text-center">
            <div className="w-12 h-12 rounded-full bg-[#F4F6FB] flex items-center justify-center text-[#767586] mb-sm">
              <BarChart2 className="w-6 h-6" />
            </div>
            <p className="font-sans text-xs text-[#767586] max-w-sm">
              {t('Aguardando dados para comparação. Quando houver contratos ativos e agendas, o comparativo semanal de faturamentos será exibido aqui.')}
            </p>
          </div>
        ) : (
          <div className="w-full flex flex-col gap-lg py-sm">
            {/* Displaying 4 weeks bars */}
            <div className="space-y-md">
              {weeklyData.map((data, idx) => {
                const maxWeekVal = Math.max(
                  ...weeklyData.map((d) => Math.max(d.gerado, d.orcado, d.meta))
                );

                const widthGerado = Math.max(4, Math.round((data.gerado / maxWeekVal) * 100));
                const widthOrcado = Math.max(4, Math.round((data.orcado / maxWeekVal) * 100));
                const widthMeta = Math.max(4, Math.round((data.meta / maxWeekVal) * 100));

                return (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-xs md:gap-md items-center">
                    <span className="md:col-span-2 font-sans font-bold text-xs text-[#464555]">
                      {t(data.week)}
                    </span>
                    <div className="md:col-span-10 space-y-[4px]">
                      {/* Gerado */}
                      <div className="flex items-center gap-sm">
                        <div className="flex-1 h-[8px] bg-[#EFECF9] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#5B5FEF] rounded-full transition-all duration-1000"
                            style={{ width: `${widthGerado}%` }}
                          />
                        </div>
                        <span className="font-mono text-[9px] text-[#767586] font-semibold w-16 text-right">
                          {formatCurrency(data.gerado)}
                        </span>
                      </div>

                      {/* Orçado */}
                      <div className="flex items-center gap-sm">
                        <div className="flex-1 h-[8px] bg-[#EFECF9] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#FF6B6B] rounded-full transition-all duration-1000"
                            style={{ width: `${widthOrcado}%` }}
                          />
                        </div>
                        <span className="font-mono text-[9px] text-[#767586] font-semibold w-16 text-right">
                          {formatCurrency(data.orcado)}
                        </span>
                      </div>

                      {/* Meta */}
                      <div className="flex items-center gap-sm">
                        <div className="flex-1 h-[4px] bg-[#EFECF9] rounded-full overflow-hidden border-dashed">
                          <div
                            className="h-full bg-[#2ECC71] rounded-full transition-all duration-1000"
                            style={{ width: `${widthMeta}%` }}
                          />
                        </div>
                        <span className="font-mono text-[9px] text-[#767586] font-semibold w-16 text-right">
                          {formatCurrency(data.meta)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 3. Bottom Row: Projeções Financeiras + Sales Executive selector */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        {/* Projeções Financeiras col-span-2 */}
        <div className="lg:col-span-2 bg-white rounded-xxl border border-[#E2E8F0] shadow-sm p-lg">
          <div className="flex justify-between items-center mb-md border-b border-[#F4F6FB] pb-xs">
            <div>
              <h3 className="font-headline font-bold text-sm text-[#1B1B23]">
                {t('Projeções Financeiras')}
              </h3>
              <p className="font-sans text-[11px] text-[#767586]">
                {t('Comparativo de performance mensal')}
              </p>
            </div>
            <select className="px-sm py-xs bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]">
              <option>{t('Período: 2026')}</option>
              <option>{t('Período: 2025')}</option>
            </select>
          </div>

          {/* Projection charts design matching screen 1 */}
          <div className="h-44 flex flex-col justify-between font-sans text-[10px] text-[#767586]">
            {/* Grid Line 100k */}
            <div className="flex items-center gap-sm border-b border-[#F4F6FB] py-xs">
              <span className="w-8 shrink-0">100k</span>
              <div className="flex-1 h-3 flex items-end">
                <div className="w-1/4 h-3 bg-[#5B5FEF]/10 rounded-t" />
                <div className="w-1/4 h-2 bg-[#5B5FEF]/20" />
                <div className="w-1/4 h-4 bg-[#5B5FEF]/15" />
                <div className="w-1/4 h-3 bg-[#5B5FEF]/25" />
              </div>
            </div>

            {/* Grid Line 75k */}
            <div className="flex items-center gap-sm border-b border-[#F4F6FB] py-xs">
              <span className="w-8 shrink-0">75k</span>
              <div className="flex-1 h-3 flex items-end">
                <div className="w-1/4 h-1 bg-[#FF6B6B]/10 rounded-t" />
                <div className="w-1/4 h-3 bg-[#FF6B6B]/20" />
                <div className="w-1/4 h-2 bg-[#FF6B6B]/15" />
                <div className="w-1/4 h-4 bg-[#FF6B6B]/25" />
              </div>
            </div>

            {/* Grid Line 50k */}
            <div className="flex items-center gap-sm border-b border-[#F4F6FB] py-xs">
              <span className="w-8 shrink-0">50k</span>
              <div className="flex-1 h-3 flex items-end">
                <div className="w-1/4 h-2 bg-[#EFECF9] rounded-t" />
                <div className="w-1/4 h-1 bg-[#EFECF9]" />
                <div className="w-1/4 h-3 bg-[#EFECF9]" />
                <div className="w-1/4 h-2 bg-[#EFECF9]" />
              </div>
            </div>

            {/* Grid Line 25k */}
            <div className="flex items-center gap-sm border-b border-transparent py-xs">
              <span className="w-8 shrink-0">25k</span>
              <div className="flex-1 h-3 flex items-end">
                <div className="w-1/4 h-3 bg-[#5B5FEF]/12 rounded-t" />
                <div className="w-1/4 h-[5px] bg-[#5B5FEF]/8" />
                <div className="w-1/4 h-2 bg-[#5B5FEF]/10" />
                <div className="w-1/4 h-[12px] bg-[#5B5FEF]/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Executivo de Vendas columns card */}
        <div className="bg-white rounded-xxl border border-[#E2E8F0] shadow-sm p-lg flex flex-col justify-between">
          <div>
            <h3 className="font-headline font-bold text-sm text-[#1B1B23]">
              {t('Executivo de Vendas')}
            </h3>
            <p className="font-sans text-[11px] text-[#767586] mb-md">
              {t('Desempenho e vínculo de carteiras')}
            </p>
          </div>

          <div className="space-y-md">
            <div className="flex flex-col gap-xs">
              <label className="font-sans font-bold text-[11px] text-[#464555]">
                {t('Selecionar Executivo')}
              </label>
              <select
                value={selectedExecutive}
                onChange={(e) => setSelectedExecutive(e.target.value)}
                className="w-full px-md py-sm bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23] focus:border-[#5B5FEF] outline-none"
              >
                {availableExecutives.map((exec) => (
                  <option key={exec} value={exec}>
                    {exec}
                  </option>
                ))}
              </select>
            </div>

            {/* Executive context displays matching screen 1 */}
            <div className="p-md bg-[#F4F6FB] rounded-xl border border-dashed border-[#C6C5D7] flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#EFECF9] flex items-center justify-center text-[#5B5FEF] mb-sm">
                <User className="w-5 h-5" />
              </div>
              <h5 className="font-headline font-bold text-xs text-[#1B1B23] truncate w-full px-md">
                {selectedExecutive}
              </h5>
              <div className="mt-sm space-y-xs w-full text-center">
                <p className="font-sans text-[11px] text-[#464555]">
                  {t('Contratos vinculados atualmente:')}
                </p>
                <div className="inline-block px-sm py-xs bg-[#E1E0FF] text-[#4143D5] rounded-full text-xs font-bold leading-none">
                  {executiveContractsCount[selectedExecutive] || 0} {t('Ativos')}
                </div>
              </div>
            </div>
          </div>

          <p className="font-sans text-[10px] text-[#767586] text-center mt-md">
            {t('Mantenha a carteira sincronizada para o rateio correto.')}
          </p>
        </div>
      </div>
    </div>
  );
};
