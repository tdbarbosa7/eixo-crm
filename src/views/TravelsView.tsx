import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Travel, Vehicle, Driver, Client, TravelStatus } from '../types';
import {
  Calendar as CalendarIcon,
  Search,
  Filter,
  CheckCircle,
  Truck,
  User,
  Users,
  Compass,
  AlertCircle,
  Clock,
  X,
  XCircle,
  CheckSquare,
} from 'lucide-react';

interface TravelsViewProps {
  showCreateModalOpen: boolean;
  onCloseCreateModal: () => void;
}

export const TravelsView: React.FC<TravelsViewProps> = ({
  showCreateModalOpen,
  onCloseCreateModal,
}) => {
  const {
    travels,
    vehicles,
    drivers,
    clients,
    addTravel,
    updateTravelStatus,
    deleteTravel,
    searchQuery,
    t,
    language,
  } = useApp();

  // Filter selections
  const [selectedVehicleFilter, setSelectedVehicleFilter] = useState('all');
  const [selectedDriverFilter, setSelectedDriverFilter] = useState('all');

  // Form states inside modal
  const [selectedDate, setSelectedDate] = useState('2026-01-02');
  const [selectedClientId, setSelectedClientId] = useState('');
  const [selectedVehicleId, setSelectedVehicleId] = useState('');
  const [selectedDriverId, setSelectedDriverId] = useState('');
  const [valGenerado, setValGenerado] = useState(5000);
  const [valOrçado, setValOrçado] = useState(4500);
  const [travelStatus, setTravelStatus] = useState<Travel['status']>('pendente');
  const [origin, setOrigin] = useState('São Paulo/SP');
  const [destination, setDestination] = useState('Rio de Janeiro/RJ');

  // Load defaults for dropdown values when modal opens
  React.useEffect(() => {
    if (clients.length > 0) setSelectedClientId(clients[0].id);
    if (vehicles.length > 0) setSelectedVehicleId(vehicles[0].id);
    if (drivers.length > 0) {
      // Prefer available drivers
      const av = drivers.find((d) => d.status === 'disponível');
      setSelectedDriverId(av ? av.id : drivers[0].id);
    }
  }, [clients, vehicles, drivers, showCreateModalOpen]);

  // Calendar configuration (January 2026)
  // According to Screen 4, Row 1 starts directly on "02" to "08", followed by "09" to "15", and so forth.
  // This is a direct layout layout containing 4 weeks:
  const calendarDays = [
    ['02', '03', '04', '05', '06', '07', '08'],
    ['09', '10', '11', '12', '13', '14', '15'],
    ['16', '17', '18', '19', '20', '21', '22'],
    ['23', '24', '25', '26', '27', '28', '29'],
  ];

  const getClientAbbreviation = (clientId: string) => {
    const c = clients.find((client) => client.id === clientId);
    if (!c) return 'CL';
    return c.name.split(' ')[0] || 'CL';
  };

  const getVehicleShortName = (vehicleId: string) => {
    const v = vehicles.find((veh) => veh.id === vehicleId);
    if (!v) return 'Vei';
    return `${v.brand} ${v.model}`;
  };

  const getDriverShortName = (driverId: string) => {
    const d = drivers.find((drv) => drv.id === driverId);
    if (!d) return 'Mot';
    return d.name;
  };

  // Find travels registered on a specific day of January 2026 (yyyy-mm-dd)
  const getTravelForDay = (dayStr: string) => {
    const targetDate = `2026-01-${dayStr}`;
    return travels.find((t) => {
      // Allow searching or filtering
      const matchesDate = t.date === targetDate;
      const matchesVehicle = selectedVehicleFilter === 'all' || t.vehicleId === selectedVehicleFilter;
      const matchesDriver = selectedDriverFilter === 'all' || t.driverId === selectedDriverFilter;
      const matchesSearch =
        !searchQuery ||
        getClientAbbreviation(t.clientId).toLowerCase().includes(searchQuery.toLowerCase()) ||
        getDriverShortName(t.driverId).toLowerCase().includes(searchQuery.toLowerCase());

      return matchesDate && matchesVehicle && matchesDriver && matchesSearch;
    });
  };

  const totals = useMemo(() => {
    const totalVehicles = vehicles.length;
    const availableDrivers = drivers.filter((d) => d.status === 'disponível').length;
    return {
      totalVehicles,
      availableDrivers,
    };
  }, [vehicles, drivers]);

  const handleCreateTravel = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClientId || !selectedVehicleId || !selectedDriverId) return;

    addTravel({
      date: selectedDate,
      clientId: selectedClientId,
      vehicleId: selectedVehicleId,
      driverId: selectedDriverId,
      valueGenerated: valGenerado,
      valueBudgeted: valOrçado,
      status: travelStatus,
      origin,
      destination,
    });

    onCloseCreateModal();
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#F4F6FB] p-md md:p-xl space-y-md md:space-y-lg relative">
      
      {/* 1. Filter selectors row matching style from Screen 4 */}
      <div className="bg-white p-md rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col md:flex-row items-center justify-between gap-md">
        <div className="flex items-center gap-xs text-[#767586] w-full max-w-xs px-sm py-[6px] bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs">
          <Search className="w-4 h-4 text-[#767586]" />
          <input
            type="text"
            placeholder={t('Buscar viagem, cliente...')}
            className="bg-transparent border-0 outline-none w-full placeholder-[#C6C5D7] focus:ring-0 text-xs"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-xs items-center w-full md:w-auto">
          {/* Vehicles selector */}
          <select
            value={selectedVehicleFilter}
            onChange={(e) => setSelectedVehicleFilter(e.target.value)}
            className="w-full md:w-44 px-sm py-[7px] bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]"
          >
            <option value="all">{t('Todos Veículos')}</option>
            {vehicles.map((v) => (
              <option key={v.id} value={v.id}>
                {v.brand} {v.model}
              </option>
            ))}
          </select>

          {/* Drivers selector */}
          <select
            value={selectedDriverFilter}
            onChange={(e) => setSelectedDriverFilter(e.target.value)}
            className="w-full md:w-44 px-sm py-[7px] bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]"
          >
            <option value="all">{t('Todos Motoristas')}</option>
            {drivers.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name} ({t(d.status)})
              </option>
            ))}
          </select>

          <button className="flex items-center gap-xs px-sm py-[7px] bg-[#F4F6FB] hover:bg-[#E1E0FF] hover:text-[#4143D5] text-[#464555] font-sans text-xs font-bold rounded-xl border border-[#C6C5D7] cursor-pointer shrink-0 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            <span>{t('Filtros Avançados')}</span>
          </button>
        </div>
      </div>

      {/* 2. Calendar grid container matching Screen 4 and Screen layouts */}
      <div className="bg-white rounded-xxl border border-[#E2E8F0] shadow-sm p-lg overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Weekday headers */}
          <div className="grid grid-cols-7 gap-sm text-center mb-sm font-sans font-bold text-xs text-[#767586] border-b border-[#F4F6FB] pb-xs">
            <span>{t('Dom')}</span>
            <span>{t('Seg')}</span>
            <span>{t('Ter')}</span>
            <span>{t('Qua')}</span>
            <span>{t('Qui')}</span>
            <span>{t('Sex')}</span>
            <span>{t('Sáb')}</span>
          </div>

          {/* Day rows */}
          <div className="space-y-sm">
            {calendarDays.map((row, rowIdx) => (
              <div key={rowIdx} className="grid grid-cols-7 gap-sm">
                {row.map((dayNum) => {
                  const travel = getTravelForDay(dayNum);

                  return (
                    <div
                      key={dayNum}
                      className="border border-[#C6C5D7]/50 rounded-2xl p-sm bg-[#F5F2FE]/40 flex flex-col justify-between min-h-[120px] shadow-sm relative group hover:border-[#5B5FEF] transition-all"
                    >
                      {/* Day Number */}
                      <span className="font-headline font-semibold text-xs text-[#767586] mb-xs">
                        {dayNum}
                      </span>

                      {/* Travel Details or templates slots */}
                      {travel ? (
                        <div className="space-y-[4px] z-10">
                          {/* Inner customized badge */}
                          <div className="bg-[#5B5FEF] text-white p-xs rounded-lg text-[10px] font-bold shadow-sm leading-tight">
                            <p className="truncate font-sans uppercase">
                              {getClientAbbreviation(travel.clientId)}
                            </p>
                          </div>
                          
                          {/* Status and icons details */}
                          <div className="p-xs bg-white border border-[#E2E8F0] rounded-lg space-y-[2px] shadow-inner text-[9px] font-semibold text-[#464555]">
                            <p className="truncate flex items-center gap-[2px]">
                              <Truck className="w-2.5 h-2.5 text-[#5B5FEF]" />
                              <span>{getVehicleShortName(travel.vehicleId)}</span>
                            </p>
                            <p className="truncate flex items-center gap-[2px]">
                              <User className="w-2.5 h-2.5 text-[#767586]" />
                              <span>{getDriverShortName(travel.driverId)}</span>
                            </p>
                          </div>

                          {/* Float delete trigger */}
                          <button
                            onClick={() => deleteTravel(travel.id)}
                            className="absolute top-2 right-2 bg-[#FFDAD6] hover:bg-[#AE2F34] hover:text-white p-[3px] rounded-lg transition-colors text-[#AE2F34] cursor-pointer opacity-0 group-hover:opacity-100"
                            title={t('Remover')}
                          >
                            <X className="w-2.5 h-2.5" />
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-sm flex-1 flex flex-col justify-end">
                          {/* Unscheduled template Slots as requested in Screen 4 */}
                          <div className="border border-dashed border-[#C6C5D7] rounded-lg p-xs text-center text-[9px] font-bold text-[#767586]/70 uppercase tracking-wider">
                            ⚙ {t('VEÍCULO')}
                          </div>
                          <div className="border border-dashed border-[#C6C5D7] rounded-lg p-xs text-center text-[9px] font-bold text-[#767586]/70 uppercase tracking-wider">
                            👤 {t('MOTORISTA')}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Bottom Indicators Row matching Screen 4 layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {/* Available vehicles */}
        <div className="bg-white p-md rounded-2xl border border-[#E2E8F0] shadow-sm flex items-center gap-sm">
          <div className="w-10 h-10 bg-[#E8F8EF] rounded-xl flex items-center justify-center text-[#2ECC71]">
            <CheckSquare className="w-5 h-5" />
          </div>
          <div>
            <span className="font-sans text-[10px] uppercase font-bold text-[#767586]">{t('Disponíveis')}</span>
            <p className="font-headline font-bold text-xs text-[#1B1B23]">
              {totals.totalVehicles} {t('Veículos cadastrados')}
            </p>
          </div>
        </div>

        {/* Standby drivers */}
        <div className="bg-white p-md rounded-2xl border border-[#E2E8F0] shadow-sm flex items-center gap-sm">
          <div className="w-10 h-10 bg-[#EFECF9] rounded-xl flex items-center justify-center text-[#5B5FEF]">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="font-sans text-[10px] uppercase font-bold text-[#767586]">{t('Motoristas')}</span>
            <p className="font-headline font-bold text-xs text-[#1B1B23]">
              {totals.availableDrivers} {t('de Prontidão')}
            </p>
          </div>
        </div>

        {/* State of Agenda */}
        <div className="bg-[#FFF6E3] p-md rounded-2xl border border-[#F5A623]/20 shadow-sm flex items-center gap-sm">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#F5A623]">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="font-sans text-[10px] uppercase font-bold text-[#F5A623]">{t('Estado da Agenda')}</span>
            <p className="font-sans text-xs text-[#464555] leading-snug">
              {travels.length === 0
                ? t('Seu calendário de Janeiro de 2026 está virgem. Inicie selecionando ')
                : `${t('Seu calendário de Janeiro tem')} ${travels.length} ${t('viagens e planejamentos configurados.')}`}
            </p>
          </div>
        </div>
      </div>

      {/* 4. Scheduling "Nova Viagem" Interactive Dialog Modal */}
      {showCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-md py-[100px] overflow-y-auto">
          <div className="bg-white rounded-xxl p-lg md:p-xl w-full max-w-lg border border-[#E2E8F0] shadow-2xl relative my-auto animate-zoom-in">
            {/* Modal Header */}
            <div className="flex justify-between items-center pb-sm border-b border-[#F4F6FB] mb-md">
              <h3 className="font-headline font-bold text-base text-[#1B1B23] flex items-center gap-xs">
                <CalendarIcon className="w-5 h-5 text-[#5B5FEF]" />
                <span>{t('Nova Alocação de Viagem')}</span>
              </h3>
              <button
                onClick={onCloseCreateModal}
                className="p-1 hover:bg-[#F4F6FB] rounded-lg text-[#767586] hover:text-[#AE2F34] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Travel Setup Form */}
            <form onSubmit={handleCreateTravel} className="space-y-md">
              {/* Client select */}
              <div className="flex flex-col gap-xs">
                <label className="font-sans font-bold text-[11px] text-[#464555]">
                  {t('Cliente Responsável')} <span className="text-[#AE2F34]">*</span>
                </label>
                <select
                  required
                  value={selectedClientId}
                  onChange={(e) => setSelectedClientId(e.target.value)}
                  className="w-full px-md py-[8px] bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]"
                >
                  <option value="" disabled>{t('Escolha um cliente')}</option>
                  {clients.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Day Date and Origin/Destination */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className="font-sans font-bold text-[11px] text-[#464555]">
                    {t('Dia Programado')} <span className="text-[#AE2F34]">*</span>
                  </label>
                  <select
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-md py-[8px] bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]"
                  >
                    {/* Generates dates list of Jan 2026 */}
                    <option value="2026-01-02">02 {t('de Janeiro (Sexta)')}</option>
                    <option value="2026-01-03">03 {t('de Janeiro (Sábado)')}</option>
                    <option value="2026-01-04">04 {t('de Janeiro (Domingo)')}</option>
                    <option value="2026-01-05">05 {t('de Janeiro (Segunda)')}</option>
                    <option value="2026-01-06">06 {t('de Janeiro (Terça)')}</option>
                    <option value="2026-01-07">07 {t('de Janeiro (Quarta)')}</option>
                    <option value="2026-01-08">08 {t('de Janeiro (Quinta)')}</option>
                    <option value="2026-01-09">09 {t('de Janeiro (Sexta)')}</option>
                    <option value="2026-01-12">12 {t('de Janeiro (Segunda)')}</option>
                    <option value="2026-01-14">14 {t('de Janeiro (Quarta)')}</option>
                    <option value="2026-01-18">18 {t('de Janeiro (Domingo)')}</option>
                    <option value="2026-01-20">20 {t('de Janeiro (Terça)')}</option>
                    <option value="2026-01-21">21 {t('de Janeiro (Quarta)')}</option>
                    <option value="2026-01-24">24 {t('de Janeiro (Sábado)')}</option>
                    <option value="2026-01-28">28 {t('de Janeiro (Quarta)')}</option>
                    <option value="2026-01-30">30 {t('de Janeiro (Sexta)')}</option>
                  </select>
                </div>

                <div className="flex flex-col gap-xs">
                  <label className="font-sans font-bold text-[11px] text-[#464555]">
                    {t('Status da Viagem')}
                  </label>
                  <select
                    value={travelStatus}
                    onChange={(e) => setTravelStatus(e.target.value as TravelStatus)}
                    className="w-full px-md py-[8px] bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]"
                  >
                    <option value="pendente">{t('Pendente')}</option>
                    <option value="em_viagem">{t('Em Rota')}</option>
                    <option value="completo">{t('Completo')}</option>
                  </select>
                </div>
              </div>

              {/* Elements Allocation (Vehicle & Driver) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className="font-sans font-bold text-[11px] text-[#464555]">
                    {t('Veículo Alocado')} <span className="text-[#AE2F34]">*</span>
                  </label>
                  <select
                    required
                    value={selectedVehicleId}
                    onChange={(e) => setSelectedVehicleId(e.target.value)}
                    className="w-full px-md py-[8px] bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]"
                  >
                    {vehicles.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.brand} {v.model}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-xs">
                  <label className="font-sans font-bold text-[11px] text-[#464555]">
                    {t('Motorista Alocado')} <span className="text-[#AE2F34]">*</span>
                  </label>
                  <select
                    required
                    value={selectedDriverId}
                    onChange={(e) => setSelectedDriverId(e.target.value)}
                    className="w-full px-md py-[8px] bg-[#F4F6FB] border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]"
                  >
                    {drivers.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} ({t(d.status)})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Origin & Destination route */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className="font-sans font-bold text-[11px] text-[#464555]">
                    {t('Origem')}
                  </label>
                  <input
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full px-md py-sm bg-white border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]"
                  />
                </div>

                <div className="flex flex-col gap-xs">
                  <label className="font-sans font-bold text-[11px] text-[#464555]">
                    {t('Destino')}
                  </label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-md py-sm bg-white border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]"
                  />
                </div>
              </div>

              {/* Financial values (budget vs generated) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className="font-sans font-bold text-[11px] text-[#464555]">
                    {t('Valor Gerado (R$)')} <span className="text-[#AE2F34]">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    value={valGenerado}
                    onChange={(e) => setValGenerado(Number(e.target.value))}
                    className="w-full px-md py-[7px] bg-white border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]"
                  />
                </div>

                <div className="flex flex-col gap-xs">
                  <label className="font-sans font-bold text-[11px] text-[#464555]">
                    {t('Valor Orçado (R$)')} <span className="text-[#AE2F34]">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    value={valOrçado}
                    onChange={(e) => setValOrçado(Number(e.target.value))}
                    className="w-full px-md py-[7px] bg-white border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23]"
                  />
                </div>
              </div>

              {/* Modal buttons */}
              <div className="flex justify-end items-center gap-sm pt-md border-t border-[#F4F6FB] mt-lg">
                <button
                  type="button"
                  onClick={onCloseCreateModal}
                  className="px-lg py-sm bg-white border border-[#C6C5D7] text-[#464555] hover:bg-[#F4F6FB] hover:text-[#1B1B23] font-headline text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  {t('Cancelar')}
                </button>
                <button
                  type="submit"
                  className="px-lg py-sm bg-[#5B5FEF] text-white hover:bg-[#4143D5] font-headline text-xs font-bold rounded-xl shadow-md shadow-[#5B5FEF]/20 transition-all active:scale-[0.98] cursor-pointer"
                >
                  {t('Agendar Viagem')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
