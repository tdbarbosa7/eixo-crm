import React, { createContext, useContext, useState, useEffect } from 'react';
import { Client, Vehicle, Driver, Travel, UserSession, AppTab } from '../types';
import { Language, translations, TranslationDictionary, translateFallback } from '../utils/translations';

interface AppContextProps {
  clients: Client[];
  vehicles: Vehicle[];
  drivers: Driver[];
  travels: Travel[];
  userSession: UserSession;
  activeTab: AppTab;
  searchQuery: string;
  selectedExecutive: string;
  monthlyGoal: number;
  availableExecutives: string[];
  executiveContractsCount: {[key: string]: number};
  addClient: (client: Omit<Client, 'id' | 'createdAt'>) => Client;
  addVehicle: (vehicle: Omit<Vehicle, 'id'>) => Vehicle;
  updateVehicleMaintenance: (vehicleId: string, itemKey: string, newValue: number, newDate?: string) => void;
  updateVehicleNotes: (vehicleId: string, notes: string) => void;
  addDriver: (driver: Omit<Driver, 'id'>) => Driver;
  updateDriverStatus: (driverId: string, status: Driver['status']) => void;
  addTravel: (travel: Omit<Travel, 'id'>) => Travel;
  updateTravelStatus: (travelId: string, status: Travel['status']) => void;
  deleteTravel: (travelId: string) => void;
  setSearchQuery: (query: string) => void;
  setSelectedExecutive: (executive: string) => void;
  setActiveTab: (tab: AppTab) => void;
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: (isOpen: boolean) => void;
  themeMode: 'light' | 'dark';
  toggleTheme: () => void;
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: any) => string;
  login: (email: string) => boolean;
  logout: () => void;
  resetToDemo: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

// Core Data Demos
const DEMO_CLIENTS: Client[] = [
  {
    id: 'c1',
    name: 'Logística TransBrasil Ltda',
    document: '12.345.678/0001-90',
    birthDate: '1998-05-12',
    email: 'contato@transbrasil.com.br',
    phone: '(11) 98765-4321',
    createdAt: '2025-10-15T10:00:00.000Z',
  },
  {
    id: 'c2',
    name: 'Minas Transportes S.A.',
    document: '98.765.432/0001-21',
    birthDate: '1985-11-20',
    email: 'faturamento@minastrans.com.br',
    phone: '(31) 99888-7766',
    createdAt: '2025-11-02T14:30:00.000Z',
  },
  {
    id: 'c3',
    name: 'Ambev Distribuidora',
    document: '45.678.901/0001-44',
    birthDate: '1972-04-01',
    email: 'logistica.ambev@ambev.com.br',
    phone: '(21) 97100-2233',
    createdAt: '2025-11-20T11:15:00.000Z',
  },
];

const DEMO_VEHICLES: Vehicle[] = [
  {
    id: 'v1',
    brand: 'Volvo',
    model: 'FH 540',
    year: 2024,
    renavam: '12345678901',
    chassi: '9B1234567890ABCDE',
    mileage: 125000,
    maintenance: {
      oilChange: 75,
      oilFilter: 60,
      airFilter: 30,
      tires: 15,
      brakePads: 45,
    },
    maintenanceDates: {
      oilChange: '2026-05-10',
      oilFilter: '2026-05-10',
      airFilter: '2026-04-02',
      tires: '2025-12-15',
      brakePads: '2026-03-20',
      oilChangeNext: '2026-11-10',
      oilFilterNext: '2026-11-10',
      airFilterNext: '2026-10-02',
      tiresNext: '2026-12-15',
      brakePadsNext: '2026-09-20',
    },
    notes: 'Veículo em excelente estado de conservação. Todo o histórico de revisões foi feito na concessionária autorizada.',
  },
  {
    id: 'v2',
    brand: 'Scania',
    model: 'R 450',
    year: 2023,
    renavam: '98765432101',
    chassi: '9B9876543210EDCBA',
    mileage: 84000,
    maintenance: {
      oilChange: 15,
      oilFilter: 20,
      airFilter: 90, // Quase vencendo!
      tires: 55,
      brakePads: 80, // Quase vencendo!
    },
    maintenanceDates: {
      oilChange: '2026-01-14',
      oilFilter: '2026-01-14',
      airFilter: '2025-08-10',
      tires: '2025-11-25',
      brakePads: '2025-09-02',
      oilChangeNext: '2026-07-14',
      oilFilterNext: '2026-07-14',
      airFilterNext: '2026-02-10', // Venceu
      tiresNext: '2026-11-25',
      brakePadsNext: '2026-03-02', // Venceu
    },
    notes: 'Necessita agendar revisão das pastilhas de freio e filtro de ar para os próximos dias.',
  },
  {
    id: 'v3',
    brand: 'Mercedes-Benz',
    model: 'Actros 2651',
    year: 2024,
    renavam: '45678912301',
    chassi: '9B4567891230BBBBB',
    mileage: 12000,
    maintenance: {
      oilChange: 5,
      oilFilter: 5,
      airFilter: 10,
      tires: 5,
      brakePads: 8,
    },
    maintenanceDates: {
      oilChange: '2026-06-01',
      oilFilter: '2026-06-01',
      airFilter: '2026-06-01',
      tires: '2026-06-01',
      brakePads: '2026-06-01',
      oilChangeNext: '2026-12-01',
      oilFilterNext: '2026-12-01',
      airFilterNext: '2026-12-01',
      tiresNext: '2027-06-01',
      brakePadsNext: '2026-12-01',
    },
    notes: 'Caminhão novo, recém-incorporado à frota de longo curso.',
  },
];

const DEMO_DRIVERS: Driver[] = [
  { id: 'd1', name: 'Carlos Souza', status: 'disponível', phone: '(11) 91111-2222' },
  { id: 'd2', name: 'Antônio Silva', status: 'disponível', phone: '(11) 92222-3333' },
  { id: 'd3', name: 'Marcos Oliveira', status: 'em_viagem', phone: '(31) 93333-4444' },
  { id: 'd4', name: 'Roberto Santos', status: 'folga', phone: '(31) 94444-5555' },
  { id: 'd5', name: 'Juliana Rocha', status: 'disponível', phone: '(21) 95555-6666' },
  { id: 'd6', name: 'Rodrigo Lima', status: 'em_viagem', phone: '(21) 96666-7777' },
  { id: 'd7', name: 'Fernando Costa', status: 'folga', phone: '(11) 97777-8888' },
  { id: 'd8', name: 'André Santos', status: 'disponível', phone: '(11) 98888-9999' },
];

const DEMO_TRAVELS: Travel[] = [
  {
    id: 't1',
    date: '2026-01-02',
    vehicleId: 'v2',
    driverId: 'd1',
    clientId: 'c3',
    valueGenerated: 4200,
    valueBudgeted: 3500,
    status: 'completo',
    origin: 'Rio de Janeiro/RJ',
    destination: 'São Paulo/SP',
  },
  {
    id: 't2',
    date: '2026-01-05',
    vehicleId: 'v1',
    driverId: 'd6',
    clientId: 'c1',
    valueGenerated: 8500,
    valueBudgeted: 8000,
    status: 'completo',
    origin: 'Santos/SP',
    destination: 'Curitiba/PR',
  },
  {
    id: 't3',
    date: '2026-01-09',
    vehicleId: 'v3',
    driverId: 'd3',
    clientId: 'c2',
    valueGenerated: 12500,
    valueBudgeted: 12000,
    status: 'completo',
    origin: 'Belo Horizonte/MG',
    destination: 'Salvador/BA',
  },
  {
    id: 't4',
    date: '2026-01-14',
    vehicleId: 'v2',
    driverId: 'd5',
    clientId: 'c3',
    valueGenerated: 5800,
    valueBudgeted: 5200,
    status: 'completo',
    origin: 'São Paulo/SP',
    destination: 'Campinas/SP',
  },
  {
    id: 't5',
    date: '2026-01-18',
    vehicleId: 'v1',
    driverId: 'd2',
    clientId: 'c2',
    valueGenerated: 10200,
    valueBudgeted: 9800,
    status: 'completo',
    origin: 'Uberlândia/MG',
    destination: 'Goiânia/GO',
  },
  {
    id: 't6',
    date: '2026-01-21',
    vehicleId: 'v3',
    driverId: 'd8',
    clientId: 'c1',
    valueGenerated: 6300,
    valueBudgeted: 6000,
    status: 'em_viagem',
    origin: 'São Paulo/SP',
    destination: 'Porto Alegre/RS',
  },
  {
    id: 't7',
    date: '2026-01-24',
    vehicleId: 'v2',
    driverId: 'd3',
    clientId: 'c3',
    valueGenerated: 5500,
    valueBudgeted: 5500,
    status: 'pendente',
    origin: 'Rio de Janeiro/RJ',
    destination: 'Vitória/ES',
  },
  {
    id: 't8',
    date: '2026-01-28',
    vehicleId: 'v1',
    driverId: 'd6',
    clientId: 'c2',
    valueGenerated: 11000,
    valueBudgeted: 10500,
    status: 'pendente',
    origin: 'Sete Lagoas/MG',
    destination: 'Brasília/DF',
  },
  {
    id: 't9',
    date: '2026-01-30',
    vehicleId: 'v3',
    driverId: 'd1',
    clientId: 'c1',
    valueGenerated: 9400,
    valueBudgeted: 9000,
    status: 'pendente',
    origin: 'São Paulo/SP',
    destination: 'Recife/PE',
  },
];

const AVAILABLE_EXECUTIVES = [
  'Carlos Santana',
  'Amanda Lima',
  'Fernanda Souza',
  'Alexandre Rezende',
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Limpeza total do CRM para iniciar com o sistema completamente vazio e limpo
  if (typeof window !== 'undefined' && !localStorage.getItem('eixo_empty_crm_v1.0.7')) {
    localStorage.setItem('eixo_clients', JSON.stringify([]));
    localStorage.setItem('eixo_vehicles', JSON.stringify([]));
    localStorage.setItem('eixo_drivers', JSON.stringify([]));
    localStorage.setItem('eixo_travels', JSON.stringify([]));
    localStorage.setItem('eixo_empty_crm_v1.0.7', 'true');
  }

  const [clients, setClients] = useState<Client[]>(() => {
    const saved = localStorage.getItem('eixo_clients');
    return saved ? JSON.parse(saved) : [];
  });

  const [vehicles, setVehicles] = useState<Vehicle[]>(() => {
    const saved = localStorage.getItem('eixo_vehicles');
    return saved ? JSON.parse(saved) : [];
  });

  const [drivers, setDrivers] = useState<Driver[]>(() => {
    const saved = localStorage.getItem('eixo_drivers');
    return saved ? JSON.parse(saved) : [];
  });

  const [travels, setTravels] = useState<Travel[]>(() => {
    const saved = localStorage.getItem('eixo_travels');
    return saved ? JSON.parse(saved) : [];
  });

  const [userSession, setUserSession] = useState<UserSession>(() => {
    const saved = localStorage.getItem('eixo_session');
    return saved
      ? JSON.parse(saved)
      : { username: 'Admin', email: 'admin@eixo.com.br', role: 'Diretor de Logística', isLoggedIn: false };
  });

  const [activeTab, setActiveTabState] = useState<AppTab>(() => {
    const saved = localStorage.getItem('eixo_active_tab');
    return (saved as AppTab) || 'dashboard';
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExecutive, setSelectedExecutive] = useState(AVAILABLE_EXECUTIVES[0]);
  const [monthlyGoal] = useState(150000); // Meta de R$ 150.000,00
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const [themeMode, setThemeModeState] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('eixo_theme_mode');
      return (saved as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  const toggleTheme = () => {
    setThemeModeState((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('eixo_theme_mode', next);
      return next;
    });
  };

  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('eixo_language');
      return (saved as Language) || 'pt';
    }
    return 'pt';
  });

  const changeLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('eixo_language', lang);
    }
  };

  const t = (key: any): string => {
    if (translations[language] && String(key) in translations[language]) {
      return translations[language][String(key) as keyof TranslationDictionary] || translations['pt'][String(key) as keyof TranslationDictionary] || String(key);
    }
    return translateFallback(String(key), language);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (themeMode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [themeMode]);

  // Mock executive association: We map clients to executives
  // Executive Carlos Santana -> Client logistica transbrasil (c1)
  // Amanda Lima -> Client minas transportes (c2)
  // Fernanda Souza -> Client ambev (c3)
  // Alexandre Rezende -> New clients
  const [executiveContractsCount, setExecutiveContractsCount] = useState<{[key: string]: number}>({
    'Carlos Santana': 0,
    'Amanda Lima': 0,
    'Fernanda Souza': 0,
    'Alexandre Rezende': 0,
  });

  // Keep localStorage updated
  useEffect(() => {
    localStorage.setItem('eixo_clients', JSON.stringify(clients));
  }, [clients]);

  useEffect(() => {
    localStorage.setItem('eixo_vehicles', JSON.stringify(vehicles));
  }, [vehicles]);

  useEffect(() => {
    localStorage.setItem('eixo_drivers', JSON.stringify(drivers));
  }, [drivers]);

  useEffect(() => {
    localStorage.setItem('eixo_travels', JSON.stringify(travels));
  }, [travels]);

  useEffect(() => {
    localStorage.setItem('eixo_session', JSON.stringify(userSession));
  }, [userSession]);

  const setActiveTab = (tab: AppTab) => {
    setActiveTabState(tab);
    localStorage.setItem('eixo_active_tab', tab);
    setIsMobileSidebarOpen(false);
  };

  // Sync driver status based on travels automatically
  useEffect(() => {
    // Collect drivers currently on travels
    const activeRouteDriverIds = travels
      .filter((t) => t.status === 'em_viagem')
      .map((t) => t.driverId);

    setDrivers((prev) =>
      prev.map((driver) => {
        if (activeRouteDriverIds.includes(driver.id)) {
          return { ...driver, status: 'em_viagem' };
        } else if (driver.status === 'em_viagem') {
          // If was 'em_viagem' but no active travel, mark 'disponível'
          return { ...driver, status: 'disponível' };
        }
        return driver;
      })
    );
  }, [travels]);

  // Client Actions
  const addClient = (newClient: Omit<Client, 'id' | 'createdAt'>) => {
    const fresh: Client = {
      ...newClient,
      id: 'c_' + Date.now(),
      createdAt: new Date().toISOString(),
    };
    setClients((prev) => [fresh, ...prev]);

    // Assign automatically to the selected/active executive
    setExecutiveContractsCount((prev) => ({
      ...prev,
      [selectedExecutive]: (prev[selectedExecutive] || 0) + 1,
    }));

    return fresh;
  };

  // Vehicle Actions
  const addVehicle = (newVehicle: Omit<Vehicle, 'id'>) => {
    const id = 'v_' + Math.floor(Math.random() * 1000);
    const fresh: Vehicle = {
      ...newVehicle,
      id,
    };
    setVehicles((prev) => [...prev, fresh]);
    return fresh;
  };

  const updateVehicleMaintenance = (
    vehicleId: string,
    itemKey: string,
    newValue: number,
    newDate?: string
  ) => {
    setVehicles((prev) =>
      prev.map((v) => {
        if (v.id === vehicleId) {
          const nextDateKey = `${itemKey}Next`;
          const updatedDates = { ...v.maintenanceDates };
          if (newDate) {
            updatedDates[itemKey as keyof typeof v.maintenanceDates] = newDate;
            // set standard next date projection + 180 days
            const dateObj = new Date(newDate);
            dateObj.setDate(dateObj.getDate() + 180);
            const nextStr = dateObj.toISOString().split('T')[0];
            (updatedDates as any)[nextDateKey] = nextStr;
          }
          return {
            ...v,
            maintenance: {
              ...v.maintenance,
              [itemKey]: newValue,
            },
            maintenanceDates: updatedDates,
          };
        }
        return v;
      })
    );
  };

  const updateVehicleNotes = (vehicleId: string, notes: string) => {
    setVehicles((prev) =>
      prev.map((v) => {
        if (v.id === vehicleId) {
          return { ...v, notes };
        }
        return v;
      })
    );
  };

  // Driver Actions
  const addDriver = (newDriver: Omit<Driver, 'id'>) => {
    const id = 'd_' + Date.now();
    const fresh: Driver = {
      ...newDriver,
      id,
    };
    setDrivers((prev) => [...prev, fresh]);
    return fresh;
  };

  const updateDriverStatus = (driverId: string, status: Driver['status']) => {
    setDrivers((prev) =>
      prev.map((d) => (d.id === driverId ? { ...d, status } : d))
    );
  };

  // Travel Actions
  const addTravel = (newTravel: Omit<Travel, 'id'>) => {
    const id = 't_' + Date.now();
    const fresh: Travel = {
      ...newTravel,
      id,
    };
    setTravels((prev) => [fresh, ...prev]);

    // Automatically update driver status if travel is in route
    if (newTravel.status === 'em_viagem') {
      updateDriverStatus(newTravel.driverId, 'em_viagem');
    }

    return fresh;
  };

  const updateTravelStatus = (travelId: string, status: Travel['status']) => {
    setTravels((prev) =>
      prev.map((t) => {
        if (t.id === travelId) {
          return { ...t, status };
        }
        return t;
      })
    );
  };

  const deleteTravel = (travelId: string) => {
    setTravels((prev) => prev.filter((t) => t.id !== travelId));
  };

  // Login/Logout Session control
  const login = (email: string) => {
    if (email) {
      setUserSession({
        username: email.split('@')[0],
        email: email,
        role: 'Diretor de Logística',
        isLoggedIn: true,
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUserSession({
      username: 'Admin',
      email: 'admin@eixo.com.br',
      role: 'Diretor de Logística',
      isLoggedIn: false,
    });
    setActiveTab('dashboard');
  };

  // Reset to initial demo database values
  const resetToDemo = () => {
    setClients([]);
    setVehicles([]);
    setDrivers([]);
    setTravels([]);
    setExecutiveContractsCount({
      'Carlos Santana': 0,
      'Amanda Lima': 0,
      'Fernanda Souza': 0,
      'Alexandre Rezende': 0,
    });
    setSelectedExecutive(AVAILABLE_EXECUTIVES[0]);
    localStorage.removeItem('eixo_clients');
    localStorage.removeItem('eixo_vehicles');
    localStorage.removeItem('eixo_drivers');
    localStorage.removeItem('eixo_travels');
  };

  return (
    <AppContext.Provider
      value={{
        clients,
        vehicles,
        drivers,
        travels,
        userSession,
        activeTab,
        searchQuery,
        selectedExecutive,
        monthlyGoal,
        availableExecutives: AVAILABLE_EXECUTIVES,
        executiveContractsCount,
        addClient,
        addVehicle,
        updateVehicleMaintenance,
        updateVehicleNotes,
        addDriver,
        updateDriverStatus,
        addTravel,
        updateTravelStatus,
        deleteTravel,
        setSearchQuery,
        setSelectedExecutive,
        setActiveTab,
        isMobileSidebarOpen,
        setIsMobileSidebarOpen,
        themeMode,
        toggleTheme,
        language,
        changeLanguage,
        t,
        login,
        logout,
        resetToDemo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
