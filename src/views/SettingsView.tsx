import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Settings, RefreshCw, Trophy, Wrench, Shield, CheckCircle } from 'lucide-react';

export const SettingsView: React.FC = () => {
  const { monthlyGoal, resetToDemo, t, language } = useApp();
  const [successMsg, setSuccessMsg] = useState('');

  const handleReset = () => {
    const doubleCheck = window.confirm(
      t('aviso_limpar')
    );
    if (doubleCheck) {
      resetToDemo();
      setSuccessMsg(t('aviso_limpar_sucesso'));
      setTimeout(() => {
        setSuccessMsg('');
      }, 4000);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#F4F6FB] p-md md:p-xl space-y-md md:space-y-lg">
      
      {successMsg && (
        <div className="p-sm bg-[#E8F8EF] border border-[#2ECC71]/20 text-[#006733] rounded-2xl flex items-center gap-sm text-xs font-semibold animate-fade-in shadow-sm">
          <CheckCircle className="w-5 h-5 text-[#2ECC71]" />
          <span>{successMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        {/* Left Col: Setup metrics */}
        <div className="lg:col-span-2 space-y-lg">
          {/* Section: Configurações Gerais */}
          <div className="bg-white rounded-xxl border border-[#E2E8F0] shadow-sm p-lg space-y-md">
            <div className="flex items-center gap-xs text-[#5B5FEF] border-b border-[#F4F6FB] pb-xs mb-xs">
              <Trophy className="w-5 h-5" />
              <h4 className="font-headline font-bold text-sm text-[#1B1B23]">
                {t('Objetivos Corporativos')}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="flex flex-col gap-xs">
                <label className="font-sans font-bold text-[11px] text-[#464555]">
                  {t('Meta Mensal de Faturamento (R$)')}
                </label>
                <input
                  type="text"
                  disabled
                  value="R$ 150.000,00"
                  className="w-full px-md py-sm bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23] cursor-not-allowed"
                />
                <span className="font-sans text-[10px] text-[#767586]">
                  {t('Definido pelos administradores da Eixo CRM')}
                </span>
              </div>

              <div className="flex flex-col gap-xs">
                <label className="font-sans font-bold text-[11px] text-[#464555]">
                  {t('Fuso Horário do Sistema')}
                </label>
                <input
                  type="text"
                  disabled
                  value={language === 'en' ? 'GMT-3 (Brasilia, Brazil)' : language === 'es' ? 'GMT-3 (Brasilia, Brasil)' : language === 'fr' ? 'GMT-3 (Brasilia, Brésil)' : language === 'de' ? 'GMT-3 (Brasilia, Brasilien)' : 'GMT-3 (Brasília, Brasil)'}
                  className="w-full px-md py-sm bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23] cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* Section: Manual de uso */}
          <div className="bg-white rounded-xxl border border-[#E2E8F0] shadow-sm p-lg space-y-sm">
            <div className="flex items-center gap-xs text-[#5B5FEF] border-b border-[#F4F6FB] pb-xs mb-xs">
              <Shield className="w-5 h-5" />
              <h4 className="font-headline font-bold text-sm text-[#1B1B23]">
                {t('Manual e Integrações')}
              </h4>
            </div>
            
            <div className="font-sans text-xs text-[#464555] space-y-sm leading-relaxed">
              <p>
                {t('O sistema de Fleet Management da **Eixo** permite a integridade e sincronização cruzada de dados operacionais nos seguintes pilares:')}
              </p>
              <ul className="list-disc pl-lg space-y-xs">
                <li>
                  <strong>{t('Gravação de Clientes')}:</strong> {t('Vincula CNPJ/CPF com os executivos comerciais selecionados.')}
                </li>
                <li>
                  <strong>{t('Veículos')}:</strong> {t('Controla a saúde da frota por meio de indicadores preventivos (%) sincronizados live.')}
                </li>
                <li>
                  <strong>{t('Alocação de Viagens')}:</strong> {t('O cronograma do calendário de Janeiro de 2026 calcula faturamentos, custos, status e vinculações instantâneas.')}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Col: Admin actions */}
        <div className="bg-white rounded-xxl border border-[#E2E8F0] shadow-sm p-lg flex flex-col justify-between h-full gap-md">
          <div>
            <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-[#767586]">
              {language === 'en' ? 'Administrator Actions' : language === 'es' ? 'Acciones de Administrador' : language === 'fr' ? 'Actions d\'Administrateur' : language === 'de' ? 'Administrator-Aktionen' : 'Ações de Administrador'}
            </h4>
            <p className="font-sans text-xs text-[#464555] leading-normal mt-xs">
              {language === 'en' ? 'Administer local database limits:' : language === 'es' ? 'Administre los límites de la base de datos local:' : language === 'fr' ? 'Gérer les limites de la base de données locale :' : language === 'de' ? 'Lokale Datenbankgrenzen verwalten:' : 'Administre os limites da base de dados local:'}
            </p>
          </div>

          <div className="space-y-md">
            <div className="p-md bg-[#FFF6E3] border border-[#F5A623]/25 rounded-xl">
              <p className="font-sans text-[11px] text-[#464555] leading-relaxed font-medium">
                {t('aviso_limpar')}
              </p>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-md bg-[#FF6B6B] hover:bg-[#AE2F34] text-white font-headline text-xs font-bold rounded-xl flex items-center justify-center gap-xs shadow-md shadow-red-500/15 cursor-pointer transition-colors animate-pulse"
            >
              <RefreshCw className="w-4 h-4" />
              <span>{t('button_limpar')}</span>
            </button>
          </div>

          <p className="font-sans text-[10px] text-[#767586] text-center font-semibold">
            {language === 'en' ? 'Operational session active. Version 1.0.4-stable' : language === 'es' ? 'Sesión operativa activa. Versión 1.0.4-estable' : language === 'fr' ? 'Session opérationnelle active. Version 1.0.4-stable' : language === 'de' ? 'Betriebssitzung aktiv. Version 1.0.4-stable' : 'Sessão operacional ativa. Versão 1.0.4-stable'}
          </p>
        </div>
      </div>
    </div>
  );
};
