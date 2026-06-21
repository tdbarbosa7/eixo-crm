import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Truck, Mail, Lock, Eye, EyeOff, ShieldAlert, CheckCircle, TrendingUp, ShieldCheck, Globe2 } from 'lucide-react';

export const LoginView: React.FC = () => {
  const { login, language, changeLanguage, t } = useApp();
  const [email, setEmail] = useState('admin@eixo.com.br');
  const [password, setPassword] = useState('••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage(t('login_choose_email_warning'));
      return;
    }
    setLoading(true);
    setErrorMessage('');

    setTimeout(() => {
      const success = login(email);
      setLoading(false);
      if (!success) {
        setErrorMessage(t('login_invalid_credentials'));
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f6fb] relative overflow-hidden flex items-center justify-center p-md">
      {/* Decorative Blur Spheres */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-55">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#e1e0ff] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] rounded-full bg-[#ffdad8] blur-[100px]" />
      </div>

      {/* Top Right Language Selector */}
      <div className="absolute top-6 right-6 z-30">
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-[4px] px-sm py-[8px] bg-white border border-[#E2E8F0] rounded-xl font-sans text-[11px] font-semibold text-[#464555] shrink-0 cursor-pointer hover:bg-[#E2E8F0] transition-all shadow-sm"
            title="Mudar Idioma / Change Language"
          >
            <Globe2 className="w-[14px] h-[14px] text-[#5B5FEF]" />
            <span>
              {language === 'pt' ? 'Português (BR)' : language === 'en' ? 'English (US)' : language === 'es' ? 'Español (ES)' : language === 'fr' ? 'Français (FR)' : 'Deutsch (DE)'}
            </span>
          </button>

          {isLangOpen && (
            <>
              <div 
                className="fixed inset-0 z-20" 
                onClick={() => setIsLangOpen(false)} 
              />
              <div className="absolute right-0 mt-xs w-40 bg-white border border-[#E2E8F0] rounded-2xl shadow-lg py-xs z-30 animate-fade-in font-sans text-[11px] font-medium">
                <button
                  onClick={() => {
                    changeLanguage('pt');
                    setIsLangOpen(false);
                  }}
                  className={`w-full text-left px-md py-[8px] flex items-center justify-between hover:bg-[#F4F6FB] transition-colors ${
                    language === 'pt' ? 'text-[#5B5FEF] font-bold bg-[#F4F6FB]/50' : 'text-[#464555]'
                  }`}
                >
                  <span>Português (BR)</span>
                  {language === 'pt' && <span className="w-1.5 h-1.5 bg-[#5B5FEF] rounded-full" />}
                </button>
                <button
                  onClick={() => {
                    changeLanguage('en');
                    setIsLangOpen(false);
                  }}
                  className={`w-full text-left px-md py-[8px] flex items-center justify-between hover:bg-[#F4F6FB] transition-colors ${
                    language === 'en' ? 'text-[#5B5FEF] font-bold bg-[#F4F6FB]/50' : 'text-[#464555]'
                  }`}
                >
                  <span>English (US)</span>
                  {language === 'en' && <span className="w-1.5 h-1.5 bg-[#5B5FEF] rounded-full" />}
                </button>
                <button
                  onClick={() => {
                    changeLanguage('es');
                    setIsLangOpen(false);
                  }}
                  className={`w-full text-left px-md py-[8px] flex items-center justify-between hover:bg-[#F4F6FB] transition-colors ${
                    language === 'es' ? 'text-[#5B5FEF] font-bold bg-[#F4F6FB]/50' : 'text-[#464555]'
                  }`}
                >
                  <span>Español (ES)</span>
                  {language === 'es' && <span className="w-1.5 h-1.5 bg-[#5B5FEF] rounded-full" />}
                </button>
                <button
                  onClick={() => {
                    changeLanguage('fr');
                    setIsLangOpen(false);
                  }}
                  className={`w-full text-left px-md py-[8px] flex items-center justify-between hover:bg-[#F4F6FB] transition-colors ${
                    language === 'fr' ? 'text-[#5B5FEF] font-bold bg-[#F4F6FB]/50' : 'text-[#464555]'
                  }`}
                >
                  <span>Français (FR)</span>
                  {language === 'fr' && <span className="w-1.5 h-1.5 bg-[#5B5FEF] rounded-full" />}
                </button>
                <button
                  onClick={() => {
                    changeLanguage('de');
                    setIsLangOpen(false);
                  }}
                  className={`w-full text-left px-md py-[8px] flex items-center justify-between hover:bg-[#F4F6FB] transition-colors ${
                    language === 'de' ? 'text-[#5B5FEF] font-bold bg-[#F4F6FB]/50' : 'text-[#464555]'
                  }`}
                >
                  <span>Deutsch (DE)</span>
                  {language === 'de' && <span className="w-1.5 h-1.5 bg-[#5B5FEF] rounded-full" />}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <main className="relative z-10 w-full max-w-[1280px] flex flex-col md:flex-row items-center justify-center gap-xl">
        {/* Left Side: Brand Hero Content */}
        <div className="hidden md:flex flex-col flex-1 max-w-[500px] space-y-lg text-left">
          <div className="flex items-center gap-sm mb-xl">
            <div className="w-[44px] h-[44px] bg-[#5B5FEF] rounded-xl flex items-center justify-center text-white shadow-md shadow-[#5B5FEF]/20">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-headline font-bold text-xl text-[#4143D5] leading-none">Eixo</h1>
              <p className="font-sans text-xs text-[#767586] font-medium tracking-wide mt-[2px]">
                CRM Smart
              </p>
            </div>
          </div>

          <div className="space-y-sm">
            <h2 className="font-headline text-3xl font-extrabold text-[#1B1B23] leading-tight">
              {t('login_total_control')}
            </h2>
            <p className="font-sans text-sm text-[#464555] leading-relaxed">
              {t('login_hero_description')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-md pt-lg">
            <div className="p-md bg-white/60 backdrop-blur-md rounded-2xl border border-white/45 shadow-sm flex flex-col items-start gap-xs">
              <div className="w-8 h-8 rounded-lg bg-[#5B5FEF]/10 flex items-center justify-center text-[#5B5FEF]">
                <TrendingUp className="w-4 h-4" />
              </div>
              <p className="font-headline font-bold text-xs text-[#1B1B23] mt-xs">
                {t('login_realtime_reports')}
              </p>
            </div>

            <div className="p-md bg-white/60 backdrop-blur-md rounded-2xl border border-white/45 shadow-sm flex flex-col items-start gap-xs">
              <div className="w-8 h-8 rounded-lg bg-[#5B5FEF]/10 flex items-center justify-center text-[#5B5FEF]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <p className="font-headline font-bold text-xs text-[#1B1B23] mt-xs">
                {t('login_bank_security')}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form Card */}
        <div className="w-full max-w-[480px]">
          <div className="bg-white rounded-xxl p-xl md:p-[48px] border border-[#E2E8F0] shadow-xl shadow-black/5 flex flex-col gap-lg">
            {/* Header */}
            <div className="text-center md:text-left">
              {/* Mobile Only Header logo */}
              <div className="md:hidden flex justify-center mb-md">
                <div className="w-10 h-10 bg-[#5B5FEF] rounded-lg flex items-center justify-center text-white">
                  <Truck className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-headline font-bold text-2xl text-[#1B1B23] tracking-tight">
                {t('login_welcome_back')}
              </h3>
              <p className="font-sans text-xs text-[#767586] mt-xs">
                {t('login_access_account')}
              </p>
            </div>

            {/* Error notifications */}
            {errorMessage && (
              <div className="p-sm bg-[#FFDAD6] border border-[#FF6B6B]/20 text-[#6D0010] rounded-xl flex items-center gap-sm text-xs">
                <ShieldAlert className="w-4 h-4 shrink-0 text-[#AE2F34]" />
                <span className="font-medium">{errorMessage}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-md">
              {/* Email Control */}
              <div className="flex flex-col gap-xs">
                <label htmlFor="login-email" className="font-sans font-bold text-[11px] text-[#464555] ml-1">
                  {t('login_email_label')}
                </label>
                <div className="relative border border-[#C6C5D7] rounded-xl focus-within:border-[#5B5FEF] focus-within:ring-2 focus-within:ring-[#5B5FEF]/13 transition-all">
                  <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none text-[#767586]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="login-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@eixo.com.br"
                    className="w-full pl-[40px] pr-md py-[11px] bg-transparent border-0 rounded-xl font-sans text-xs text-[#1B1B23] placeholder-[#C6C5D7] focus:ring-0 outline-none"
                  />
                </div>
              </div>

              {/* Password Control */}
              <div className="flex flex-col gap-xs">
                <div className="flex justify-between items-center px-1">
                  <label htmlFor="login-password" className="font-sans font-bold text-[11px] text-[#464555]">
                    {t('login_password_label')}
                  </label>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="font-sans text-[11px] font-bold text-[#5B5FEF] hover:underline"
                  >
                    {t('login_forgot_password')}
                  </a>
                </div>
                <div className="relative border border-[#C6C5D7] rounded-xl focus-within:border-[#5B5FEF] focus-within:ring-2 focus-within:ring-[#5B5FEF]/13 transition-all">
                  <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none text-[#767586]">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-[40px] pr-[44px] py-[11px] bg-transparent border-0 rounded-xl font-sans text-xs text-[#1B1B23] placeholder-[#C6C5D7] focus:ring-0 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 pr-md flex items-center text-[#767586] hover:text-[#5B5FEF] transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember checkbox */}
              <div className="flex items-center gap-xs mt-xs">
                <input
                  id="remember-checkbox"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-[#C6C5D7] text-[#5B5FEF] focus:ring-[#5B5FEF]/20 cursor-pointer"
                />
                <label
                  htmlFor="remember-checkbox"
                  className="font-sans text-xs text-[#464555] cursor-pointer select-none font-medium"
                >
                  {t('login_remember_me')}
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-base bg-[#5B5FEF] hover:bg-[#4143D5] text-white font-headline text-xs font-bold py-[13px] rounded-xl shadow-md shadow-[#5B5FEF]/20 active:scale-[0.98] transition-all flex items-center justify-center gap-xs cursor-pointer disabled:opacity-80"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>{t('login_authenticating')}</span>
                  </>
                ) : (
                  <>
                    <span>{t('login_enter_btn')}</span>
                    <span className="font-mono text-sm leading-none">➜</span>
                  </>
                )}
              </button>
            </form>

            {/* Bottom Invitation Option */}
            <div className="pt-base border-t border-[#E4E1ED] flex flex-col items-center gap-xs text-center">
              <p className="font-sans text-xs text-[#767586] font-medium">{t('login_no_account')}</p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert(
                    language === 'en'
                      ? 'Your access request has been sent to Eixo Fleet administrators.'
                      : language === 'es'
                      ? 'Su solicitud de acceso ha sido enviada a los administradores de Eixo Fleet.'
                      : language === 'fr'
                      ? 'Votre demande d\'accès a été envoyée aux administrateurs de Eixo Fleet.'
                      : language === 'de'
                      ? 'Ihre Zugriffsanfrage wurde an die Administratoren von Eixo Fleet gesendet.'
                      : 'Sua solicitação de acesso foi enviada aos administradores da Eixo Fleet.'
                  );
                }}
                className="font-sans text-xs font-bold text-[#5B5FEF] hover:bg-[#5B5FEF]/5 px-md py-xs rounded-xl transition-all"
              >
                {t('login_request_access')}
              </a>
            </div>
          </div>

          {/* Bottom copyright info */}
          <div className="mt-lg flex justify-between items-center px-md text-[#767586] text-[11px] font-medium">
            <p>© 2026 EIXO Fleet Management</p>
            <div className="flex gap-md">
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#1B1B23]">
                {t('login_privacy')}
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#1B1B23]">
                {language === 'en' ? 'Support' : language === 'es' ? 'Soporte' : language === 'fr' ? 'Support' : language === 'de' ? 'Support' : 'Suporte'}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
