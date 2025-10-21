import { useState } from "react";

const Step1ServiceDates = ({
  service, setService, startDate, setStartDate, endDate, setEndDate,
  startTime, setStartTime, endTime, setEndTime, setStep
}) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!startDate || !endDate) {
      setError("Por favor, preencha as datas antes de continuar.");
      return;
    }
    if (!startTime || !endTime) {
      setError("Por favor, selecione os horários antes de continuar.");
      return;
    }
    setError(""); // limpa erro
    setStep(2);
  };

  return (
    <>
      <div>
        <label className="block text-sm font-medium mb-1">Tipo de serviço</label>
        <select
          className="w-full border rounded-lg p-2"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option>Hospedagem - R$ 40/noite</option>
          <option>Creche - R$ 30/dia</option>
          <option>Passeio - R$ 25/passeio</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1">Data de início</label>
          <input
            type="date"
            className="w-full border rounded-lg p-2"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Data de término</label>
          <input
            type="date"
            className="w-full border rounded-lg p-2"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            min={startDate || new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1">Horário de início</label>
          <select
            className="w-full border rounded-lg p-2"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          >
            {Array.from({ length: 19 }, (_, i) => {
              const hour = 6 + i;
              if (hour < 24) {
                const time = `${hour.toString().padStart(2, '0')}:00`;
                return <option key={time} value={time}>{time}</option>;
              }
              return null;
            })}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Horário de término</label>
          <select
            className="w-full border rounded-lg p-2"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          >
            {Array.from({ length: 19 }, (_, i) => {
              const hour = 6 + i;
              if (hour < 24) {
                const time = `${hour.toString().padStart(2, '0')}:00`;
                return <option key={time} value={time}>{time}</option>;
              }
              return null;
            })}
          </select>
        </div>
      </div>

      {/* Mensagem de erro */}
      {error && (
        <p className="text-red-600 text-sm mt-2">{error}</p>
      )}

      <button
        type="button"
        onClick={handleNext}
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 mt-2"
      >
        Próximo
      </button>
    </>
  );
};

export default Step1ServiceDates;
