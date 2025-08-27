import React, { useState } from "react";
import { FaDog, FaUser, FaCalendarAlt, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MonitoringList = () => {
  const navigate = useNavigate();
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [filter, setFilter] = useState("Todas");

  const monitorings = [
    {
      id: 1,
      petName: "Rex",
      petType: "Cachorro",
      owner: "Laura Mendes",
      period: "25/08/2025 - 30/08/2025",
      status: "Em andamento",
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1b33c4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      petName: "Mimi",
      petType: "Gato",
      owner: "Carlos Silva",
      period: "27/08/2025 - 29/08/2025",
      status: "Confirmado",
      image:
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      petName: "Thor",
      petType: "Cachorro",
      owner: "Ana Souza",
      period: "20/08/2025 - 28/08/2025",
      status: "Finalizado",
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1b33c4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  
  // Filtrar reservas com base no filtro
  const filteredMonitorings = monitorings.filter((b) => {
    if (filter === "Todas") return true;
    if (filter === "Em andamento") return b.status === "Em andamento";
    if (filter === "Confirmado") return b.status === "Confirmado";
    if (filter === "Finalizado") return b.status === "Finalizado";
    return true;
  });

  const filters = ["Todas", "Em andamento", "Confirmado", "Finalizado"];


  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Meus Monitoramentos</h2>

      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg border border-indigo-600 ${
              filter === f ? "bg-indigo-600 text-white" : "text-indigo-600 hover:bg-indigo-50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMonitorings.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.petName}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FaDog className="text-blue-600" /> {item.petName}
              </h3>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <FaUser className="text-gray-500" /> Tutor: {item.owner}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <FaCalendarAlt className="text-gray-500" /> {item.period}
              </p>
              <p
                className={`text-sm font-medium ${
                  item.status === "Em andamento"
                    ? "text-blue-600"
                    : item.status === "Confirmado"
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                {item.status}
              </p>
              <Link
                to={`/monitoramentos/${item.id}`}
                className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
              >
                <FaEye /> Ver ficha
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonitoringList;
