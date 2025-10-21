import React from "react";
import { FaPaw, FaGoogle, FaFacebookF, FaApple, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom"; // Necessário para simular links

const Login = () => {
  return (
    // Container Principal: Fundo levemente cinza
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-indigo-400/50">
        
        {/* Header com Branding e Estilo */}
        <div className="bg-indigo-600 text-white text-center py-8 px-4 relative">
          <FaPaw className="mx-auto w-10 h-10 mb-2 text-orange-300 transform rotate-12" />
          <h2 className="text-3xl font-extrabold tracking-wider">
            PetStar
          </h2>
          <p className="mt-1 text-base opacity-90">Bem-vindo(a) de volta!</p>
          {/* Detalhe de curva para a separação visual */}
          <div className="absolute bottom-0 left-0 w-full h-4 bg-white rounded-t-full transform translate-y-full"></div>
        </div>

        {/* Formulário e Social Login */}
        <div className="p-8 sm:p-10">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Campo E-mail */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                E-mail
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                  required
                />
              </div>
            </div>

            {/* Campo Senha */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                  required
                />
              </div>
              <div className="flex justify-end mt-3">
                <Link
                  to={"/accountRecovery"}
                  className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline font-medium transition"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>

            {/* Botão Principal Entrar (com gradiente e efeito 3D) */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold text-lg shadow-lg shadow-indigo-500/50 transition transform hover:scale-[1.01] active:scale-[0.99] duration-150"
              style={{
                backgroundImage: 'linear-gradient(to right, #4F46E5, #6366F1)'
              }}
            >
              Entrar na Plataforma
            </button>
          </form>

          {/* Divisor "Ou entre com" */}
          <div className="flex items-center my-8">
            <hr className="flex-1 border-gray-200" />
            <span className="px-3 text-gray-500 text-sm font-medium uppercase tracking-wider">
              Ou
            </span>
            <hr className="flex-1 border-gray-200" />
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-4">
            <button className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:shadow-md hover:border-indigo-400 transition transform hover:-translate-y-1 duration-200 bg-white">
              <FaGoogle className="text-red-600 text-xl" />
            </button>
            <button className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:shadow-md hover:border-indigo-400 transition transform hover:-translate-y-1 duration-200 bg-white">
              <FaFacebookF className="text-blue-600 text-xl" />
            </button>
            <button className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:shadow-md hover:border-indigo-400 transition transform hover:-translate-y-1 duration-200 bg-white">
              <FaApple className="text-gray-900 text-xl" />
            </button>
          </div>

          {/* Footer Link Cadastre-se */}
          <div className="text-center text-sm text-gray-600 mt-10">
            <p className="font-medium">
              Não tem uma conta PetStar?{" "}
              <Link
                to="/signup"
                className="text-indigo-600 font-bold hover:text-indigo-800 hover:underline"
              >
                Cadastre-se aqui
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
