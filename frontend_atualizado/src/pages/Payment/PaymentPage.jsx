import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReservationDetails from "./ReservationDetails";
import PaymentMethod from "./PaymentMethod";
import PaymentSummary from "./PaymentSummary";
import { FaCheckCircle } from "react-icons/fa";

export default function PaymentPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const reservation = state?.reservation;

  const [activeTab, setActiveTab] = useState("credit");
  const [showModal, setShowModal] = useState(false);
  const [saveCard, setSaveCard] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  if (!reservation) return <p className="p-4 text-red-500">Nenhuma reserva selecionada.</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-8 px-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-6">
        {/* Left Column */}
        <div className="lg:w-2/3 space-y-4">
          <ReservationDetails reservation={reservation} />
          <PaymentMethod
            reservation={reservation}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            saveCard={saveCard}
            setSaveCard={setSaveCard}
          />
        </div>

        {/* Right Column */}
        <div className="lg:w-1/3 space-y-4">
          <PaymentSummary
            reservation={reservation}
            acceptTerms={acceptTerms}
            setAcceptTerms={setAcceptTerms}
            setShowModal={setShowModal}
          />
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl p-6 max-w-sm w-full text-center space-y-4">
              <FaCheckCircle className="text-green-500 text-6xl mx-auto" />
              <h3 className="text-xl font-bold">Pagamento Confirmado!</h3>
              <p className="text-gray-500">
                Sua reserva com {reservation.clientName} foi confirmada. Detalhes foram enviados para seu e-mail.
              </p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => navigate("/perfil")}
                  className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500"
                >
                  Ver Minhas Reservas
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="border border-indigo-600 text-indigo-600 py-2 rounded-lg hover:bg-indigo-50"
                >
                  Continuar Navegando
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
