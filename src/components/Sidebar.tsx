import React from 'react';
import { useApp } from '../context/AppContext';
import { AppTab } from '../types';
import {
  Grid2X2,
  UserPlus,
  Receipt,
  CalendarDays,
  Truck,
  Users2,
  TrendingUp,
  BarChart3,
  Settings,
  LogOut,
  Sliders,
  X,
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    userSession, 
    logout, 
    isMobileSidebarOpen, 
    setIsMobileSidebarOpen,
    t,
  } = useApp();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Grid2X2 },
    { id: 'clients', label: 'Gravar Clientes', icon: UserPlus },
    { id: 'vehicles', label: 'Veículos', icon: Truck },
    { id: 'drivers', label: 'Motoristas', icon: Users2 },
    { id: 'travels', label: 'Agenda de viagens', icon: CalendarDays },
    { id: 'commercial', label: 'Gestão Comercial', icon: TrendingUp },
    { id: 'reports', label: 'Relatórios', icon: BarChart3 },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ] as const;

  return (
    <>
      {/* Mobile Drawer Backdrop Overlay */}
      <div
        onClick={() => setIsMobileSidebarOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden ${
          isMobileSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Responsive Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 w-[260px] bg-white border-r border-[#E2E8F0] flex flex-col h-full shrink-0 transition-transform duration-300 transform lg:translate-x-0 lg:static lg:z-20 lg:shadow-none z-50 ${
          isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Logo */}
        <div className="p-xl border-b border-[#F4F6FB] flex items-center justify-between gap-sm">
          <button
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-sm cursor-pointer hover:opacity-90 transition-all duration-150 active:scale-[0.98] text-left focus:outline-none"
            title={t('Ir para o Dashboard')}
          >
            <div className="w-10 h-10 bg-[#5B5FEF] rounded-lg flex items-center justify-center text-white shadow-sm shadow-[#5B5FEF]/20">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-headline font-bold text-lg text-[#4143D5] leading-tight">Eixo</h1>
              <p className="font-sans text-xs text-[#464555] font-medium tracking-wide">CRM Smart</p>
            </div>
          </button>

          {/* Mobile Close Button */}
          <button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="lg:hidden p-[6px] text-[#767586] hover:bg-[#F4F6FB] hover:text-[#1B1B23] rounded-lg transition-colors cursor-pointer"
            title={t('Fechar menu')}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-sm py-lg space-y-xs overflow-y-auto">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as AppTab)}
                className={`w-full flex items-center gap-md px-md py-sm rounded-xl font-sans text-sm font-medium transition-all group duration-200 text-left relative ${
                  isActive
                    ? 'bg-[#F0F0FF] text-[#4143D5]'
                    : 'text-[#464555] hover:bg-[#F4F6FB] hover:text-[#1B1B23]'
                }`}
              >
                {/* Vertical pill indicator */}
                <div
                  className={`w-1 h-5 rounded-full bg-[#4143D5] transition-all absolute left-0 ${
                    isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-50'
                  }`}
                />
                <IconComponent
                  className={`w-[18px] h-[18px] transition-transform group-hover:scale-105 ${
                    isActive ? 'text-[#4143D5]' : 'text-[#767586] group-hover:text-[#464555]'
                  }`}
                />
                <span>{t(item.id)}</span>
              </button>
            );
          })}
        </nav>

        {/* Bottom Profile Section */}
        <div className="p-md border-t border-[#F4F6FB] bg-white">
          <div className="p-sm hover:bg-[#F4F6FB] rounded-xl transition-colors flex items-center gap-sm group relative">
            {/* Avatar circle */}
            <div className="w-10 h-10 bg-[#EFECF9] rounded-xl flex items-center justify-center text-[#4143D5] font-headline font-semibold text-sm shadow-inner shrink-0 group-hover:bg-[#E1E0FF] transition-all">
              AD
            </div>
            {/* User info */}
            <div className="flex-1 min-w-0">
              <h4 className="font-sans text-sm font-semibold text-[#1B1B23] truncate leading-snug">
                {userSession.username || 'Admin'}
              </h4>
              <p className="font-sans text-xs text-[#767586] truncate leading-none mt-[2px]">
                {userSession.email || 'admin@eixo.com.br'}
              </p>
            </div>
            {/* Logout Action */}
            <button
              onClick={logout}
              title={t('logout')}
              className="p-[6px] text-[#767586] hover:text-[#AE2F34] hover:bg-[#FFDAD8] rounded-lg transition-all shrink-0 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
