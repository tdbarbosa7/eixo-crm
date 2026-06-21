import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AppTab } from '../types';
import {
  Bell,
  HelpCircle,
  Search,
  Calendar,
  Moon,
  Sun,
  Globe2,
  Receipt,
  Plus,
  ChevronLeft,
  ChevronRight,
  UserPlus,
  Menu,
} from 'lucide-react';

interface HeaderProps {
  onNewTravelClick?: () => void;
  onNewClientClick?: () => void;
  onNewVehicleClick?: () => void;
  onNewDriverClick?: () => void;
  onSearchInput?: (val: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNewTravelClick,
  onNewClientClick,
  onNewVehicleClick,
  onNewDriverClick,
}) => {
  const { 
    activeTab, 
    setActiveTab, 
    searchQuery, 
    setSearchQuery, 
    isMobileSidebarOpen, 
    setIsMobileSidebarOpen,
    themeMode,
    toggleTheme,
    language,
    changeLanguage,
    t,
  } = useApp();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const getHeaderDetails = () => {
    switch (activeTab) {
      case 'dashboard':
        return {
          title: t('dashboard'),
          subtitle: language === 'en' 
            ? 'Welcome to your fleet control center.' 
            : language === 'es'
            ? 'Bienvenido a su centro de control de flotas.'
            : language === 'fr'
            ? 'Bienvenue dans votre centre de contrôle de flotte.'
            : language === 'de'
            ? 'Willkommen in Ihrem Flottenkontrollzentrum.'
            : 'Bem-vindo ao seu centro de controle de frota.',
          searchPlaceholder: language === 'en' 
            ? 'Search by driver, vehicle or trip...' 
            : language === 'es'
            ? 'Buscar por conductor, vehículo o viaje...'
            : language === 'fr'
            ? 'Rechercher par chauffeur, véhicule ou trajet...'
            : language === 'de'
            ? 'Suche nach Fahrer, Fahrzeug oder Reise...'
            : 'Buscar por motorista, veículo ou viagem...',
        };
      case 'clients':
        return {
          title: t('clients'),
          subtitle: language === 'en'
            ? 'Enter basic information to start client management on the platform.'
            : language === 'es'
            ? 'Ingrese la información básica para iniciar la gestión del cliente en la plataforma.'
            : language === 'fr'
            ? 'Saisissez les informations de base pour commencer la gestion des clients sur la plateforme.'
            : language === 'de'
            ? 'Geben Sie Basisinformationen ein, um die Kundenverwaltung auf der Plattform zu starten.'
            : 'Insira as informações básicas para iniciar a gestão do cliente na plataforma.',
          searchPlaceholder: t('search_placeholder'),
        };
      case 'vehicles':
        return {
          title: language === 'en' ? 'Vehicle Management' : language === 'es' ? 'Gestión de Vehículos' : language === 'fr' ? 'Gestion des Véhicules' : language === 'de' ? 'Fahrzeugverwaltung' : 'Gestão de Veículos',
          subtitle: language === 'en'
            ? 'Vehicle registration and smart control of preventive maintenance.'
            : language === 'es'
            ? 'Registro de vehículos y control inteligente de mantenimiento preventivo.'
            : language === 'fr'
            ? 'Enregistrement des véhicules et contrôle intelligent de la maintenance préventive.'
            : language === 'de'
            ? 'Fahrzeugregistrierung und intelligente präventive Wartungskontrolle.'
            : 'Cadastro de veículos e controle inteligente de manutenção preventiva.',
          searchPlaceholder: language === 'en' ? 'Search vehicle by plate or model...' : language === 'es' ? 'Buscar vehículo por matrícula o modelo...' : language === 'fr' ? 'Rechercher un véhicule par plaque ou modèle...' : language === 'de' ? 'Fahrzeug nach Kennzeichen oder Modell suchen...' : 'Buscar veículo por placa ou modelo...',
        };
      case 'drivers':
        return {
          title: language === 'en' ? 'Drivers List' : language === 'es' ? 'Lista de Conductores' : language === 'fr' ? 'Liste des Chauffeurs' : language === 'de' ? 'Fahrerliste' : 'Ficha de Motoristas',
          subtitle: language === 'en'
            ? 'View active driver licenses, categories and track status.'
            : language === 'es'
            ? 'Ver licencias de conducir activas, categorías y seguimiento de estados.'
            : language === 'fr'
            ? 'Visualiser les permis actifs, les catégories et le suivi des statuts.'
            : language === 'de'
            ? 'Aktive Führerscheine, Kategorien und Statusverfolgung anzeigen.'
            : 'Visualize CNHs ativas, categorias e acompanhamento de status.',
          searchPlaceholder: language === 'en' ? 'Search driver by name...' : language === 'es' ? 'Buscar conductor por nombre...' : language === 'fr' ? 'Rechercher un chauffeur par nom...' : language === 'de' ? 'Fahrer nach Name suchen...' : 'Pesquisar motorista por nome...',
        };
      case 'travels':
        return {
          title: language === 'en' ? 'Travel Schedule' : language === 'es' ? 'Agenda de Viajes' : language === 'fr' ? 'Planning de Voyages' : language === 'de' ? 'Reiseplanung' : 'Agenda de Viagens',
          subtitle: language === 'en'
            ? 'Control departures, destinations, values, matching and scheduling.'
            : language === 'es'
            ? 'Controlar salidas, destinos, valores, correspondencias y programación.'
            : language === 'fr'
            ? 'Contrôler les départs, les destinations, les valeurs, les correspondances et la planification.'
            : language === 'de'
            ? 'Abfahrten, Ziele, Werte, Zuordnung und Planung steuern.'
            : 'Controle de partidas, destinos de entrega, faturamento gerado e programação.',
          searchPlaceholder: language === 'en' ? 'Search travel details...' : language === 'es' ? 'Buscar detalles de viaje...' : language === 'fr' ? 'Rechercher des détails de voyage...' : language === 'de' ? 'Reisedetails suchen...' : 'Pesquisar detalhes de viagens...',
        };
      case 'commercial':
        return {
          title: language === 'en' ? 'Commercial Deck' : language === 'es' ? 'Deck Comercial' : language === 'fr' ? 'Deck Commercial' : language === 'de' ? 'Vertriebs-Deck' : 'Deck Comercial',
          subtitle: language === 'en'
            ? 'Overview of generated billing, conversion rate, and performance by account executive.'
            : language === 'es'
            ? 'Resumen de facturación generada, tasa de conversión y rendimiento por ejecutivo.'
            : language === 'fr'
            ? 'Aperçu de la facturation générée, taux de conversion et performance par responsable de compte.'
            : language === 'de'
            ? 'Übersicht über generierte Abrechnungen, Konvertierungsrate und Leistung nach Kundenbetreuer.'
            : 'Visão unificada de faturamento gerado, conversão de propostas e atendimento de meta por executivo de contas.',
          searchPlaceholder: t('search_placeholder'),
        };
      case 'reports':
        return {
          title: language === 'en' ? 'Performance Reports' : language === 'es' ? 'Informes de Rendimiento' : language === 'fr' ? 'Rapports de Performance' : language === 'de' ? 'Leistungsberichte' : 'Relatórios de Performance',
          subtitle: language === 'en'
            ? 'Strategic analysis of client billing, fleet usage, and visual graphs.'
            : language === 'es'
            ? 'Análisis estratégico de facturación de clientes, uso de flotas y gráficos visuales.'
            : language === 'fr'
            ? 'Analyse stratégique de la facturation des clients, de l\'utilisation de la flotte et graphiques visuels.'
            : language === 'de'
            ? 'Strategische Analyse der Kundenabrechnung, Flottennutzung und visuelle Grafiken.'
            : 'Análise estratégica de faturamento de clientes, utilização da frota e gráficos visuais.',
          searchPlaceholder: t('search_placeholder'),
        };
      case 'settings':
        return {
          title: t('settings'),
          subtitle: language === 'en' ? 'System general settings.' : language === 'es' ? 'Configuraciones generales del sistema.' : language === 'fr' ? 'Paramètres généraux du système.' : language === 'de' ? 'Allgemeine Systemeinstellungen.' : 'Configurações gerais do sistema do CRM.',
          searchPlaceholder: t('search_placeholder'),
        };
      default:
        return {
          title: 'CRM Smart',
          subtitle: 'Eixo CRM',
          searchPlaceholder: t('search_placeholder'),
        };
    }
  };

  const details = getHeaderDetails();

  return (
    <header className="bg-white border-b border-[#E2E8F0] px-md py-sm md:px-xl md:py-md flex flex-col md:flex-row justify-between items-start md:items-center gap-md shrink-0 z-10 w-full">
      {/* Title & Subtitle with mobile hamburger */}
      <div className="flex items-center gap-sm w-full md:w-auto">
        <button
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="lg:hidden p-xs text-[#767586] hover:bg-[#F4F6FB] hover:text-[#1B1B23] rounded-lg transition-colors cursor-pointer mr-[2px] shrink-0"
          title={t('Abrir menu')}
        >
          <Menu className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <div className="min-w-0">
          <h2 className="font-headline font-bold text-base md:text-xl text-[#1B1B23] tracking-tight leading-snug truncate">
            {details?.title}
          </h2>
          <p className="font-sans text-[10px] md:text-xs text-[#767586] leading-normal truncate">{details?.subtitle}</p>
        </div>
      </div>

      {/* Center Search Input */}
      <div className="relative w-full max-w-sm">
        <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none text-[#767586]">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={details.searchPlaceholder}
          className="w-full pl-[40px] pr-md py-[10px] bg-[#F4F6FB] border border-transparent rounded-xl font-sans text-xs text-[#1B1B23] placeholder-[#767586] focus:bg-white focus:border-[#5B5FEF] focus:ring-2 focus:ring-[#5B5FEF]/10 outline-none transition-all duration-200"
        />
      </div>

      {/* Right Controls Area (Adaptive based on active Tab) */}
      <div className="flex items-center flex-wrap gap-sm ml-auto">
        {/* Toggles for Period Toggles (Commercial & Travels) */}
        {(activeTab === 'commercial' || activeTab === 'travels') && (
          <div className="bg-[#F4F6FB] p-[3px] rounded-lg flex items-center shrink-0">
            {activeTab === 'travels' && (
              <button className="px-sm py-xs font-sans font-semibold text-[11px] rounded-md text-[#767586] hover:text-[#1B1B23]">
                {t('Dia')}
              </button>
            )}
            {activeTab === 'travels' && (
              <button className="px-sm py-xs font-sans font-semibold text-[11px] rounded-md text-[#767586] hover:text-[#1B1B23]">
                {t('Semana')}
              </button>
            )}
            <button className="px-sm py-xs font-sans font-semibold text-[11px] rounded-md text-white bg-[#5B5FEF] shadow-sm">
              {t('Mês')}
            </button>
            <button className="px-sm py-xs font-sans font-semibold text-[11px] rounded-md text-[#767586] hover:text-[#1B1B23]">
              {t('Ano')}
            </button>
          </div>
        )}

        {/* Month Navigation Control on Travels Calendar */}
        {activeTab === 'travels' && (
          <div className="flex items-center gap-xs bg-white border border-[#E2E8F0] rounded-xl px-xs py-[2px] shadow-sm">
            <button className="p-1 hover:bg-[#F4F6FB] rounded-lg transition-colors text-[#464555]">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-headline text-xs font-bold text-[#1B1B23] px-sm">
              {language === 'en' ? 'January 2026' : language === 'es' ? 'Enero 2026' : language === 'fr' ? 'Janvier 2026' : language === 'de' ? 'Januar 2026' : 'Janeiro 2026'}
            </span>
            <button className="p-1 hover:bg-[#F4F6FB] rounded-lg transition-colors text-[#464555]">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Global Toolbar Action icons */}
        <div className="flex items-center gap-xs">
          {/* Sun/Moon Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-[10px] text-[#767586] hover:text-[#4143D5] hover:bg-[#F0F0FF] rounded-xl transition-all cursor-pointer"
            title="Mudar Tema"
          >
            {themeMode === 'light' ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>

          {/* Bell Icon */}
          <button className="p-[10px] text-[#767586] hover:text-[#4143D5] hover:bg-[#F0F0FF] rounded-xl transition-all relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-[8px] right-[8px] w-2 h-2 bg-[#FF6B6B] rounded-full ring-2 ring-white animate-pulse" />
          </button>

          {/* Help circle for Dashboard and Clients */}
          {(activeTab === 'dashboard' || activeTab === 'clients') && (
            <button className="p-[10px] text-[#767586] hover:text-[#4143D5] hover:bg-[#F0F0FF] rounded-xl transition-all">
              <HelpCircle className="w-4 h-4" />
            </button>
          )}

          {/* Language Selector Dropdown - Available everywhere to allow immediate translation */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-[4px] px-sm py-[8px] bg-[#F4F6FB] dark:bg-[#161922] border border-[#E2E8F0] dark:border-[#272c3d] rounded-xl font-sans text-[11px] font-semibold text-[#464555] dark:text-[#cbd5e1] shrink-0 cursor-pointer hover:bg-[#E2E8F0] dark:hover:bg-[#272c3d] transition-all"
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
                  className="fixed inset-0 z-30" 
                  onClick={() => setIsLangOpen(false)} 
                />
                <div className="absolute right-0 mt-xs w-40 bg-white dark:bg-[#12141c] border border-[#E2E8F0] dark:border-[#272c3d] rounded-2xl shadow-lg py-xs z-40 animate-fade-in font-sans text-[11px] font-medium">
                  <button
                    onClick={() => {
                      changeLanguage('pt');
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-md py-[8px] flex items-center justify-between hover:bg-[#F4F6FB] dark:hover:bg-[#161922] transition-colors ${
                      language === 'pt' ? 'text-[#5B5FEF] font-bold bg-[#F4F6FB]/50 dark:bg-[#161922]/50' : 'text-[#464555] dark:text-[#cbd5e1]'
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
                    className={`w-full text-left px-md py-[8px] flex items-center justify-between hover:bg-[#F4F6FB] dark:hover:bg-[#161922] transition-colors ${
                      language === 'en' ? 'text-[#5B5FEF] font-bold bg-[#F4F6FB]/50 dark:bg-[#161922]/50' : 'text-[#464555] dark:text-[#cbd5e1]'
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
                    className={`w-full text-left px-md py-[8px] flex items-center justify-between hover:bg-[#F4F6FB] dark:hover:bg-[#161922] transition-colors ${
                      language === 'es' ? 'text-[#5B5FEF] font-bold bg-[#F4F6FB]/50 dark:bg-[#161922]/50' : 'text-[#464555] dark:text-[#cbd5e1]'
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
                    className={`w-full text-left px-md py-[8px] flex items-center justify-between hover:bg-[#F4F6FB] dark:hover:bg-[#161922] transition-colors ${
                      language === 'fr' ? 'text-[#5B5FEF] font-bold bg-[#F4F6FB]/50 dark:bg-[#161922]/50' : 'text-[#464555] dark:text-[#cbd5e1]'
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
                    className={`w-full text-left px-md py-[8px] flex items-center justify-between hover:bg-[#F4F6FB] dark:hover:bg-[#161922] transition-colors ${
                      language === 'de' ? 'text-[#5B5FEF] font-bold bg-[#F4F6FB]/50 dark:bg-[#161922]/50' : 'text-[#464555] dark:text-[#cbd5e1]'
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

        {/* Dynamic Context Buttons! */}
        {activeTab === 'dashboard' && (
          <>
            <button
              onClick={() => setActiveTab('clients')}
              className="flex items-center gap-xs px-md py-[10px] bg-white border border-[#E2E8F0] hover:bg-[#F4F6FB] text-[#464555] font-headline text-xs font-bold rounded-xl shadow-sm transition-all active:scale-[0.98] shrink-0 cursor-pointer"
            >
              <UserPlus className="w-[14px] h-[14px]" />
              <span>{t('Gravar Clientes')}</span>
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className="flex items-center gap-xs px-md py-[10px] bg-[#5B5FEF] hover:bg-[#4143D5] text-white font-headline text-xs font-bold rounded-xl shadow-sm shadow-[#5B5FEF]/20 transition-all active:scale-[0.98] shrink-0 cursor-pointer"
            >
              <Plus className="w-[14px] h-[14px]" />
              <span>{t('Orçamento')}</span>
            </button>
          </>
        )}

        {activeTab === 'clients' && (
          <button
            onClick={() => setActiveTab('commercial')}
            className="flex items-center gap-xs px-md py-[10px] bg-[#5B5FEF] hover:bg-[#4143D5] text-white font-headline text-xs font-bold rounded-xl shadow-sm shadow-[#5B5FEF]/20 transition-all active:scale-[0.98] cursor-pointer"
          >
            <Plus className="w-[14px] h-[14px]" />
            <span>+ {t('Orçamento')}</span>
          </button>
        )}

        {activeTab === 'travels' && (
          <button
            onClick={onNewTravelClick}
            className="flex items-center gap-xs px-md py-[10px] bg-[#5B5FEF] hover:bg-[#4143D5] text-white font-headline text-xs font-bold rounded-xl shadow-sm shadow-[#5B5FEF]/20 transition-all active:scale-[0.98] cursor-pointer"
          >
            <Plus className="w-[14px] h-[14px]" />
            <span>{t('Nova Viagem')}</span>
          </button>
        )}

        {activeTab === 'vehicles' && (
          <button
            onClick={onNewVehicleClick}
            className="flex items-center gap-xs px-md py-[10px] bg-[#5B5FEF] hover:bg-[#4143D5] text-white font-headline text-xs font-bold rounded-xl shadow-sm shadow-[#5B5FEF]/20 transition-all active:scale-[0.98] cursor-pointer"
          >
            <Plus className="w-[14px] h-[14px]" />
            <span>{t('Gravar Veículo')}</span>
          </button>
        )}

        {activeTab === 'drivers' && (
          <button
            onClick={onNewDriverClick}
            className="flex items-center gap-xs px-md py-[10px] bg-[#5B5FEF] hover:bg-[#4143D5] text-white font-headline text-xs font-bold rounded-xl shadow-sm shadow-[#5B5FEF]/20 transition-all active:scale-[0.98] cursor-pointer"
          >
            <Plus className="w-[14px] h-[14px]" />
            <span>{t('Novo Motorista')}</span>
          </button>
        )}
      </div>
    </header>
  );
};
