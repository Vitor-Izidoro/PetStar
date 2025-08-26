import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { FaPaw, FaMapMarkerAlt, FaStar, FaStarHalfAlt, FaHome, FaTree, FaCouch, FaShieldAlt, FaHeart } from "react-icons/fa";
import ReservaForm from "../Reserva/ReservaForm";

// Reutiliza os hosts do Cuidadores ou importe de um arquivo separado
const hosts = [
  { id: "1", name: "Ana Silva", rating: 4.9, location: "Vila Madalena, São Paulo", img: "...", features: ["Quintal", "Cães grandes"], description: "...", price: "R$ 40/noite", reviews: 12 },
  { id: "2", name: "Carlos Oliveira", rating: 4.8, location: "Jardins, São Paulo", img: "...", features: ["Veterinário"], description: "...", price: "R$ 45/noite", reviews: 8 },
  { id: "3", name: "Marina Costa", rating: 5.0, location: "Pinheiros, São Paulo", img: "...", features: ["Gatos"], description: "...", price: "R$ 50/noite", reviews: 20 },
  { id: "4", name: "Roberto Alves", rating: 4.7, location: "Moema, São Paulo", img: "...", features: ["Passeios"], description: "...", price: "R$ 35/noite", reviews: 15 }
];

const PetStarProfile = () => {
  const { id } = useParams();
  const location = useLocation();
  const stateHost = location.state?.host;
  const host = stateHost || hosts.find(h => h.id === id);

  const [activeTab, setActiveTab] = useState("about");
  const [openReserva, setOpenReserva] = useState(false);

  if (!host) {
    return <p>Cuidador não encontrado</p>; // fallback caso acessem a rota direto
  }

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 px-4">
        {/* Perfil */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow overflow-hidden mb-6">
            <div className="relative">
              <img src={host.img} alt={host.name} className="w-full h-72 object-cover" />
              <span className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-1 rounded-full font-semibold">{host.rating} ★</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold">{host.name}</h2>
              <p className="text-indigo-600 font-medium flex items-center gap-2 mb-2"><FaMapMarkerAlt /> {host.location}</p>
              <p className="text-orange-500 font-bold text-lg mb-2">{host.price}</p>
              <div className="flex items-center text-yellow-500 mb-3">
                {[...Array(Math.floor(host.rating))].map((_, i) => <FaStar key={i} />)}
                {host.rating % 1 !== 0 && <FaStarHalfAlt />}
                <span className="ml-2 text-gray-600">{host.reviews} avaliações</span>
              </div>
              <p className="text-gray-600 mb-4">{host.description}</p>
              <div className="flex gap-3">
                <button onClick={() => setOpenReserva(true)} className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-500">Solicitar reserva</button>
                <button className="border border-indigo-600 text-indigo-600 px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-50"><FaHeart /> Favoritar</button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b flex gap-6 mb-6">
            <button onClick={() => setActiveTab("about")} className={`pb-3 font-semibold ${activeTab === "about" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500"}`}>Sobre</button>
            <button onClick={() => setActiveTab("services")} className={`pb-3 font-semibold ${activeTab === "services" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500"}`}>Serviços</button>
            <button onClick={() => setActiveTab("reviews")} className={`pb-3 font-semibold ${activeTab === "reviews" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500"}`}>Avaliações (48)</button>
          </div>

          {/* Tab Content */}
          {activeTab === "about" && (
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="text-lg font-bold mb-2">Sobre mim</h4>
              <p className="text-gray-600 mb-4">Olá! Meu nome é Ana e sou apaixonada por animais desde criança. Trabalho como cuidadora de pets há mais de 5 anos e já atendi mais de 100 animais.</p>
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
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Laura" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="font-bold">Laura Mendes</p>
                      <div className="flex text-yellow-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">15 de Ago, 2023</p>
                </div>
                <p className="text-gray-600">Encontrei a Ana para cuidar do Thor nas minhas férias e foi incrível! Recebia fotos todos os dias.</p>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Reserva */}
        <div className="lg:col-span-1 space-y-6">
          <ReservaForm host={host} />
        </div>
    </div>
  );
};

export default PetStarProfile;
