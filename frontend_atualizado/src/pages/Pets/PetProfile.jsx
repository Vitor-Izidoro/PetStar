import React from "react";
import {
  FaVenusMars,
  FaWeight,
  FaRuler,
  FaFirstAid,
  FaPills,
  FaRunning,
  FaBan,
} from "react-icons/fa";

export default function PetProfile({ pet }) {
  return (
    <div className="text-center">
      {/* Foto principal */}
      <img
        src={pet.img}
        alt={pet.name}
        className="w-32 h-32 rounded-full mx-auto object-cover shadow-md border-4 border-white"
      />
      <h2 className="text-2xl font-bold mt-4">{pet.name}</h2>
      <span className="text-indigo-600 font-medium">
        {pet.breed} • {pet.age}
      </span>

      {/* Infos */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <div className="bg-gray-50 px-4 py-2 rounded-lg shadow text-gray-700">
          <FaVenusMars className="inline mr-2" />
          {pet.gender}
        </div>
        {pet.weight && (
          <div className="bg-gray-50 px-4 py-2 rounded-lg shadow text-gray-700">
            <FaWeight className="inline mr-2" />
            {pet.weight}
          </div>
        )}
        {pet.size && (
          <div className="bg-gray-50 px-4 py-2 rounded-lg shadow text-gray-700">
            <FaRuler className="inline mr-2" />
            {pet.size}
          </div>
        )}
      </div>

      {/* Sobre */}
      {pet.about && (
        <div className="mt-6 text-left">
          <h4 className="text-lg font-semibold mb-2">Sobre</h4>
          <p className="text-gray-600">{pet.about}</p>
        </div>
      )}

      {/* Cuidados */}
      {pet.care?.length > 0 && (
        <div className="mt-6 text-left">
          <h4 className="text-lg font-semibold mb-2">Cuidados especiais</h4>
          <ul className="space-y-2 text-gray-600">
            {pet.care.map((item, i) => (
              <li key={i} className="flex items-start">
                <FaFirstAid className="text-indigo-600 mr-2" /> {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Galeria */}
      {pet.gallery?.length > 0 && (
        <div className="mt-6 text-left">
          <h4 className="text-lg font-semibold mb-2">Galeria</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {pet.gallery.map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden h-40 shadow-md"
              >
                <img
                  src={img}
                  alt={`${pet.name} foto ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
