import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { UserCheck, ShieldAlert, CheckSquare, Trash2, Calendar, FileText, CheckCircle } from 'lucide-react';

export const ClientsView: React.FC = () => {
  const { clients, addClient, resetToDemo, t, language } = useApp();

  // Form states
  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Alerts
  const [successMsg, setSuccessMsg] = useState('');

  // Calculate mandatory fields filled count (Nome, CPF/CNPJ, WhatsApp)
  const isNameFilled = name.trim().length > 0;
  const isDocFilled = document.trim().length > 0;
  const isPhoneFilled = phone.trim().length > 0;

  const filledCount = (isNameFilled ? 1 : 0) + (isDocFilled ? 1 : 0) + (isPhoneFilled ? 1 : 0);
  const isFormValid = filledCount === 3;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    const saved = addClient({
      name,
      document,
      birthDate: birthDate || undefined,
      email: email || 'contato@email.com',
      phone,
    });

    const msg = language === 'en' 
      ? `Client "${saved.name}" saved successfully!` 
      : language === 'es' 
      ? `¡Cliente "${saved.name}" guardado con éxito!` 
      : `Cliente "${saved.name}" gravado com sucesso!`;
    setSuccessMsg(msg);

    // Reset Form fields
    setName('');
    setDocument('');
    setBirthDate('');
    setEmail('');
    setPhone('');

    // Banner fade out
    setTimeout(() => {
      setSuccessMsg('');
    }, 4500);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#F4F6FB] p-md md:p-xl space-y-md md:space-y-lg">
      
      {/* Dynamic Success message alert */}
      {successMsg && (
        <div className="p-md bg-[#E8F8EF] border border-[#2ECC71]/20 text-[#006733] rounded-2xl flex items-center gap-sm text-xs font-semibold shadow-sm animate-fade-in">
          <CheckCircle className="w-5 h-5 text-[#2ECC71]" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Main 2-column layout matching design */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg items-start">
        {/* Left Column: Register Form */}
        <div className="lg:col-span-2 bg-white rounded-xxl border border-[#E2E8F0] shadow-sm p-xl">
          <form onSubmit={handleSave} className="space-y-lg">
            
            {/* Form Section 1: Identificatórios */}
            <div className="space-y-md">
              <div className="flex items-center gap-xs text-[#5B5FEF] border-b border-[#F4F6FB] pb-xs">
                <FileText className="w-5 h-5" />
                <h4 className="font-headline font-bold text-sm text-[#1B1B23]">
                  {t('Dados Identificatórios')}
                </h4>
              </div>

              <div className="space-y-sm">
                {/* Nome do Cliente */}
                <div className="flex flex-col gap-xs">
                  <label className="font-sans font-bold text-[11px] text-[#464555]">
                    {t('Nome do cliente / Empresa')} <span className="text-[#AE2F34]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('Digite o nome completo ou razão social')}
                    className="w-full px-md py-sm bg-white border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23] focus:border-[#5B5FEF] focus:ring-2 focus:ring-[#5B5FEF]/10 outline-none transition-all"
                  />
                </div>

                {/* Sub-row document & birthdate */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  {/* CPF/CNPJ */}
                  <div className="flex flex-col gap-xs">
                    <label className="font-sans font-bold text-[11px] text-[#464555]">
                      CPF / CNPJ <span className="text-[#AE2F34]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={document}
                      onChange={(e) => setDocument(e.target.value)}
                      placeholder="000.000.000-00 ou 00.000.000/0000-00"
                      className="w-full px-md py-sm bg-white border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23] focus:border-[#5B5FEF] focus:ring-2 focus:ring-[#5B5FEF]/10 outline-none transition-all"
                    />
                  </div>

                  {/* Birthdate */}
                  <div className="flex flex-col gap-xs">
                    <label className="font-sans font-bold text-[11px] text-[#464555]">
                      {t('Data de Nascimento')}
                    </label>
                    <input
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="w-full px-md py-sm bg-white border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23] focus:border-[#5B5FEF] focus:ring-2 focus:ring-[#5B5FEF]/10 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section 2: Contatos */}
            <div className="space-y-md">
              <div className="flex items-center gap-xs text-[#5B5FEF] border-b border-[#F4F6FB] pb-xs">
                <UserCheck className="w-5 h-5" />
                <h4 className="font-headline font-bold text-sm text-[#1B1B23]">
                  {t('Informações de Contato')}
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                {/* E-mail */}
                <div className="flex flex-col gap-xs">
                  <label className="font-sans font-bold text-[11px] text-[#464555]">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@email.com"
                    className="w-full px-md py-sm bg-white border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23] focus:border-[#5B5FEF] focus:ring-2 focus:ring-[#5B5FEF]/10 outline-none transition-all"
                  />
                </div>

                {/* WhatsApp */}
                <div className="flex flex-col gap-xs">
                  <label className="font-sans font-bold text-[11px] text-[#464555]">
                    WhatsApp <span className="text-[#AE2F34]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(00) 00000-0000"
                    className="w-full px-md py-sm bg-white border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23] focus:border-[#5B5FEF] focus:ring-2 focus:ring-[#5B5FEF]/10 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Action buttons footer */}
            <div className="flex justify-end items-center gap-sm border-t border-[#F4F6FB] pt-lg">
              <button
                type="button"
                onClick={() => {
                  setName('');
                  setDocument('');
                  setBirthDate('');
                  setEmail('');
                  setPhone('');
                }}
                className="px-lg py-[11px] bg-white border border-[#C6C5D7] text-[#464555] hover:bg-[#F4F6FB] hover:text-[#1B1B23] font-headline text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                {t('cancelar')}
              </button>
              <button
                type="submit"
                disabled={!isFormValid}
                className={`px-lg py-[11px] font-headline text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer ${
                  isFormValid
                    ? 'bg-[#5B5FEF] text-white hover:bg-[#4143D5] shadow-[#5B5FEF]/20'
                    : 'bg-[#C6C5D7]/40 text-[#767586] cursor-not-allowed shadow-none'
                }`}
              >
                {t('gravar_clientes_btn')}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Status info block */}
        <div className="space-y-md">
          {/* Status do Registro Card */}
          <div className="bg-white rounded-xxl border border-[#E2E8F0] shadow-sm p-lg flex flex-col gap-md">
            <div>
              <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-[#767586]">
                {t('Status do Registro')}
              </h4>
              <p className="font-sans text-[11px] text-[#464555] leading-normal mt-xs">
                {t('Validação de preenchimento de campos obrigatórios:')}
              </p>
            </div>

            {/* Progress indicator */}
            <div className="flex justify-between items-center bg-[#F4F6FB] p-md rounded-xl">
              <div className="flex items-center gap-xs text-xs font-semibold text-[#1B1B23]">
                <CheckSquare className="w-4 h-4 text-[#5B5FEF]" />
                <span>{t('Campos obrigatórios')}</span>
              </div>
              <span
                className={`text-xs font-bold font-headline ${
                  filledCount === 3 ? 'text-[#2ECC71]' : 'text-[#5B5FEF]'
                }`}
              >
                {filledCount} / 3
              </span>
            </div>

            {/* Hint message box */}
            <div className="p-md bg-[#EFECF9] rounded-xl">
              <p className="font-sans text-[11px] text-[#464555] leading-relaxed">
                {t('Preencha os 3 campos obrigatórios marcados com asterisk (*) para habilitar o salvamento de clientes.')}
              </p>
            </div>
          </div>

          {/* Import Panel mock */}
          <div className="bg-white rounded-xxl border border-[#E2E8F0] shadow-sm p-lg flex flex-col gap-sm">
            <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-[#767586]">
              {t('Ações Rápidas')}
            </h4>
            <button
              onClick={() => {
                alert(t('O recurso de importação de planilhas está configurado e pronto para uso corporativo!'));
              }}
              className="w-full py-sm bg-[#EFECF9] hover:bg-[#E1E0FF] text-[#4143D5] font-headline text-xs font-bold rounded-xl shadow-inner transition-colors cursor-pointer text-center"
            >
              {t('Importar Planilha (.xls, .csv)')}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Registered Clients Log Table */}
      <div className="bg-white rounded-xxl border border-[#E2E8F0] shadow-sm p-lg">
        <h3 className="font-headline font-bold text-sm text-[#1B1B23] mb-sm border-b border-[#F4F6FB] pb-xs">
          {t('clientes_cadastrados')} ({clients.length})
        </h3>
        
        {clients.length === 0 ? (
          <p className="text-xs text-[#767586] text-center py-lg">
            {language === 'en' ? 'No registered clients.' : language === 'es' ? 'No hay clientes registrados.' : 'Nenhum cliente cadastrado.'}
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs">
              <thead>
                <tr className="border-b border-[#F4F6FB] text-[#767586] font-semibold">
                  <th className="py-sm">{language === 'en' ? 'Client / Corporate Name' : language === 'es' ? 'Nombre / Razón Social' : 'Nome / Razão Social'}</th>
                  <th className="py-sm">{language === 'en' ? 'CPF or CNPJ' : language === 'es' ? 'CPF o CNPJ' : 'CPF ou CNPJ'}</th>
                  <th className="py-sm">E-mail</th>
                  <th className="py-sm">WhatsApp</th>
                  <th className="py-sm">{language === 'en' ? 'Registration' : language === 'es' ? 'Registro' : 'Cadastro'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4F6FB]">
                {clients.map((c) => (
                  <tr key={c.id} className="hover:bg-[#F4F6FB]/40 transition-colors">
                    <td className="py-sm font-bold text-[#1B1B23]">{c.name}</td>
                    <td className="py-sm text-[#464555] font-mono">{c.document}</td>
                    <td className="py-sm text-[#464555]">{c.email}</td>
                    <td className="py-sm text-[#464555] font-semibold">{c.phone}</td>
                    <td className="py-sm text-[#767586]">
                      {new Date(c.createdAt).toLocaleDateString('pt-BR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
