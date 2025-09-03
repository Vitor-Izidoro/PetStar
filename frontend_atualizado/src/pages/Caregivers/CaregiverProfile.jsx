import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { 
  FaMapMarkerAlt, FaStar, FaStarHalfAlt, FaHome, 
  FaTree, FaCouch, FaShieldAlt, FaHeart 
} from "react-icons/fa";

import ReservaForm from "../Reservations/ReservationForm/ReservationForm";
import hosts from "./hostsData";
import Button from "../../components/Button/Button"; // Button genérico importado

const CaregiverProfile = () => {
  const { id } = useParams();
  const location = useLocation();
  const stateHost = location.state?.host;
  const host = stateHost || hosts.find(h => h.id === id);

  const [activeTab, setActiveTab] = useState("about");
  const [openReserva, setOpenReserva] = useState(false);

  if (!host) return <p>Cuidador não encontrado</p>;

  return (
    <div className={`container mx-auto mt-6 px-4 ${openReserva ? "grid grid-cols-1 lg:grid-cols-3 gap-6" : "flex justify-center"}`}>
      {/* Perfil */}
      <div className={`${openReserva ? "lg:col-span-2" : "w-full lg:w-2/3"}`}>
        <div className="bg-white rounded-xl shadow overflow-hidden mb-6">
          <div className="relative">
            <img src={host.img} alt={host.name} className="w-full h-72 object-cover" />
            <span className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-1 rounded-full font-semibold">
              {host.rating} ★
            </span>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="text-2xl font-bold">{host.name}</h2>
                <p className="text-indigo-600 font-medium flex items-center gap-2">
                  <FaMapMarkerAlt /> {host.location}
                </p>
              </div>

              {/* Botão Favoritar */}
              <Button
                onClick={() => console.log("Favoritado!")}
                variant="secondary"
                icon={FaHeart}
                iconPosition="left"
              >
                Favoritar
              </Button>
            </div>

            <p className="text-orange-500 font-bold text-lg mb-2">{host.price}</p>

            <div className="flex items-center text-yellow-500 mb-3">
              {[...Array(Math.floor(host.rating))].map((_, i) => <FaStar key={i} />)}
              {host.rating % 1 !== 0 && <FaStarHalfAlt />}
              <span className="ml-2 text-gray-600">{host.reviews} avaliações</span>
            </div>

            <p className="text-gray-600 mb-4">{host.description}</p>

            {/* Botões de Reserva */}
            <div className="flex gap-3">
              {openReserva ? (
                <Button
                  onClick={() => setOpenReserva(false)}
                  variant="danger"
                  size="md"
                >
                  Cancelar reserva
                </Button>
              ) : (
                <Button
                  onClick={() => setOpenReserva(true)}
                  variant="primary"
                  size="md"
                >
                  Solicitar reserva
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b flex gap-6 mb-6">
          {["about", "services", "reviews"].map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              variant={activeTab === tab ? "primary" : "secondary"}
              size="sm"
            >
              {tab === "about" ? "Sobre" : tab === "services" ? "Serviços" : "Avaliações (48)"}
            </Button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "about" && (
          <div className="bg-white rounded-xl shadow p-6">
            <h4 className="text-lg font-bold mb-2">Sobre mim</h4>
            <p className="text-gray-600 mb-4">
              Olá! Meu nome é Ana e sou apaixonada por animais desde criança. Trabalho como cuidadora de pets há mais de 5 anos e já atendi mais de 100 animais.
            </p>

            <h4 className="text-lg font-bold mb-2">Minha casa</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><FaHome className="text-indigo-600" /> Casa com quintal grande</li>
              <li className="flex items-center gap-2"><FaTree className="text-indigo-600" /> Área verde disponível</li>
              <li className="flex items-center gap-2"><FaCouch className="text-indigo-600" /> Animais têm acesso à casa</li>
              <li className="flex items-center gap-2"><FaShieldAlt className="text-indigo-600" /> Ambiente seguro e cercado</li>
            </ul>
          </div>
        )}

        {activeTab === "services" && (
          <div className="bg-white rounded-xl shadow p-6 grid md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg shadow-sm">
              <h5 className="font-bold">Hospedagem</h5>
              <p className="text-indigo-600 font-semibold">R$ 40/noite</p>
              <ul className="list-disc ml-5 text-gray-600 text-sm mt-2">
                <li>Até 3 passeios por dia</li>
                <li>Alimentação conforme orientação</li>
                <li>Atualizações com fotos</li>
              </ul>
            </div>
            <div className="border p-4 rounded-lg shadow-sm">
              <h5 className="font-bold">Creche</h5>
              <p className="text-indigo-600 font-semibold">R$ 30/dia</p>
              <p className="text-gray-600 text-sm mt-2">Perfeito para quem trabalha o dia todo.</p>
            </div>
            <div className="border p-4 rounded-lg shadow-sm">
              <h5 className="font-bold">Passeio</h5>
              <p className="text-indigo-600 font-semibold">R$ 25/passeio</p>
              <p className="text-gray-600 text-sm mt-2">Passeios de 30 minutos na região.</p>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
                    alt="Laura"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold">Laura Mendes</p>
                    <div className="flex text-yellow-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">15 de Ago, 2023</p>
              </div>
              <p className="text-gray-600">
                Encontrei a Ana para cuidar do Thor nas minhas férias e foi incrível! Recebia fotos todos os dias.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar Reserva */}
      {openReserva && (
        <div className="lg:col-span-1 space-y-6">
          <ReservaForm host={host} onClose={() => setOpenReserva(false)} />
        </div>
      )}
    </div>
  );
};

export default CaregiverProfile;
