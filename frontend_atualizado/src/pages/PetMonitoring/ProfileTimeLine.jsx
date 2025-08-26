import React from "react";
import { FaStar, FaStarHalfAlt, FaPaperPlane } from "react-icons/fa";

export default function ProfileTimeline() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Acompanhamento do Thor</h2>
        <span className="text-green-600 font-semibold">Em Andamento</span>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80"
               alt="Ana Silva"
               className="w-20 h-20 rounded-full object-cover" />
          <div>
            <h5 className="font-semibold">Ana Silva</h5>
            <p className="text-gray-500">Cuidadora</p>
            <div className="flex items-center text-yellow-400">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              <span className="ml-2 text-gray-700 font-semibold">4.9</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=662&q=80"
               alt="Thor"
               className="w-20 h-20 rounded-full object-cover" />
          <div>
            <h5 className="font-semibold">Thor</h5>
            <p className="text-gray-500">Golden Retriever • 3 anos</p>
          </div>
        </div>
      </div>

      <h4 className="font-bold mb-3">Linha do Tempo</h4>
      <div className="space-y-6">
        <TimelineItem title="Check-in realizado" time="15/09/2023 14:30"
                      description="Thor chegou bem e está se adaptando ao ambiente."
                      image="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80" />
        <TimelineItem title="Primeiro passeio" time="15/09/2023 16:15"
                      description="Passeio de 30 minutos no parque. Thor adorou e fez amizade com outros cães." />
        <TimelineItem title="Alimentação" time="15/09/2023 18:00"
                      description="Thor comeu toda a ração e bebeu água normalmente." />
        <TimelineItem title="Atualização noturna" time="15/09/2023 21:45"
                      description="Thor está dormindo tranquilamente. Teve um dia cheio de atividades!"
                      image="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&auto=format&fit=crop&w=735&q=80" />
      </div>

      <div className="mt-6">
        <h4 className="font-bold mb-3">Enviar mensagem para a cuidadora</h4>
        <div className="flex gap-2">
          <input type="text" placeholder="Digite sua mensagem..." 
                 className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <button className="px-4 py-2 bg-indigo-700 text-white rounded-lg flex items-center gap-2 hover:bg-indigo-500 transition">
            <FaPaperPlane /> Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ title, time, description, image }) {
  return (
    <div className="border-l-2 border-indigo-300 pl-4 relative">
      <div className="absolute -left-3 top-1 w-6 h-6 bg-indigo-700 rounded-full"></div>
      <div className="flex justify-between items-center">
        <h5 className="font-semibold">{title}</h5>
        <small className="text-gray-500">{time}</small>
      </div>
      <p>{description}</p>
      {image && <img src={image} alt={title} className="mt-2 w-24 h-24 rounded object-cover" />}
    </div>
  );
}