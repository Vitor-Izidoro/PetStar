import React, { useState } from "react";
import { Link } from "react-router-dom";

const ReservaForm = ({ host, onClose }) => {
  const [service, setService] = useState("Hospedagem - R$ 40/noite");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [pets, setPets] = useState("1 pet");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const servicePriceMap = {
    "Hospedagem - R$ 40/noite": 40,
    "Creche - R$ 30/dia": 30,
    "Passeio - R$ 25/passeio": 25,
  };

  const nights =
    startDate && endDate
      ? Math.max(
          1,
          Math.ceil(
            (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)
          )
        )
      : 1;

  const subtotal = servicePriceMap[service] * nights;
  const taxaServico = 20;
  const total = subtotal + taxaServico;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const reserva = {
      host: host.name,
      service,
      startDate,
      endDate,
      pets,
      message,
      subtotal,
      taxaServico,
      total,
    };

    // Simula requisição
    setTimeout(() => {
      console.log("Reserva realizada:", reserva);
      setLoading(false);
      setSuccess(true);
      if (onClose) {
        // Opcional: fecha após alguns segundos
        // setTimeout(onClose, 2000);
      }
    }, 1500);
  };

  if (success) {
    return (
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Reserva solicitada com sucesso!</h2>
        <p className="text-gray-600 mb-4">
          Sua reserva foi criada e está aguardando confirmação do cuidador.
        </p>
        <Link
          onClick={onClose}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-500"
        >
          Verificar reserva
        </Link>
      </div>
    );
  }

  return (
    <div className="lg:col-span-1 space-y-6">
      <div className="bg-white rounded-xl shadow p-6 sticky top-6">
        <h4 className="font-bold mb-4">Solicitar reserva com {host.name}</h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Serviço */}
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

          {/* Datas */}
          <label className="block text-sm font-medium mb-1">Data (inicio)</label>
          <input
            type="date"
            className="w-full border rounded-lg p-2"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
          <label className="block text-sm font-medium mb-1">Data (final)</label>
          <input
            type="date"
            className="w-full border rounded-lg p-2"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />

          {/* Número de pets */}
          <label className="block text-sm font-medium mb-1">Pet</label>
          <select
            className="w-full border rounded-lg p-2"
            value={pets}
            onChange={(e) => setPets(e.target.value)}
          >
            <option>1 pet</option>
            <option>2 pets</option>
            <option>3 pets</option>
          </select>

          {/* Mensagem */}
          <label className="block text-sm font-medium mb-1">Mensagem</label>
          <textarea
            rows="3"
            placeholder="Mensagem para o anfitrião"
            className="w-full border rounded-lg p-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* Resumo */}
          <div className="flex justify-between font-medium text-gray-600">
            <span>
              {nights} {service.includes("Hospedagem") ? "noites" : "dias"} x R${" "}
              {servicePriceMap[service]}
            </span>
            <span>R$ {subtotal}</span>
          </div>
          <div className="flex justify-between font-medium text-gray-600">
            <span>Taxa de serviço</span>
            <span>R$ {taxaServico}</span>
          </div>
          <div className="flex justify-between font-bold border-t pt-2">
            <span>Total</span>
            <span>R$ {total}</span>
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500"
            disabled={loading}
          >
            {loading ? "Finalizando..." : "Finalizar reserva"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservaForm;
