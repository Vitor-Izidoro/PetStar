import React, { useState } from "react";
import { FaPaw, FaUser, FaHome } from "react-icons/fa";

const Signup = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white text-center py-6 px-4">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
            <FaPaw /> PetStar
          </h2>
          <p className="mt-1 text-sm opacity-90">Crie sua conta</p>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Step Indicator */}
          <div className="relative flex justify-between mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 font-bold transition ${
                  step >= s
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-gray-600 border-gray-300"
                }`}
              >
                {s}
              </div>
            ))}
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h4 className="text-lg font-semibold mb-4">
                Informações Pessoais
              </h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Sobrenome
                    </label>
                    <input
                      type="text"
                      placeholder="Seu sobrenome"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-500 transition"
                  >
                    Próximo
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <h4 className="text-lg font-semibold mb-4">Dados de Acesso</h4>
              <form className="space-y-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Senha
                  </label>
                  <input
                    type="password"
                    placeholder="Crie uma senha segura"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Confirmar Senha
                  </label>
                  <input
                    type="password"
                    placeholder="Digite novamente sua senha"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" />
                  <label className="text-sm text-gray-600">
                    Concordo com os{" "}
                    <a href="#" className="text-indigo-600 hover:underline">
                      Termos de Uso
                    </a>{" "}
                    e{" "}
                    <a href="#" className="text-indigo-600 hover:underline">
                      Política de Privacidade
                    </a>
                  </label>
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-2 rounded-lg border hover:bg-gray-100 transition"
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-500 transition"
                  >
                    Próximo
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <h4 className="text-lg font-semibold mb-6">Você é?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Dono de Pet */}
                <div className="border rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition">
                  <FaUser className="text-indigo-600 text-4xl mb-3 mx-auto" />
                  <h5 className="font-semibold text-lg">Dono de Pet</h5>
                  <p className="text-gray-600 text-sm mb-3">
                    Busco cuidadores para meu animal de estimação
                  </p>
                  <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition">
                    Selecionar
                  </button>
                </div>

                {/* Anfitrião */}
                <div className="border rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition">
                  <FaHome className="text-indigo-600 text-4xl mb-3 mx-auto" />
                  <h5 className="font-semibold text-lg">Anfitrião</h5>
                  <p className="text-gray-600 text-sm mb-3">
                    Quero cuidar de pets e gerar renda extra
                  </p>
                  <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition">
                    Selecionar
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-2 rounded-lg border hover:bg-gray-100 transition"
                >
                  Voltar
                </button>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="text-center mt-6 text-sm text-gray-600">
            <p>
              Já tem uma conta?{" "}
              <a
                href="/login"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Faça login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
