import { FaLock, FaEnvelope, FaPhone, FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AccountRecovery() {
  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="w-full max-w-md">
        {/* Card principal */}
        <div className="bg-white shadow-lg rounded-xl p-8 text-center">
          <FaLock className="text-indigo-600 mb-4 text-5xl mx-auto" />
          <h2 className="text-2xl font-bold mb-2">Recuperação de Conta</h2>
          <p className="text-gray-500 mb-6">Informe seu e-mail para recuperar o acesso à sua conta</p>

          <form>
            <div className="mb-4 text-left">
              <label className="block text-gray-700 font-medium mb-1">E-mail cadastrado</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="seu@email.com"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition mb-4"
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
        </div>

        {/* Card de contato */}
        <div className="bg-white shadow-lg rounded-xl p-6 mt-4">
          <h5 className="text-lg font-bold mb-3">Problemas para acessar?</h5>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-indigo-600" /> contato@petstar.com.br
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-indigo-600" /> (11) 3456-7890
            </li>
            <li className="flex items-center gap-2">
              <FaComments className="text-indigo-600" /> Chat online
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
