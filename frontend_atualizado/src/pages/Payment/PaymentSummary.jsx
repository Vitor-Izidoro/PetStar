import React from "react";
import { FaLock, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function PaymentSummary({ reservation, acceptTerms, setAcceptTerms, setShowModal }) {
  return (
    <>
      <div className="bg-white shadow rounded-xl border">
        <div className="px-4 py-2 border-b font-semibold">Resumo do Pagamento</div>
        <div className="p-4 space-y-2">
          <div className="flex justify-between">{reservation.duration} x {reservation.total} <span>{reservation.total}</span></div>
          <div className="flex justify-between">Taxa de serviço <span>R$ 20,00</span></div>
          <div className="flex justify-between">Taxa de limpeza <span>R$ 0,00</span></div>
          <div className="flex justify-between font-bold border-t pt-2">Total <span>{reservation.total}</span></div>

          <div className="flex items-center mt-2">
            <input type="checkbox" checked={acceptTerms} onChange={() => setAcceptTerms(!acceptTerms)} id="termsCheck" className="mr-2"/>
            <label htmlFor="termsCheck" className="text-gray-700 text-sm">
              Concordo com os <a href="#" className="text-indigo-600 underline">Termos de Serviço</a> e <a href="#" className="text-indigo-600 underline">Política de Cancelamento</a>
            </label>
          </div>

          <button onClick={() => setShowModal(true)} className="bg-indigo-600 text-white w-full py-2 rounded-lg mt-4 hover:bg-indigo-500">
            Confirmar Pagamento
          </button>

          <p className="text-center text-gray-500 text-sm mt-2 flex items-center justify-center gap-1">
            <FaLock /> Seus dados estão protegidos
          </p>
        </div>
      </div>

      <div className="bg-white shadow rounded-xl border p-4">
        <h5 className="font-semibold mb-2">Política de Cancelamento</h5>
        <ul className="space-y-1 text-gray-700">
          <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Reembolso integral com 7+ dias de antecedência</li>
          <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Reembolso de 50% com 2-6 dias de antecedência</li>
          <li className="flex items-center gap-2"><FaTimesCircle className="text-red-500"/> Sem reembolso com menos de 48 horas</li>
        </ul>
      </div>
    </>
  );
}
