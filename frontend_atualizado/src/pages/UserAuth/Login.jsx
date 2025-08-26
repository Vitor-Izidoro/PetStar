import React from "react";
import { FaPaw, FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white text-center py-6 px-4">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
            <FaPaw /> PetStar
          </h2>
          <p className="mt-1 text-sm opacity-90">Entre na sua conta</p>
        </div>

        {/* Body */}
        <div className="p-8">
          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Senha */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Senha
              </label>
              <input
                type="password"
                placeholder="Sua senha"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <div className="flex justify-end mt-2">
                <a
                  href="#"
                  className="text-sm text-indigo-600 hover:underline font-medium"
                >
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            {/* Botão entrar */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg font-semibold transition transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Entrar
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="px-3 text-gray-500 text-sm font-medium">
              Ou entre com
            </span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Social login */}
          <div className="flex justify-center gap-4 mb-4">
            <button className="w-12 h-12 rounded-full border flex items-center justify-center hover:-translate-y-1 transition shadow-sm">
              <FaGoogle className="text-red-500 text-lg" />
            </button>
            <button className="w-12 h-12 rounded-full border flex items-center justify-center hover:-translate-y-1 transition shadow-sm">
              <FaFacebookF className="text-blue-600 text-lg" />
            </button>
            <button className="w-12 h-12 rounded-full border flex items-center justify-center hover:-translate-y-1 transition shadow-sm">
              <FaApple className="text-black text-lg" />
            </button>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-600">
            <p>
              Não tem uma conta?{" "}
              <a
                href="/signup"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
