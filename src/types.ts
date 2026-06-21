export interface Client {
  id: string;
  name: string;
  document: string; // CPF or CNPJ
  birthDate?: string;
  email: string;
  phone: string; // WhatsApp
  createdAt: string;
}

export interface MaintenanceStatus {
  oilChange: number; // 0 to 100%
  oilFilter: number;
  airFilter: number;
  tires: number;
  brakePads: number;
}

export interface MaintenanceDates {
  oilChange: string;
  oilFilter: string;
  airFilter: string;
  tires: string;
  brakePads: string;
  oilChangeNext: string;
  oilFilterNext: string;
  airFilterNext: string;
  tiresNext: string;
  brakePadsNext: string;
}

export interface Vehicle {
  id: string; // usually plates or simple id
  brand: string;
  model: string;
  year: number;
  renavam: string;
  chassi: string;
  mileage: number;
  maintenance: MaintenanceStatus;
  maintenanceDates: MaintenanceDates;
  notes: string;
}

export type DriverStatus = 'disponível' | 'em_viagem' | 'folga';

export interface Driver {
  id: string;
  name: string;
  status: DriverStatus;
  phone?: string;
  licenseNumber?: string;
}

export type TravelStatus = 'pendente' | 'em_viagem' | 'completo' | 'cancelado';

export interface Travel {
  id: string;
  date: string; // YYYY-MM-DD
  vehicleId: string;
  driverId: string;
  clientId: string;
  valueGenerated: number;
  valueBudgeted: number;
  status: TravelStatus;
  origin?: string;
  destination?: string;
}

export interface UserSession {
  username: string;
  email: string;
  role: string;
  isLoggedIn: boolean;
}

export type AppTab =
  | 'dashboard'
  | 'clients'
  | 'commercial'
  | 'travels'
  | 'vehicles'
  | 'drivers'
  | 'reports'
  | 'settings';
