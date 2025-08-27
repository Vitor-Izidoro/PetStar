import React from "react";
import { FaStar, FaStarHalfAlt, FaPaperPlane } from "react-icons/fa";

export default function ProfileTimeline({ pet, caregiver, timeline }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Acompanhamento do {pet.name}</h2>
        <span className="text-green-600 font-semibold">{pet.status}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Cuidador */}
        <div className="flex items-center gap-3">
          <img
            src={caregiver.avatar}
            alt={caregiver.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h5 className="font-semibold">{caregiver.name}</h5>
            <p className="text-gray-500">Cuidador(a)</p>
            <div className="flex items-center text-yellow-400">
              {Array.from({ length: Math.floor(caregiver.rating) }).map((_, i) => (
                <FaStar key={i} />
              ))}
              {caregiver.rating % 1 !== 0 && <FaStarHalfAlt />}
              <span className="ml-2 text-gray-700 font-semibold">
                {caregiver.rating}
              </span>
            </div>
          </div>
        </div>

        {/* Pet */}
        <div className="flex items-center gap-3">
          <img
            src={pet.image}
            alt={pet.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h5 className="font-semibold">{pet.name}</h5>
            <p className="text-gray-500">
              {pet.breed} • {pet.age}
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <h4 className="font-bold mb-3">Linha do Tempo</h4>
      <div className="space-y-6">
        {timeline.map((item, idx) => (
          <TimelineItem key={idx} {...item} />
        ))}
      </div>

      {/* Mensagem */}
      <div className="mt-6">
        <h4 className="font-bold mb-3">Enviar mensagem para o cuidador</h4>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
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
      {image && (
        <img
          src={image}
          alt={title}
          className="mt-2 w-24 h-24 rounded object-cover"
        />
      )}
    </div>
  );
}
