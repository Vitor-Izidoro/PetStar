import React from "react";

export default function ReservationDetails() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h4 className="font-bold mb-4 text-lg">Detalhes da Reserva</h4>

      <div className="space-y-2 text-gray-700">
        <div><strong>Serviço:</strong> Hospedagem</div>
        <div><strong>Check-in:</strong> 15/09/2023 14:30</div>
        <div><strong>Check-out:</strong> 19/09/2023 12:00</div>
        <div><strong>Local:</strong> Vila Madalena, São Paulo - SP</div>
        <div><strong>Valor total:</strong> R$ 180,00</div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <button className="w-full px-4 py-2 border border-indigo-700 text-indigo-700 rounded-lg hover:bg-indigo-700 hover:text-white transition">
          Alterar Reserva
        </button>
        <button className="w-full px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition">
          Cancelar Reserva
        </button>
      </div>
    </div>
  );
}