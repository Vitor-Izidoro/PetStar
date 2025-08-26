import React, { useState } from "react";
import {
  FaPen,
  FaMapMarkerAlt,
  FaStar,
  FaStarHalfAlt,
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaPlusCircle,
  FaPlus,
} from "react-icons/fa";
import ReservaList from "../Reserva/ReservaList";
import PetList from "../Pets/PetList";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("pets");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto mt-6 mb-10 px-4" id="page-content">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Lado esquerdo - Perfil */}
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <div className="relative inline-block mb-3">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80"
                alt="Avatar"
                className="w-32 h-32 rounded-full object-cover mx-auto"
              />
              <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700">
                <FaPen />
              </button>
            </div>
            <h3 className="text-xl font-semibold">Laura Mendes</h3>
            <p className="text-gray-500 flex items-center justify-center mb-3">
              <FaMapMarkerAlt className="mr-2" /> São Paulo, SP
            </p>

            <div className="flex justify-center mb-4 text-center">
              <div className="mx-4">
                <div className="text-lg font-bold">12</div>
                <div className="text-gray-500 text-sm">Reservas</div>
              </div>
              <div className="mx-4">
                <div className="text-lg font-bold">4</div>
                <div className="text-gray-500 text-sm">Pets</div>
              </div>
              <div className="mx-4">
                <div className="text-lg font-bold">8</div>
                <div className="text-gray-500 text-sm">Avaliações</div>
              </div>
            </div>

            <div className="flex justify-center items-center text-yellow-500 mb-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <span className="ml-2 text-gray-700">4.7</span>
            </div>

            <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded-lg text-sm hover:bg-blue-50 flex items-center mx-auto">
              <FaPen className="mr-2" /> Editar Perfil
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h5 className="font-semibold text-lg mb-4">
              Informações de Contato
            </h5>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-600" />{" "}
                laura.mendes@exemplo.com
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-blue-600" /> (11) 98765-4321
              </li>
              <li className="flex items-center">
                <FaBirthdayCake className="mr-2 text-blue-600" /> 15/05/1985
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-blue-600" /> Rua das
                Flores, 123 - Jardins, São Paulo - SP
              </li>
            </ul>
          </div>
        </div>

        {/* Lado direito - Tabs */}
        <div className="lg:col-span-2">
          <div className="flex space-x-4 border-b mb-4">
            {[
              { id: "pets", label: "Meus Pets" },
              { id: "bookings", label: "Minhas Reservas" },
              { id: "reviews", label: "Avaliações" },
              { id: "settings", label: "Configurações" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 px-3 ${
                  activeTab === tab.id
                    ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            {activeTab === "pets" && (
              <PetList />
            )}

            {activeTab === "bookings" && (
              <>
                <ReservaList />
              </>
            )}

            {activeTab === "reviews" && (
              <h4 className="text-lg font-semibold">Minhas Avaliações</h4>
            )}

            {activeTab === "settings" && (
              <h4 className="text-lg font-semibold">Configurações</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
