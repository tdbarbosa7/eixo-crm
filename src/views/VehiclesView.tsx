import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Vehicle } from '../types';
import {
  Wrench,
  Gauge,
  Calendar,
  AlertCircle,
  Truck,
  CheckCircle,
  Clipboard,
  Droplet,
  Disc,
  Disc3,
  FileText,
  AlertTriangle,
} from 'lucide-react';

export const VehiclesView: React.FC = () => {
  const { vehicles, addVehicle, t, language } = useApp();

  // New vehicle form states
  const [brand, setBrand] = useState('Volvo');
  const [model, setModel] = useState('');
  const [year, setYear] = useState(2024);
  const [renavam, setRenavam] = useState('');
  const [chassi, setChassi] = useState('');
  const [mileage, setMileage] = useState(0);
  const [notes, setNotes] = useState('');

  // Maintenance slider states (0% = Em dia, 100% = Vencido)
  const [oilChangePct, setOilChangePct] = useState(30);
  const [oilFilterPct, setOilFilterPct] = useState(25);
  const [airFilterPct, setAirFilterPct] = useState(10);
  const [tiresPct, setTiresPct] = useState(15);
  const [brakePadsPct, setBrakePadsPct] = useState(20);

  // Maintenance Dates states
  const [lastOilChangeDate, setLastOilChangeDate] = useState('2026-06-01');
  const [lastOilFilterDate, setLastOilFilterDate] = useState('2026-06-01');
  const [lastAirFilterDate, setLastAirFilterDate] = useState('2026-06-01');
  const [lastTiresDate, setLastTiresDate] = useState('2026-06-01');
  const [lastBrakePadsDate, setLastBrakePadsDate] = useState('2026-06-01');

  const [successMessage, setSuccessMessage] = useState('');

  const calculateNextDate = (dateStr: string) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    d.setMonth(d.getMonth() + 6); // Add 6 months
    return d.toISOString().split('T')[0];
  };

  const isFormValid = model.trim().length > 0 && renavam.trim().length > 0 && chassi.trim().length > 0;

  const handleSaveVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    const saved = addVehicle({
      brand,
      model,
      year: Number(year),
      renavam,
      chassi,
      mileage: Number(mileage),
      notes,
      maintenance: {
        oilChange: oilChangePct,
        oilFilter: oilFilterPct,
        airFilter: airFilterPct,
        tires: tiresPct,
        brakePads: brakePadsPct,
      },
      maintenanceDates: {
        oilChange: lastOilChangeDate,
        oilFilter: lastOilFilterDate,
        airFilter: lastAirFilterDate,
        tires: lastTiresDate,
        brakePads: lastBrakePadsDate,
        oilChangeNext: calculateNextDate(lastOilChangeDate),
        oilFilterNext: calculateNextDate(lastOilFilterDate),
        airFilterNext: calculateNextDate(lastAirFilterDate),
        tiresNext: calculateNextDate(lastTiresDate),
        brakePadsNext: calculateNextDate(lastBrakePadsDate),
      },
    });

    const msg = language === 'en'
      ? `Vehicle "${saved.brand} ${saved.model}" saved successfully!`
      : language === 'es'
      ? `¡Vehículo "${saved.brand} ${saved.model}" guardado con éxito!`
      : language === 'fr'
      ? `Véhicule "${saved.brand} ${saved.model}" enregistré de manière réussie !`
      : language === 'de'
      ? `Fahrzeug "${saved.brand} ${saved.model}" erfolgreich gespeichert!`
      : `Veículo "${saved.brand} ${saved.model}" gravado com sucesso!`;
    setSuccessMessage(msg);

    // Reset fields
    setModel('');
    setYear(2024);
    setRenavam('');
    setChassi('');
    setMileage(0);
    setNotes('');
    setOilChangePct(20);
    setOilFilterPct(20);
    setAirFilterPct(20);
    setTiresPct(20);
    setBrakePadsPct(20);

    setTimeout(() => {
      setSuccessMessage('');
    }, 4500);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#F4F6FB] p-md md:p-xl space-y-md md:space-y-lg">
      
      {successMessage && (
        <div className="p-sm bg-[#E8F8EF] border border-[#2ECC71]/20 text-[#006733] rounded-2xl flex items-center gap-sm text-xs font-semibold animate-fade-in shadow-sm">
          <CheckCircle className="w-5 h-5 text-[#2ECC71]" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Main Cadastro form matching screen 3 format */}
      <div className="bg-white rounded-xxl border border-[#E2E8F0] shadow-sm p-xl">
        <form onSubmit={handleSaveVehicle} className="space-y-lg">
          
          {/* Card Section 1: Dados do Veículo */}
          <div className="space-y-md">
            <div className="flex items-center gap-xs text-[#5B5FEF] border-b border-[#F4F6FB] pb-xs">
              <Truck className="w-5 h-5" />
              <h4 className="font-headline font-bold text-sm text-[#1B1B23]">
                {t('Dados do Veículo')}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              {/* Marca select */}
              <div className="flex flex-col gap-xs">
                <label className="font-sans font-bold text-[11px] text-[#464555]">
                  {t('Marca')} <span className="text-[#AE2F34]">*</span>
                </label>
                <select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="w-full px-md py-sm bg-white border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23] focus:border-[#5B5FEF] outline-none"
                >
                  <option value="Volvo">Volvo</option>
                  <option value="Scania">Scania</option>
                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                  <option value="Volkswagen">Volkswagen</option>
                  <option value="Iveco">Iveco</option>
                  <option value="Ford">Ford</option>
                </select>
              </div>

              {/* Modelo */}
              <div className="flex flex-col gap-xs">
                <label className="font-sans font-bold text-[11px] text-[#464555]">
                  {t('Modelo')} <span className="text-[#AE2F34]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="Ex: Corolla XEI / FH 540"
                  className="w-full px-md py-sm bg-white border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23] focus:border-[#5B5FEF] outline-none"
                />
              </div>

              {/* Ano de Fabricação */}
              <div className="flex flex-col gap-xs">
                <label className="font-sans font-bold text-[11px] text-[#464555]">
                  {t('Ano de Fabricação')} <span className="text-[#AE2F34]">*</span>
                </label>
                <input
                  type="number"
                  required
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  placeholder="2024"
                  className="w-full px-md py-sm bg-white border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23] focus:border-[#5B5FEF] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              {/* RENAVAM */}
              <div className="flex flex-col gap-xs">
                <label className="font-sans font-bold text-[11px] text-[#464555]">
                  RENAVAM <span className="text-[#AE2F34]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={renavam}
                  onChange={(e) => setRenavam(e.target.value)}
                  placeholder="00000000000"
                  className="w-full px-md py-sm bg-white border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23] focus:border-[#5B5FEF] outline-none"
                />
              </div>

              {/* Chassi */}
              <div className="flex flex-col gap-xs">
                <label className="font-sans font-bold text-[11px] text-[#464555]">
                  Chassi <span className="text-[#AE2F34]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={chassi}
                  onChange={(e) => setChassi(e.target.value)}
                  placeholder="A1B2C3D4E5F6G7H8I"
                  className="w-full px-md py-sm bg-white border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23] focus:border-[#5B5FEF] outline-none"
                />
              </div>

              {/* Kms Rodados */}
              <div className="flex flex-col gap-xs">
                <label className="font-sans font-bold text-[11px] text-[#464555]">
                  {t('Kms Rodados')}
                </label>
                <div className="relative border border-[#C6C5D7] rounded-xl focus-within:border-[#5B5FEF] transition-all">
                  <input
                    type="number"
                    value={mileage}
                    onChange={(e) => setMileage(Number(e.target.value))}
                    className="w-full pl-md pr-12 py-[11px] bg-transparent border-0 rounded-xl font-sans text-xs text-[#1B1B23] focus:ring-0 outline-none"
                    placeholder="0"
                  />
                  <span className="absolute inset-y-0 right-0 pr-md flex items-center text-xs font-bold text-[#767586] pointer-events-none">
                    KM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card Section 2: Manutenção Preventiva sliders exactly like Screen 3 */}
          <div className="space-y-md">
            <div className="flex items-center gap-xs text-[#5B5FEF] border-b border-[#F4F6FB] pb-xs">
              <Wrench className="w-5 h-5" />
              <div>
                <h4 className="font-headline font-bold text-sm text-[#1B1B23]">
                  {t('Manutenção Preventiva')}
                </h4>
              </div>
            </div>
            <p className="font-sans text-[11px] text-[#767586] leading-relaxed">
              {t('Informe a data da última revisão ou o status atual dos itens abaixo para controle de frota inteligente.')}
            </p>

            {/* 5 columns of sliders matching screenshot layout */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-md pt-xs">
              {/* Category 1: Troca de óleo */}
              <div className="p-md bg-[#EFECF9]/30 border border-[#E2E8F0] rounded-2xl flex flex-col justify-between gap-sm">
                <div className="flex items-center gap-xs">
                  <span className="p-1 px-[6px] bg-[#5B5FEF]/10 rounded-lg text-[#5B5FEF] font-bold text-xs">💧</span>
                  <span className="font-headline font-bold text-[11.5px] text-[#1B1B23]">{t('Troca de óleo')}</span>
                </div>

                <div className="space-y-xs">
                  <div className="grid grid-cols-2 gap-xs font-sans text-[9px] font-bold text-[#767586]">
                    <div>
                      <span className="uppercase block">{t('Última Troca')}</span>
                      <input
                        type="date"
                        value={lastOilChangeDate}
                        onChange={(e) => setLastOilChangeDate(e.target.value)}
                        className="w-full mt-[2px] p-[2px] bg-white border border-[#C6C5D7] rounded text-[9px] font-medium"
                      />
                    </div>
                    <div>
                      <span className="uppercase block text-right">{t('Próxima Troca')}</span>
                      <p className="mt-[4px] text-right text-[#464555] font-bold">
                        {calculateNextDate(lastOilChangeDate) ? calculateNextDate(lastOilChangeDate) : t('Agendada')}
                      </p>
                    </div>
                  </div>
                  {/* Slider */}
                  <div className="pt-xs">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={oilChangePct}
                      onChange={(e) => setOilChangePct(Number(e.target.value))}
                      className="w-full h-1 bg-[#EFECF9] rounded-lg appearance-none cursor-pointer accent-[#5B5FEF]"
                    />
                    <div className="flex justify-between font-sans text-[8.5px] text-[#767586] font-bold mt-xs">
                      <span>{t('0% Em dia')}</span>
                      <span className="text-[#AE2F34] font-extrabold">{oilChangePct}%</span>
                      <span>{t('100% Vencedor')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 2: Filtro de óleo */}
              <div className="p-md bg-[#EFECF9]/30 border border-[#E2E8F0] rounded-2xl flex flex-col justify-between gap-sm">
                <div className="flex items-center gap-xs">
                  <span className="p-1 px-[6px] bg-[#5B5FEF]/10 rounded-lg text-[#5B5FEF] font-bold text-xs">🧪</span>
                  <span className="font-headline font-bold text-[11.5px] text-[#1B1B23]">{t('Filtro de óleo')}</span>
                </div>

                <div className="space-y-xs">
                  <div className="grid grid-cols-2 gap-xs font-sans text-[9px] font-bold text-[#767586]">
                    <div>
                      <span className="uppercase block">{t('Última Troca')}</span>
                      <input
                        type="date"
                        value={lastOilFilterDate}
                        onChange={(e) => setLastOilFilterDate(e.target.value)}
                        className="w-full mt-[2px] p-[2px] bg-white border border-[#C6C5D7] rounded text-[9px] font-medium"
                      />
                    </div>
                    <div>
                      <span className="uppercase block text-right">{t('Próxima Troca')}</span>
                      <p className="mt-[4px] text-right text-[#464555] font-bold">
                        {calculateNextDate(lastOilFilterDate) ? calculateNextDate(lastOilFilterDate) : t('Agendada')}
                      </p>
                    </div>
                  </div>
                  {/* Slider */}
                  <div className="pt-xs">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={oilFilterPct}
                      onChange={(e) => setOilFilterPct(Number(e.target.value))}
                      className="w-full h-1 bg-[#EFECF9] rounded-lg appearance-none cursor-pointer accent-[#5B5FEF]"
                    />
                    <div className="flex justify-between font-sans text-[8.5px] text-[#767586] font-bold mt-xs">
                      <span>{t('0% Em dia')}</span>
                      <span className="text-[#AE2F34] font-extrabold">{oilFilterPct}%</span>
                      <span>{t('100% Vencedor')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 3: Filtro de ar */}
              <div className="p-md bg-[#EFECF9]/30 border border-[#E2E8F0] rounded-2xl flex flex-col justify-between gap-sm">
                <div className="flex items-center gap-xs">
                  <span className="p-1 px-[6px] bg-[#5B5FEF]/10 rounded-lg text-[#5B5FEF] font-bold text-xs">🌪</span>
                  <span className="font-headline font-bold text-[11.5px] text-[#1B1B23]">{t('Filtro de ar')}</span>
                </div>

                <div className="space-y-xs">
                  <div className="grid grid-cols-2 gap-xs font-sans text-[9px] font-bold text-[#767586]">
                    <div>
                      <span className="uppercase block">{t('Última Troca')}</span>
                      <input
                        type="date"
                        value={lastAirFilterDate}
                        onChange={(e) => setLastAirFilterDate(e.target.value)}
                        className="w-full mt-[2px] p-[2px] bg-white border border-[#C6C5D7] rounded text-[9px] font-medium"
                      />
                    </div>
                    <div>
                      <span className="uppercase block text-right">{t('Próxima Troca')}</span>
                      <p className="mt-[4px] text-right text-[#464555] font-bold">
                        {calculateNextDate(lastAirFilterDate) ? calculateNextDate(lastAirFilterDate) : t('Agendada')}
                      </p>
                    </div>
                  </div>
                  {/* Slider */}
                  <div className="pt-xs">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={airFilterPct}
                      onChange={(e) => setAirFilterPct(Number(e.target.value))}
                      className="w-full h-1 bg-[#EFECF9] rounded-lg appearance-none cursor-pointer accent-[#5B5FEF]"
                    />
                    <div className="flex justify-between font-sans text-[8.5px] text-[#767586] font-bold mt-xs">
                      <span>{t('0% Em dia')}</span>
                      <span className="text-[#AE2F34] font-extrabold">{airFilterPct}%</span>
                      <span>{t('100% Vencedor')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 4: Pneus */}
              <div className="p-md bg-[#EFECF9]/30 border border-[#E2E8F0] rounded-2xl flex flex-col justify-between gap-sm">
                <div className="flex items-center gap-xs">
                  <span className="p-1 px-[6px] bg-[#5B5FEF]/10 rounded-lg text-[#5B5FEF] font-bold text-xs">⏺</span>
                  <span className="font-headline font-bold text-[11.5px] text-[#1B1B23]">{t('Pneus (Rodagem)')}</span>
                </div>

                <div className="space-y-xs">
                  <div className="grid grid-cols-2 gap-xs font-sans text-[9px] font-bold text-[#767586]">
                    <div>
                      <span className="uppercase block">{t('Última Troca')}</span>
                      <input
                        type="date"
                        value={lastTiresDate}
                        onChange={(e) => setLastTiresDate(e.target.value)}
                        className="w-full mt-[2px] p-[2px] bg-white border border-[#C6C5D7] rounded text-[9px] font-medium"
                      />
                    </div>
                    <div>
                      <span className="uppercase block text-right">{t('Próxima Troca')}</span>
                      <p className="mt-[4px] text-right text-[#464555] font-bold">
                        {calculateNextDate(lastTiresDate) ? calculateNextDate(lastTiresDate) : t('Agendada')}
                      </p>
                    </div>
                  </div>
                  {/* Slider */}
                  <div className="pt-xs">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={tiresPct}
                      onChange={(e) => setTiresPct(Number(e.target.value))}
                      className="w-full h-1 bg-[#EFECF9] rounded-lg appearance-none cursor-pointer accent-[#5B5FEF]"
                    />
                    <div className="flex justify-between font-sans text-[8.5px] text-[#767586] font-bold mt-xs">
                      <span>{t('0% Em dia')}</span>
                      <span className="text-[#AE2F34] font-extrabold">{tiresPct}%</span>
                      <span>{t('100% Vencedor')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 5: Pastilha de freio */}
              <div className="p-md bg-[#EFECF9]/30 border border-[#E2E8F0] rounded-2xl flex flex-col justify-between gap-sm">
                <div className="flex items-center gap-xs">
                  <span className="p-1 px-[6px] bg-[#5B5FEF]/10 rounded-lg text-[#5B5FEF] font-bold text-xs">🛑</span>
                  <span className="font-headline font-bold text-[11.5px] text-[#1B1B23]">{t('Pastilha de freio')}</span>
                </div>

                <div className="space-y-xs">
                  <div className="grid grid-cols-2 gap-xs font-sans text-[9px] font-bold text-[#767586]">
                    <div>
                      <span className="uppercase block">{t('Última Troca')}</span>
                      <input
                        type="date"
                        value={lastBrakePadsDate}
                        onChange={(e) => setLastBrakePadsDate(e.target.value)}
                        className="w-full mt-[2px] p-[2px] bg-white border border-[#C6C5D7] rounded text-[9px] font-medium"
                      />
                    </div>
                    <div>
                      <span className="uppercase block text-right">{t('Próxima Troca')}</span>
                      <p className="mt-[4px] text-right text-[#464555] font-bold">
                        {calculateNextDate(lastBrakePadsDate) ? calculateNextDate(lastBrakePadsDate) : t('Agendada')}
                      </p>
                    </div>
                  </div>
                  {/* Slider */}
                  <div className="pt-xs">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={brakePadsPct}
                      onChange={(e) => setBrakePadsPct(Number(e.target.value))}
                      className="w-full h-1 bg-[#EFECF9] rounded-lg appearance-none cursor-pointer accent-[#5B5FEF]"
                    />
                    <div className="flex justify-between font-sans text-[8.5px] text-[#767586] font-bold mt-xs">
                      <span>{t('0% Em dia')}</span>
                      <span className="text-[#AE2F34] font-extrabold">{brakePadsPct}%</span>
                      <span>{t('100% Vencedor')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card Section 3: Observações Adicionais */}
          <div className="space-y-md">
            <div className="flex items-center gap-xs text-[#5B5FEF] border-b border-[#F4F6FB] pb-xs">
              <FileText className="w-5 h-5" />
              <h4 className="font-headline font-bold text-sm text-[#1B1B23]">
                {t('Observações Adicionais')}
              </h4>
            </div>

            <div className="flex flex-col gap-xs">
              <label className="font-sans font-bold text-[11px] text-[#464555]">
                {t('Observações')}
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t('Registre aqui informações relevantes, histórico de sinistros ou detalhes específicos do veículo.')}
                rows={3}
                className="w-full p-md bg-white border border-[#C6C5D7] rounded-xl font-sans text-xs text-[#1B1B23] focus:border-[#5B5FEF] outline-none"
              />
            </div>
          </div>

          {/* Footer Informative strip and Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md border-t border-[#F4F6FB] pt-lg">
            <div className="flex items-center gap-xs px-md py-sm bg-[#EFECF9]/40 rounded-xl text-[11px] font-sans text-[#464555] leading-normal max-w-xl">
              <AlertCircle className="w-[18px] h-[18px] text-[#5B5FEF] shrink-0" />
              <span>
                {t('Ao gravar, o veículo será automaticamente integrado ao módulo de roteirização, agenda de viagens, e dashboard.')}
              </span>
            </div>

            <div className="flex items-center gap-sm ml-auto">
              <button
                type="button"
                onClick={() => {
                  setModel('');
                  setRenavam('');
                  setChassi('');
                  setMileage(0);
                  setNotes('');
                }}
                className="px-lg py-[11px] bg-white border border-[#C6C5D7] text-[#464555] hover:bg-[#F4F6FB] hover:text-[#1B1B23] font-headline text-xs font-bold rounded-xl outline-none transition-colors cursor-pointer"
              >
                {t('Cancelar')}
              </button>
              <button
                type="submit"
                disabled={!isFormValid}
                className={`px-lg py-[11px] font-headline text-xs font-bold rounded-xl shadow-md transition-all cursor-[pointer] ${
                  isFormValid
                    ? 'bg-[#5B5FEF] text-white hover:bg-[#4143D5] shadow-[#5B5FEF]/20'
                    : 'bg-[#C6C5D7]/40 text-[#767586] cursor-not-allowed shadow-none'
                }`}
              >
                {t('Gravar Veículo')}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* 4. Registered Vehicles List Table */}
      <div className="bg-white rounded-xxl border border-[#E2E8F0] shadow-sm p-lg">
        <h3 className="font-headline font-bold text-sm text-[#1B1B23] mb-sm border-b border-[#F4F6FB] pb-xs">
          {t('Frota Ativa')} ({vehicles.length})
        </h3>

        {vehicles.length === 0 ? (
          <p className="text-xs text-[#767586] text-center py-lg">{t('Nenhum veículo registrado.')}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs">
              <thead>
                <tr className="border-b border-[#F4F6FB] text-[#767586] font-semibold">
                  <th className="py-sm">{t('Veículo')}</th>
                  <th className="py-sm">{t('Fabricação')}</th>
                  <th className="py-sm">{t('RENAVAM')}</th>
                  <th className="py-sm">{t('KM Rodados')}</th>
                  <th className="py-sm">{t('Óleo (%)')}</th>
                  <th className="py-sm">{t('Pneus (%)')}</th>
                  <th className="py-sm">{t('Pastilha (%)')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4F6FB]">
                {vehicles.map((v) => {
                  // Maintenance Critical marker: Red indicator if over 75%
                  const isCritical =
                    v.maintenance.oilChange > 75 ||
                    v.maintenance.brakePads > 75 ||
                    v.maintenance.airFilter > 75;

                  return (
                    <tr key={v.id} className="hover:bg-[#F4F6FB]/40 transition-colors">
                      <td className="py-sm font-bold text-[#1B1B23] flex items-center gap-xs">
                        <span>{v.brand} {v.model}</span>
                        {isCritical && (
                          <span
                            title={t('Nível crítico de manutenção!')}
                            className="w-2.5 h-2.5 bg-[#AE2F34] rounded-full inline-block animate-ping"
                          />
                        )}
                      </td>
                      <td className="py-sm text-[#464555]">{v.year}</td>
                      <td className="py-sm text-[#464555] font-mono">{v.renavam}</td>
                      <td className="py-sm text-[#1B1B23] font-bold">
                        {new Intl.NumberFormat('pt-BR').format(v.mileage)} KM
                      </td>
                      <td className="py-sm">
                        <div className="flex items-center gap-xs">
                          <div className="w-16 h-2 bg-[#EFECF9] rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                v.maintenance.oilChange > 75 ? 'bg-[#AE2F34]' : 'bg-[#5B5FEF]'
                              }`}
                              style={{ width: `${v.maintenance.oilChange}%` }}
                            />
                          </div>
                          <span>{v.maintenance.oilChange}%</span>
                        </div>
                      </td>
                      <td className="py-sm">
                        <div className="flex items-center gap-xs">
                          <div className="w-16 h-2 bg-[#EFECF9] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#5B5FEF] rounded-full"
                              style={{ width: `${v.maintenance.tires}%` }}
                            />
                          </div>
                          <span>{v.maintenance.tires}%</span>
                        </div>
                      </td>
                      <td className="py-sm">
                        <div className="flex items-center gap-xs">
                          <div className="w-16 h-2 bg-[#EFECF9] rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                v.maintenance.brakePads > 75 ? 'bg-[#AE2F34]' : 'bg-[#5B5FEF]'
                              }`}
                              style={{ width: `${v.maintenance.brakePads}%` }}
                            />
                          </div>
                          <span>{v.maintenance.brakePads}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
