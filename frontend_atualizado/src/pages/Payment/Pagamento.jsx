import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCreditCard, FaQrcode, FaLock, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function PaymentPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const reservation = state?.reservation;

  const [activeTab, setActiveTab] = useState("credit");
  const [showModal, setShowModal] = useState(false);
  const [saveCard, setSaveCard] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  if (!reservation) {
    return <p className="p-4 text-red-500">Nenhuma reserva selecionada.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-8 px-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-6">
        {/* Left column */}
        <div className="lg:w-2/3 space-y-4">
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-2">Finalizar Pagamento</h2>
            <p className="text-gray-500 mb-4">
              Confirme os detalhes da sua reserva e finalize o pagamento
            </p>

            {/* Detalhes da Reserva */}
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

            {/* Método de Pagamento */}
            <div className="bg-white border rounded-lg">
              <div className="px-4 py-2 border-b font-semibold">Método de Pagamento</div>
              <div className="p-4">
                {/* Tabs */}
                <div className="flex space-x-2 mb-4">
                  <button
                    className={`px-4 py-2 rounded-t-lg ${
                      activeTab === "credit" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"
                    } flex items-center gap-2`}
                    onClick={() => setActiveTab("credit")}
                  >
                    <FaCreditCard /> Cartão de Crédito
                  </button>
                  <button
                    className={`px-4 py-2 rounded-t-lg ${
                      activeTab === "pix" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"
                    } flex items-center gap-2`}
                    onClick={() => setActiveTab("pix")}
                  >
                    <FaQrcode /> PIX
                  </button>
                </div>

                {/* Conteúdo da aba */}
                {activeTab === "credit" && (
                  <div className="space-y-4">
                    {/* Resumo da Reserva */}
                    <div className="bg-gray-50 border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Resumo da Reserva</h4>
                      <div className="flex justify-between">
                        <span>{reservation.duration} x {reservation.total}</span>
                        <span className="font-bold">{reservation.total}</span>
                      </div>
                      <div className="text-gray-500 text-sm mt-1">
                        {reservation.service} com {reservation.clientName}
                      </div>
                    </div>

                    {/* Formulário Cartão de Crédito */}
                    <form className="space-y-4">
                      <div>
                        <label className="block mb-1">Número do Cartão</label>
                        <div className="flex border rounded-lg overflow-hidden">
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="flex-1 px-3 py-2 outline-none"
                          />
                          <div className="px-3 py-2 border-l text-gray-500"><FaCreditCard /></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                        <div className="md:col-span-3">
                          <label className="block mb-1">Nome no Cartão</label>
                          <input
                            type="text"
                            placeholder={reservation.clientName.toUpperCase()}
                            className="w-full border rounded-lg px-3 py-2 outline-none"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block mb-1">Validade</label>
                          <input
                            type="text"
                            placeholder="MM/AA"
                            className="w-full border rounded-lg px-3 py-2 outline-none"
                          />
                        </div>
                        <div className="md:col-span-1">
                          <label className="block mb-1">CVV</label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full border rounded-lg px-3 py-2 outline-none"
                          />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={saveCard}
                          onChange={() => setSaveCard(!saveCard)}
                          id="saveCard"
                          className="mr-2"
                        />
                        <label htmlFor="saveCard" className="text-gray-700">
                          Salvar informações do cartão para pagamentos futuros
                        </label>
                      </div>
                    </form>
                  </div>
                )}

                {activeTab === "pix" && (
                  <div className="text-center space-y-2">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${reservation.clientName}-${reservation.service}`}
                      alt="QR Code PIX"
                      className="mx-auto max-w-xs"
                    />
                    <p className="text-gray-500">Escaneie o QR Code com seu app bancário para pagar via PIX</p>
                    <p><strong>Valor: {reservation.total}</strong></p>
                    <p className="text-gray-400 text-sm">Pagamento válido por 30 minutos</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:w-1/3 space-y-4">
          {/* Resumo */}
          <div className="bg-white shadow rounded-xl border">
            <div className="px-4 py-2 border-b font-semibold">Resumo do Pagamento</div>
            <div className="p-4 space-y-2">
              <div className="flex justify-between">{reservation.duration} x {reservation.total} <span>{reservation.total}</span></div>
              <div className="flex justify-between">Taxa de serviço <span>R$ 20,00</span></div>
              <div className="flex justify-between">Taxa de limpeza <span>R$ 0,00</span></div>
              <div className="flex justify-between font-bold border-t pt-2">Total <span>{reservation.total}</span></div>

              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={() => setAcceptTerms(!acceptTerms)}
                  id="termsCheck"
                  className="mr-2"
                />
                <label htmlFor="termsCheck" className="text-gray-700 text-sm">
                  Concordo com os <a href="#" className="text-indigo-600 underline">Termos de Serviço</a> e <a href="#" className="text-indigo-600 underline">Política de Cancelamento</a>
                </label>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="bg-indigo-600 text-white w-full py-2 rounded-lg mt-4 hover:bg-indigo-500"
              >
                Confirmar Pagamento
              </button>

              <p className="text-center text-gray-500 text-sm mt-2 flex items-center justify-center gap-1">
                <FaLock /> Seus dados estão protegidos
              </p>
            </div>
          </div>

          {/* Política de Cancelamento */}
          <div className="bg-white shadow rounded-xl border p-4">
            <h5 className="font-semibold mb-2">Política de Cancelamento</h5>
            <ul className="space-y-1 text-gray-700">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Reembolso integral com 7+ dias de antecedência</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Reembolso de 50% com 2-6 dias de antecedência</li>
              <li className="flex items-center gap-2"><FaTimesCircle className="text-red-500"/> Sem reembolso com menos de 48 horas</li>
            </ul>
          </div>
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
