import React, { useState, useEffect } from "react";
import { FaSpinner, FaInbox, FaCheck, FaTimes } from "react-icons/fa";
import ReservaConfirmation from "./Reservation";
import Modal from "../../components/Modal";
import DataWrapper from "../../components/DataWrapper";
import reservationsMock from "../../data/mockData/reservations";

export default function ReservationsCaregiver() {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [filter, setFilter] = useState("Todas");
  const [isLoading, setIsLoading] = useState(true);
  const [processingId, setProcessingId] = useState(null);

  const fetchBookings = () => {
    setIsLoading(true);
    setTimeout(() => {
      // Adicionando um status inicial para todas as reservas
      const mockWithStatus = reservationsMock.map(booking => ({
        ...booking,
        status: booking.status || "pendente"
      }));
      setBookings(mockWithStatus);
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => fetchBookings(), []);

  const handleAccept = (id) => {
    setProcessingId(id);
    // Simula uma chamada API
    setTimeout(() => {
      setBookings(prevBookings => 
        prevBookings.map(booking => 
          booking.id === id 
            ? { 
                ...booking, 
                status: "confirmada",
                message: "Reserva confirmada com sucesso!"
              } 
            : booking
        )
      );
      setProcessingId(null);
      
      // Atualiza também a reserva selecionada se for a mesma
      if (selectedBooking && selectedBooking.id === id) {
        setSelectedBooking({
          ...selectedBooking,
          status: "confirmada",
          message: "Reserva confirmada com sucesso!"
        });
      }
    }, 1000);
  };

  const handleReject = (id) => {
    setProcessingId(id);
    // Simula uma chamada API
    setTimeout(() => {
      setBookings(prevBookings => 
        prevBookings.map(booking => 
          booking.id === id 
            ? { 
                ...booking, 
                status: "cancelada",
                message: "Reserva recusada."
              } 
            : booking
        )
      );
      setProcessingId(null);
      
      // Atualiza também a reserva selecionada se for a mesma
      if (selectedBooking && selectedBooking.id === id) {
        setSelectedBooking({
          ...selectedBooking,
          status: "cancelada",
          message: "Reserva recusada."
        });
      }
    }, 1000);
  };

  const filters = ["Todas", "Pendentes", "Confirmadas", "Concluídas", "Canceladas"];

  const filteredBookings = bookings.filter((b) => {
    if (filter === "Todas") return true;
    if (filter === "Pendentes") return b.status === "pendente";
    if (filter === "Confirmadas") return b.status === "confirmada";
    if (filter === "Concluídas") return b.status === "concluida";
    if (filter === "Canceladas") return b.status === "cancelada";
    return true;
  });

  // Função para obter a classe de cor com base no status
  const getStatusColor = (status) => {
    switch (status) {
      case "confirmada":
        return "text-green-600 border-green-600 bg-green-50";
      case "pendente":
        return "text-yellow-600 border-yellow-600 bg-yellow-50";
      case "concluida":
        return "text-blue-600 border-blue-600 bg-blue-50";
      case "cancelada":
        return "text-red-600 border-red-600 bg-red-50";
      default:
        return "text-gray-500 border-gray-300 bg-gray-50";
    }
  };

  // Função para obter o texto do status formatado
  const getStatusText = (status) => {
    switch (status) {
      case "confirmada":
        return "Confirmada";
      case "pendente":
        return "Pendente";
      case "concluida":
        return "Concluída";
      case "cancelada":
        return "Cancelada";
      default:
        return status;
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Filtros */}
      {!isLoading && (
        <>
          <h2 className="text-2xl font-bold mb-6">Reservas Recebidas</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg border border-indigo-600 transition-colors ${
                  filter === f 
                    ? "bg-indigo-600 text-white" 
                    : "text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Lista */}
      <DataWrapper
        isLoading={isLoading}
        data={filteredBookings}
        emptyTitle="Nenhuma reserva encontrada"
        LoadingTitle="Carregando reservas..."
        emptyDescription="Você não possui reservas nesse filtro."
        onEmptyAction={fetchBookings}
        EmptyIcon={<FaInbox size={50} className="text-indigo-400 animate-bounce-slow" />}
        LoadingIcon={<FaSpinner size={50} className="text-indigo-400 animate-spin-slow" />}
      >
        {filteredBookings.map((b) => (
          <div key={b.id} className="bg-white shadow-md rounded-xl p-5 w-full mb-4">
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

              {/* Status */}
              <div className="md:w-1/6 mb-2 md:mb-0 font-semibold flex flex-col items-start">
                <span
                  className={`px-3 py-1 rounded-lg border ${getStatusColor(b.status)}`}
                >
                  {getStatusText(b.status)}
                </span>
              </div>

              {/* Detalhes e Ações */}
              <div className="md:w-1/4 flex flex-col items-center gap-2">
                <button
                  className="text-indigo-600 border border-indigo-600 px-3 py-1 rounded-lg text-sm hover:bg-indigo-50 transition-colors"
                  onClick={() => setSelectedBooking(b)}
                >
                  Detalhes
                </button>
                
                {b.status === "pendente" && (
                  <div className="flex gap-2 mt-2">
                    <button 
                      className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700 transition-colors flex items-center disabled:opacity-50"
                      onClick={() => handleAccept(b.id)}
                      disabled={processingId === b.id}
                    >
                      {processingId === b.id ? (
                        <FaSpinner className="animate-spin mr-1" />
                      ) : (
                        <FaCheck className="mr-1" />
                      )}
                      Aceitar
                    </button>
                    <button 
                      className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-700 transition-colors flex items-center disabled:opacity-50"
                      onClick={() => handleReject(b.id)}
                      disabled={processingId === b.id}
                    >
                      {processingId === b.id ? (
                        <FaSpinner className="animate-spin mr-1" />
                      ) : (
                        <FaTimes className="mr-1" />
                      )}
                      Recusar
                    </button>
                  </div>
                )}
                
                {(b.status === "confirmada" || b.status === "concluida") && (
                  <button 
                    className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition-colors mt-2"
                    onClick={() => {
                      // Simula a conclusão de uma reserva confirmada
                      if (b.status === "confirmada") {
                        setBookings(prevBookings => 
                          prevBookings.map(booking => 
                            booking.id === b.id 
                              ? { ...booking, status: "concluida" } 
                              : booking
                          )
                        );
                      }
                    }}
                  >
                    {b.status === "confirmada" ? "Marcar como Concluída" : "Avaliar Serviço"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </DataWrapper>

      {/* Modal */}
      {selectedBooking && (
        <Modal isOpen={!!selectedBooking} onClose={() => setSelectedBooking(null)}>
          <ReservaConfirmation 
            reservation={selectedBooking} 
            status={selectedBooking.status} 
            role="caregiver" 
          />
        </Modal>
      )}
    </div>
  );
}