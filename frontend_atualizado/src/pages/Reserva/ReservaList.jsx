import React, { useState } from "react";
import Modal from "../../components/Modal";
import ReservaConfirmation from "./ReservaConfirmation";
import { FaCreditCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const bookings = [
  {
    date: "15",
    month: "SET",
    year: "2023",
    clientName: "Ana Silva",
    clientLocation: "Vila Madalena, SP",
    clientAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
    service: "Hospedagem",
    duration: "4 noites",
    petName: "Thor",
    petBreed: "Golden Retriever",
    status: "confirmada",
    location: "Vila Madalena, São Paulo - SP",
    checkIn: "15/09/2023 às 14h",
    checkOut: "19/09/2023 às 12h",
    total: "R$ 180,00",
    message: "Sua solicitação de reserva foi enviada para Ana Silva. Você receberá uma confirmação em até 24 horas.",
    nextSteps: [
      { icon: null, text: "Aguarde a confirmação do anfitrião" },
      { icon: null, text: "O pagamento será processado após a confirmação" },
      { icon: null, text: "Você receberá lembretes antes do check-in" },
      { icon: null, text: "Dúvidas? Entre em contato com o suporte" },
    ],
  },
  // ... outras reservas
];

export default function ReservaList() {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [filter, setFilter] = useState("Todas");
  const navigate = useNavigate();

  // Filtrar reservas com base no filtro
  const filteredBookings = bookings.filter((b) => {
    if (filter === "Todas") return true;
    if (filter === "Próximas") return b.status === "confirmada" || b.status === "pendente";
    if (filter === "Concluídas") return b.status === "concluida";
    if (filter === "Canceladas") return b.status === "cancelada";
    return true;
  });

  const filters = ["Todas", "Próximas", "Concluídas", "Canceladas"];

  return (
    <div className="px-4 mt-8">
      <h2 className="text-2xl font-bold mb-6">Minhas Reservas</h2>

      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg border border-indigo-600 ${
              filter === f ? "bg-indigo-600 text-white" : "text-indigo-600 hover:bg-indigo-50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Lista de reservas */}
      <div className="space-y-4">
        {filteredBookings.map((b, i) => (
          <div key={i} className="bg-white shadow-md rounded-xl p-4">
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

                {/* Botão de pagar aparece apenas se a reserva estiver confirmada */}
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
      </div>

      {/* Modal */}
      {selectedBooking && (
        <Modal isOpen={!!selectedBooking} onClose={() => setSelectedBooking(null)}>
          <ReservaConfirmation
            reservation={selectedBooking}
            status={selectedBooking.status}
          />
        </Modal>
      )}
    </div>
  );
}
