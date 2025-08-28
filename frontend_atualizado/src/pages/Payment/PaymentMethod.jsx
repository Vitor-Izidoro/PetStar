import React from "react";
import { FaCreditCard, FaQrcode } from "react-icons/fa";

export default function PaymentMethod({ reservation, activeTab, setActiveTab, saveCard, setSaveCard }) {
  return (
    <div className="bg-white border rounded-lg">
      <div className="px-4 py-2 border-b font-semibold">Método de Pagamento</div>
      <div className="p-4">
        {/* Tabs */}
        <div className="flex space-x-2 mb-4">
          <button
            className={`px-4 py-2 rounded-t-lg ${activeTab === "credit" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"} flex items-center gap-2`}
            onClick={() => setActiveTab("credit")}
          >
            <FaCreditCard /> Cartão de Crédito
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg ${activeTab === "pix" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"} flex items-center gap-2`}
            onClick={() => setActiveTab("pix")}
          >
            <FaQrcode /> PIX
          </button>
        </div>

        {activeTab === "credit" ? (
          <div className="space-y-4">
            {/* Resumo */}
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

            {/* Formulário */}
            <form className="space-y-4">
              <div>
                <label className="block mb-1">Número do Cartão</label>
                <div className="flex border rounded-lg overflow-hidden">
                  <input type="text" placeholder="1234 5678 9012 3456" className="flex-1 px-3 py-2 outline-none"/>
                  <div className="px-3 py-2 border-l text-gray-500"><FaCreditCard /></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                <div className="md:col-span-3">
                  <label className="block mb-1">Nome no Cartão</label>
                  <input type="text" placeholder={reservation.clientName.toUpperCase()} className="w-full border rounded-lg px-3 py-2 outline-none"/>
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1">Validade</label>
                  <input type="text" placeholder="MM/AA" className="w-full border rounded-lg px-3 py-2 outline-none"/>
                </div>
                <div className="md:col-span-1">
                  <label className="block mb-1">CVV</label>
                  <input type="text" placeholder="123" className="w-full border rounded-lg px-3 py-2 outline-none"/>
                </div>
              </div>

              <div className="flex items-center">
                <input type="checkbox" checked={saveCard} onChange={() => setSaveCard(!saveCard)} id="saveCard" className="mr-2"/>
                <label htmlFor="saveCard" className="text-gray-700">Salvar informações do cartão para pagamentos futuros</label>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center space-y-2">
            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${reservation.clientName}-${reservation.service}`} alt="QR Code PIX" className="mx-auto max-w-xs"/>
            <p className="text-gray-500">Escaneie o QR Code com seu app bancário para pagar via PIX</p>
            <p><strong>Valor: {reservation.total}</strong></p>
            <p className="text-gray-400 text-sm">Pagamento válido por 30 minutos</p>
          </div>
        )}
      </div>
    </div>
  );
}
