import React, { useState } from "react";
import { FaPaw, FaSignOutAlt, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // corrigi o path
import Notification from "./Notification";

export const testUsers = [
  {
    id: "1",
    name: "Ana Silva",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    email: "ana.silva@email.com",
  },
  {
    id: "2",
    name: "Carlos Oliveira",
    avatar: null, // sem avatar
    email: "carlos.oliveira@email.com",
  },
  {
    id: "3",
    name: "Marina Costa",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    email: "marina.costa@email.com",
  },
  {
    id: "4",
    name: "Roberto Alves",
    avatar: null, // sem avatar
    email: "roberto.alves@email.com",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  
  const [currentUser, setCurrentUser] = useState(testUsers[0]);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo e título */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center font-bold text-2xl text-gray-800">
            <FaPaw className="text-indigo-600 mr-2 text-xl" /> PetStar
          </Link>

          {/* Botões de navegação principais */}
          <div className="hidden lg:flex space-x-4">
            <Link
              to="/"
              className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Inicio
            </Link>
            <Link
              to="/reservations"
              className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Minhas Reservas
            </Link>
            <Link
              to="/pets"
              className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Meus Pets
            </Link>
            <Link
              to="/monitoramentos"
              className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Meus Monitoramentos
            </Link>
          </div>
        </div>

        {/* Botão mobile */}
        <button
          className="lg:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Menu principal */}
        <div className={`${isOpen ? "block" : "hidden"} lg:flex lg:items-center lg:space-x-8`}>
          {/* Botões de ação (perfil ou login) */}
          <div className="mt-4 lg:mt-0 flex flex-col lg:flex-row lg:space-x-3 space-y-2 lg:space-y-0 ml-auto">
            {user && (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  Entrar
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Cadastrar
                </Link>
              </>
            )}

            {!user && (
              <div className="flex items-center space-x-3">
                {/* Ícone de notificação */}
                <Notification />

                <Link
                  to="/userProfile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-3 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  {currentUser.avatar ? (
                    <img
                      src={currentUser.avatar}
                      alt={currentUser.name}
                      className="w-8 h-8 rounded-full mr-2 object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full mr-2 border border-gray-400 text-gray-400 flex items-center justify-center font-semibold">
                      {currentUser.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span>{currentUser.name}</span>
                </Link>
                <button
                  onClick={() => { logout(); setIsOpen(false); }}
                  className="px-6 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <FaSignOutAlt />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
