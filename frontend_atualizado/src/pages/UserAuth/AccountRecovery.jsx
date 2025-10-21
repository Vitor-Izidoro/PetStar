import React, { useState } from "react";
import { FaLock, FaEnvelope, FaPhone, FaComments, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AccountRecovery() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Função que simula o envio do formulário e define o estado de sucesso
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você faria a chamada real à API de recuperação de senha.
    // Em caso de sucesso, chame setIsSubmitted(true);
    setIsSubmitted(true);
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="w-full max-w-md">
        {/* Card principal */}
        <div className="bg-white shadow-lg rounded-xl p-8 text-center">
          <FaLock className="text-indigo-600 mb-4 text-5xl mx-auto" />
          <h2 className="text-2xl font-bold mb-2">Recuperação de Conta</h2>

          {/* Renderização Condicional: Se enviado, mostra a mensagem de sucesso; caso contrário, mostra o formulário. */}
          {isSubmitted ? (
            <div className="py-8 px-4">
              <FaCheckCircle className="text-green-500 mb-4 text-5xl mx-auto" />
              <p className="text-green-600 font-extrabold text-xl mb-3">
                Instruções Enviadas para seu e-mail
              </p>
              <p className="text-gray-600 mb-6 text-sm">
                Verifique sua caixa de entrada (e a pasta de spam) para encontrar o link de redefinição de senha.
              </p>
              <Link
                to={"/login"}
                className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition font-medium shadow-md"
              >
                Voltar para o Login
              </Link>
            </div>
          ) : (
            <>
              <p className="text-gray-500 mb-6">Informe seu e-mail para recuperar o acesso à sua conta</p>

              <form onSubmit={handleSubmit}>
                <div className="mb-4 text-left">
                  <label htmlFor="emailInput" className="block text-gray-700 font-medium mb-1">E-mail cadastrado</label>
                  <input
                    id="emailInput"
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition font-semibold shadow-md"
                >
                  Enviar Link de Recuperação
                </button>

                <div className="mt-4">
                  <p className="text-gray-600">
                    Lembrou sua senha?{" "}
                    < Link
                      to={"/login"}
                      className="text-sm text-indigo-600 hover:underline font-medium"
                    >
                      Fazer Login
                    </Link>
                  </p>
                </div>
              </form>
            </>
          )}
        </div>

        {/* Card de contato */}
        <div className="bg-white shadow-lg rounded-xl p-6 mt-4">
          <h5 className="text-lg font-bold mb-3">Problemas para acessar?</h5>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-indigo-600" /> contato@petstar.com.br
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-indigo-600" /> (11) 3456-7890
            </li>
            <li className="flex items-center gap-2">
              <FaComments className="text-indigo-600" /> Chat online (segunda a sexta)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
