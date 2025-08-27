import React from "react";

export default function ReservationDetails({ reservation }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h4 className="font-bold mb-4 text-lg">Detalhes da Reserva</h4>

      <div className="space-y-2 text-gray-700">
        <div><strong>Serviço:</strong> {reservation.service}</div>
        <div><strong>Check-in:</strong> {reservation.checkin}</div>
        <div><strong>Check-out:</strong> {reservation.checkout}</div>
        <div><strong>Local:</strong> {reservation.location}</div>
        <div><strong>Valor total:</strong> R$ {reservation.total}</div>
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
