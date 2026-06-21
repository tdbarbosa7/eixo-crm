import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Driver, DriverStatus } from '../types';
import { Users2, UserPlus, Phone, CheckCircle, Sliders, ToggleLeft, ShieldAlert } from 'lucide-react';

export const DriversListView: React.FC = () => {
  const { drivers, addDriver, updateDriverStatus, t, language } = useApp();

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<DriverStatus>('disponível');

  const [alertMsg, setAlertMsg] = useState('');

  const isFormValid = name.trim().length > 0;

  const handleCreateDriver = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    const saved = addDriver({
      name,
      phone: phone || '(11) 99999-8888',
      status,
    });

    const msg = language === 'en' 
      ? `Driver "${saved.name}" registered successfully!` 
      : language === 'es' 
      ? `¡Conductor "${saved.name}" registrado con éxito!`
      : language === 'fr'
      ? `Chauffeur "${saved.name}" enregistré de manière réussie !`
      : language === 'de'
      ? `Fahrer "${saved.name}" erfolgreich registriert!`
      : `Motorista "${saved.name}" cadastrado com sucesso!`;
    setAlertMsg(msg);
    setName('');
    setPhone('');
    setStatus('disponível');

    setTimeout(() => {
      setAlertMsg('');
    }, 4000);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#F4F6FB] p-md md:p-xl space-y-md md:space-y-lg">
      
      {alertMsg && (
        <div className="p-sm bg-[#E8F8EF] border border-[#2ECC71]/20 text-[#006733] rounded-2xl flex items-center gap-sm text-xs font-semibold shadow-sm animate-fade-in">
          <CheckCircle className="w-5 h-5 text-[#2ECC71]" />
          <span>{alertMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg items-start">
        {/* Left Column: Register form */}
        <div className="bg-white rounded-xxl border border-[#E2E8F0] shadow-sm p-lg">
          <div className="flex items-center gap-xs text-[#5B5FEF] border-b border-[#F4F6FB] pb-xs mb-md">
            <UserPlus className="w-5 h-5" />
            <h4 className="font-headline font-bold text-sm text-[#1B1B23]">
              {t('Cadastrar Motorista')}
            </h4>
          </div>

          <form onSubmit={handleCreateDriver} className="space-y-md">
            {/* Nome completo */}
            <div className="flex flex-col gap-xs">
              <label className="font-sans font-bold text-[11px] text-[#464555]">
                {t('Nome do Motorista')} <span className="text-[#AE2F34]">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('Ex Carlos Alexandre')}
                className="w-full px-md py-sm bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]"
              />
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col gap-xs">
              <label className="font-sans font-bold text-[11px] text-[#464555]">
                {t('Telefone de Contato')}
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(00) 00000-0000"
                className="w-full px-md py-sm bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]"
              />
            </div>

            {/* Status inicial */}
            <div className="flex flex-col gap-xs">
              <label className="font-sans font-bold text-[11px] text-[#464555]">
                {t('Status Operacional Inicial')}
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as DriverStatus)}
                className="w-full px-md py-sm bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]"
              >
                <option value="disponível">{t('disponível')}</option>
                <option value="folga">{t('Em Folga')}</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-sm font-headline text-xs font-bold rounded-xl shadow-md transition-all cursor-[pointer] ${
                isFormValid
                  ? 'bg-[#5B5FEF] text-white hover:bg-[#4143D5]'
                  : 'bg-[#C6C5D7]/40 text-[#767586] cursor-not-allowed shadow-none'
              }`}
            >
              {t('Gravar Motorista')}
            </button>
          </form>
        </div>

        {/* Right Column (Col-span-2): Active List of drivers */}
        <div className="lg:col-span-2 bg-white rounded-xxl border border-[#E2E8F0] shadow-sm p-lg">
          <div className="flex justify-between items-center mb-md border-b border-[#F4F6FB] pb-xs">
            <h3 className="font-headline font-bold text-sm text-[#1B1B23]">
              {t('Motoristas Cadastrados')} ({drivers.length})
            </h3>
            <span className="font-sans text-[11px] text-[#767586]">{t('Gestão de escalas operacionais')}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs">
              <thead>
                <tr className="border-b border-[#F4F6FB] text-[#767586] font-semibold pb-xs">
                  <th className="py-sm">{t('Nome / Motorista')}</th>
                  <th className="py-sm">{t('Telefone de Contato')}</th>
                  <th className="py-sm bg-[#F4F6FB]/50 rounded-l text-center">{t('Status Ativo')}</th>
                  <th className="py-sm text-right pr-md">{t('Controles Rápidos')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4F6FB]">
                {drivers.map((drv) => {
                  const badgeColors = {
                    disponível: 'bg-[#E8F8EF] text-[#2ECC71]',
                    em_viagem: 'bg-[#F0F0FF] text-[#5B5FEF]',
                    folga: 'bg-[#EFECF9] text-[#767586]',
                  };

                  return (
                    <tr key={drv.id} className="hover:bg-[#F4F6FB]/40 transition-colors">
                      <td className="py-sm font-bold text-[#1B1B23]">{drv.name}</td>
                      <td className="py-sm text-[#464555] font-mono">{drv.phone || '(11) 98888-7777'}</td>
                      <td className="py-sm text-center">
                        <span
                          className={`px-sm py-xs font-sans font-bold text-[10px] rounded-full inline-block ${
                            badgeColors[drv.status]
                          }`}
                        >
                          {t(drv.status).toUpperCase()}
                        </span>
                      </td>
                      {/* Control buttons to switch status */}
                      <td className="py-sm text-right pr-xs">
                        <div className="flex items-center justify-end gap-xs">
                          {drv.status !== 'disponível' && (
                            <button
                              onClick={() => updateDriverStatus(drv.id, 'disponível')}
                              className="px-[8px] py-[4px] border border-[#2ECC71] hover:bg-[#2ECC71] hover:text-white text-[#2ECC71] font-headline text-[9px] font-bold rounded-lg transition-colors cursor-pointer"
                            >
                              {t('disponível')}
                            </button>
                          )}
                          {drv.status !== 'folga' && drv.status !== 'em_viagem' && (
                            <button
                              onClick={() => updateDriverStatus(drv.id, 'folga')}
                              className="px-[8px] py-[4px] border border-[#767586] hover:bg-[#767586] hover:text-white text-[#464555] font-headline text-[9px] font-bold rounded-lg transition-colors cursor-pointer"
                            >
                              {t('Folgar')}
                            </button>
                          )}
                          {drv.status === 'em_viagem' && (
                            <span className="text-[10px] text-[#767586] font-semibold italic">
                              {t('Em viagem (revisar na agenda)')}
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
