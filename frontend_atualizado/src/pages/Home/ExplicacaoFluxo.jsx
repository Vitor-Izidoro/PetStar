import React from 'react';
import { FaSearch, FaPaw, FaCreditCard, FaCalendarCheck, FaCommentDots, FaDog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Componente principal que serve como a "Landing Page Explicativa"
const ExplicacaoFluxo = () => {

  const steps = [
    {
      icon: FaSearch,
      title: "1. Encontre o Cuidador Ideal",
      description: "Use nossos filtros de localização e serviço (Hospedagem, Creche, Passeio) para ver apenas os Anfitriões disponíveis que aceitam o seu pet. Veja fotos, avaliações e preços por noite/serviço.",
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      icon: FaCalendarCheck,
      title: "2. Solicite e Confirme a Reserva (5 Passos)",
      description: "Após escolher o Anfitrião, inicie a reserva em um processo rápido. Você informará as datas, selecionará o(s) pet(s) que vão, adicionará detalhes de transporte e, por último, fará a revisão e o envio da solicitação.",
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      icon: FaCreditCard,
      title: "3. Gerencie e Pague",
      description: "Acompanhe o status. Assim que o Cuidador aceitar sua solicitação, a reserva estará 'Confirmada'. É só entrar na sua área de Reservas para finalizar o pagamento de forma segura na plataforma.",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: FaDog,
      title: "4. Acompanhe Seu Pet",
      description: "Relaxe! Durante o serviço, você tem acesso à área de Monitoramento. O Cuidador envia relatórios e fotos (como um diário) para você ver como seu amigo está se divertindo e sendo cuidado.",
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      icon: FaCommentDots,
      title: "5. Avalie o Serviço",
      description: "Ao final, sua opinião é muito importante. Deixe sua avaliação e feedback sobre o Cuidador para ajudar outros pais de pets a fazerem a escolha certa.",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEÇÃO PRINCIPAL (Hero) */}
      <header className="py-20 bg-indigo-600 text-white shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <FaPaw className="mx-auto w-16 h-16 mb-4 text-orange-400 animate-bounce-slow" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Cuidado Perfeito para o Seu Pet, Em Passos Simples.
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            Descubra como é fácil e seguro reservar o melhor serviço para seu amigo de quatro patas.
          </p>
        </div>
      </header>

      {/* SEÇÃO DE FLUXO SIMPLIFICADO */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Como Funciona o PetStar?
          </h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`p-4 rounded-full mb-4 ${step.bg} ${step.color}`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* SEÇÃO DE CHAMADA PARA AÇÃO (CTA) */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para encontrar o melhor amigo do seu Pet?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            É rápido, seguro e feito com carinho.
          </p>
          <Link
            to="/cuidadores" // Deve levar à CaregiverPage.jsx
            className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white text-xl font-bold px-10 py-3 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Começar a Busca Agora!
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ExplicacaoFluxo;