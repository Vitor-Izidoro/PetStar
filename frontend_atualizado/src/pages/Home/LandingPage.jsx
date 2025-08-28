import React from "react";
import { FaSearch, FaCalendarCheck, FaHeart } from "react-icons/fa";

const testimonials = [
  {
    name: "Carla Souza",
    role: "Dona da Luna 🐶",
    text: "Fiquei super tranquila viajando sabendo que minha Luna estava sendo bem cuidada. Recomendo muito a PetStar!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Pedro Lima",
    role: "Dono do Max 🐕",
    text: "O anfitrião foi incrível, mandou fotos todos os dias. O Max adorou a experiência!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Fernanda Alves",
    role: "Dona da Mel 🐾",
    text: "Excelente plataforma! Fácil de usar e com anfitriões muito atenciosos.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Inicio = () => {
  return (
    <>
      <section className="relative bg-indigo-700 text-white text-center py-24 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(78,84,200,0.8), rgba(78,84,200,0.85)), url('https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1374&q=80')" }}>
        <div className="container mx-auto px-5">
          <h1 className="text-4xl font-bold mb-4">Cuidador de pets com todo cuidado que seu animal merece</h1>
          <p className="text-lg mb-8">Encontre anfitriões confiáveis para hospedar seu pet com amor</p>
          
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Como funciona o PetStar</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white text-center p-6 rounded-xl shadow hover:shadow-lg">
              <FaSearch className="text-indigo-600 text-4xl mx-auto mb-4"/>
              <h3 className="text-xl font-bold mb-2">1. Busque</h3>
              <p className="text-gray-600">Encontre anfitriões perto de você com base nas suas necessidades</p>
            </div>
            <div className="bg-white text-center p-6 rounded-xl shadow hover:shadow-lg">
              <FaCalendarCheck className="text-indigo-600 text-4xl mx-auto mb-4"/>
              <h3 className="text-xl font-bold mb-2">2. Reserve</h3>
              <p className="text-gray-600">Entre em contato, combine os detalhes e faça a reserva online</p>
            </div>
            <div className="bg-white text-center p-6 rounded-xl shadow hover:shadow-lg">
              <FaHeart className="text-indigo-600 text-4xl mx-auto mb-4"/>
              <h3 className="text-xl font-bold mb-2">3. Aproveite</h3>
              <p className="text-gray-600">Deixe seu pet em boas mãos e receba atualizações durante a estadia</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Donos e anfitriões compartilham suas experiências com a PetStar.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition text-left"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">“{t.text}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Inicio;
