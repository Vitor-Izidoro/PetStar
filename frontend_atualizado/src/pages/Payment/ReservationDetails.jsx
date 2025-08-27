import React from "react";

export default function ReservationDetails({ reservation }) {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-2">Finalizar Pagamento</h2>
      <p className="text-gray-500 mb-4">Confirme os detalhes da sua reserva e finalize o pagamento</p>

      <div className="bg-gray-50 border rounded-lg mb-4">
        <div className="bg-gray-100 px-4 py-2 rounded-t-lg font-semibold">Detalhes da Reserva</div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p><strong>Anfitrião:</strong> {reservation.clientName}</p>
            <p><strong>Serviço:</strong> {reservation.service}</p>
            <p><strong>Check-in:</strong> {reservation.checkIn || "N/A"}</p>
          </div>
          <div>
            <p><strong>Pet:</strong> {reservation.petName} ({reservation.petBreed})</p>
            <p><strong>Check-out:</strong> {reservation.checkOut || "N/A"}</p>
            <p><strong>Duração:</strong> {reservation.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
