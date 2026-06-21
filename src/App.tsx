/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { LoginView } from './views/LoginView';
import { DashboardView } from './views/DashboardView';
import { ClientsView } from './views/ClientsView';
import { GestaoComercialView } from './views/GestaoComercialView';
import { TravelsView } from './views/TravelsView';
import { VehiclesView } from './views/VehiclesView';
import { DriversListView } from './views/DriversListView';
import { ReportsView } from './views/ReportsView';
import { SettingsView } from './views/SettingsView';

function AppContent() {
  const { userSession, activeTab, setActiveTab } = useApp();
  const [isTravelModalOpen, setIsTravelModalOpen] = useState(false);

  // If user is not authenticated, render the stylish Login screen
  if (!userSession.isLoggedIn) {
    return <LoginView />;
  }

  // Render main core dashboard hub
  return (
    <div className="flex h-screen w-full bg-[#F4F6FB] overflow-hidden">
      {/* 1. Left Sidebar Navigation */}
      <Sidebar />

      {/* 2. Main Right Container */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Context-aware upper Header bar */}
        <Header
          onNewTravelClick={() => setIsTravelModalOpen(true)}
          onNewClientClick={() => setActiveTab('clients')}
          onNewVehicleClick={() => setActiveTab('vehicles')}
          onNewDriverClick={() => setActiveTab('drivers')}
        />

        {/* Central main router pane */}
        <div className="flex-1 overflow-hidden flex flex-col relative">
          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'clients' && <ClientsView />}
          {activeTab === 'commercial' && <GestaoComercialView />}
          
          {activeTab === 'travels' && (
            <TravelsView
              showCreateModalOpen={isTravelModalOpen}
              onCloseCreateModal={() => setIsTravelModalOpen(false)}
            />
          )}

          {activeTab === 'vehicles' && <VehiclesView />}
          {activeTab === 'drivers' && <DriversListView />}
          {activeTab === 'reports' && <ReportsView />}
          {activeTab === 'settings' && <SettingsView />}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
