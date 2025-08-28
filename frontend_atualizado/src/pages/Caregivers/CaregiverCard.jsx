import React from "react";
import { Link } from "react-router-dom";

const CaregiverCard = ({ host }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      <img src={host.img} alt={host.name} className="h-56 w-full object-cover" />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-bold">{host.name}</h4>
          <span className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-full">
            {host.rating} ★
          </span>
        </div>
        <span className="text-indigo-600 font-medium mb-2">{host.location}</span>
        <div className="flex flex-wrap gap-2 mb-3">
          {host.features.map((f) => (
            <span
              key={f}
              className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs"
            >
              {f}
            </span>
          ))}
        </div>
        <p className="text-gray-600 text-sm mb-3 flex-1">{host.description}</p>
        <p className="text-orange-500 font-bold mb-4">R$ {host.price}/noite</p>

        <Link
          to={`/perfil-cuidador/${host.id}`}
          state={{ host }}
          className="block text-center bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700"
        >
          Ver perfil
        </Link>
      </div>
    </div>
  );
};

export default CaregiverCard;
