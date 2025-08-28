import React, { useState, useEffect } from "react";
import { FaSpinner, FaInbox } from "react-icons/fa";
import ReservaConfirmation from "./Reservation";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import DataWrapper from "../../components/DataWrapper";
import { reservasMock } from "./dataMock";

export default function ReservationList() {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [filter, setFilter] = useState("Todas");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchBookings = () => {
    setIsLoading(true);
    setTimeout(() => {
      setBookings(reservasMock);
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => fetchBookings(), []);

  const filters = ["Todas", "Próximas", "Concluídas", "Canceladas"];

  const filteredBookings = bookings.filter((b) => {
    if (filter === "Todas") return true;
    if (filter === "Próximas") return b.status === "confirmada" || b.status === "pendente";
    if (filter === "Concluídas") return b.status === "concluida";
    if (filter === "Canceladas") return b.status === "cancelada";
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Minhas Reservas</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg border border-indigo-600 ${filter === f ? "bg-indigo-600 text-white" : "text-indigo-600 hover:bg-indigo-50"}`}
          >
            {f}
          </button>
        ))}
      </div>

      <DataWrapper
        isLoading={isLoading}
        data={filteredBookings}
        emptyTitle="Nenhuma reserva encontrada"
        emptyDescription="Você não possui reservas nesse filtro."
        onEmptyAction={fetchBookings}
        EmptyIcon={<FaInbox size={50} className="text-indigo-400 animate-bounce-slow" />}
        LoadingIcon={<FaSpinner size={50} className="text-indigo-400 animate-spin-slow" />}
      >
        {filteredBookings.map((b, i) => (
            <div key={i} className="bg-white shadow-md rounded-xl p-5 w-full">
              <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                {/* Data */}
                <div className="text-center md:w-1/6 mb-2 md:mb-0">
                  <div className="font-bold text-indigo-600 text-lg">{b.date}</div>
                  <div className="text-gray-500">{b.month}</div>
                  <div className="text-gray-500">{b.year}</div>
                </div>

                {/* Cliente */}
                <div className="flex items-center md:w-1/4 mb-2 md:mb-0">
                  <img
                    src={b.clientAvatar}
                    alt={b.clientName}
                    className="w-14 h-14 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <h5 className="font-semibold">{b.clientName}</h5>
                    <small className="text-gray-500">{b.clientLocation}</small>
                  </div>
                </div>

                {/* Serviço */}
                <div className="md:w-1/6 mb-2 md:mb-0">
                  <div className="font-semibold">{b.service}</div>
                  <small className="text-gray-500">{b.duration}</small>
                </div>

                {/* Pet */}
                <div className="md:w-1/6 mb-2 md:mb-0">
                  <div className="font-semibold">{b.petName}</div>
                  <small className="text-gray-500">{b.petBreed}</small>
                </div>

                {/* Status e botão de pagamento */}
                <div className="md:w-1/6 mb-2 md:mb-0 font-semibold flex flex-col items-start">
                  <span
                    className={`px-2 py-1 rounded-lg border ${
                      b.status.toLowerCase() === "confirmada"
                        ? "text-green-600 border-green-600"
                        : "text-gray-500 border-gray-300"
                    }`}
                  >
                    {b.status}
                  </span>
                  {b.status.toLowerCase() === "confirmada" && (
                    <button
                      className="mt-2 bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700"
                      onClick={() => navigate("/payment", { state: { reservation: b } })}
                    >
                      Pagar agora
                    </button>
                  )}
                </div>

                {/* Detalhes */}
                <div className="md:w-1/12 text-right">
                  <button
                    className="text-indigo-600 border border-indigo-600 px-3 py-1 rounded-lg text-sm hover:bg-indigo-50"
                    onClick={() => setSelectedBooking(b)}
                  >
                    Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
      </DataWrapper>

      {selectedBooking && (
        <Modal isOpen={!!selectedBooking} onClose={() => setSelectedBooking(null)}>
          <ReservaConfirmation reservation={selectedBooking} status={selectedBooking.status} />
        </Modal>
      )}
    </div>
  );
}
