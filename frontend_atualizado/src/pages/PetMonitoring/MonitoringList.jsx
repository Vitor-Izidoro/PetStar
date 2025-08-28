import React, { useState, useEffect } from "react";
import { FaDog, FaUser, FaCalendarAlt, FaEye, FaInbox, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import monitoringsMock from "../../data/mockData/monitorings";
import DataWrapper from "../../components/DataWrapper";

const MonitoringList = () => {
  const [monitorings, setMonitorings] = useState([]);
  const [filter, setFilter] = useState("Todas");
  const filters = ["Todas", "Em andamento", "Confirmado", "Finalizado"];
  const [isLoading, setIsLoading] = useState(true);

  const filteredMonitorings = monitorings.filter((b) => {
    if (filter === "Todas") return true;
    return b.pet.status === filter;
  });

  const fetchMonitorings= () => {
      setIsLoading(true);
      setTimeout(() => {
        setMonitorings(monitoringsMock);
        setIsLoading(false);
      }, 1500);
    };
  
  useEffect(() => fetchMonitorings(), []);

  return (
    <div className="container mx-auto px-4 py-6">
      {!isLoading && (
        <>
          <h2 className="text-2xl font-bold mb-6">Meus Monitoramentos</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg border border-indigo-600 ${filter === f ? "bg-indigo-600 text-white" : "text-indigo-600 hover:bg-indigo-50"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </>
      )}

      <DataWrapper
        isLoading={isLoading}
        data={filteredMonitorings}
        emptyTitle="Nenhum monitoramento encontrado"
        LoadingTitle="Carregando monitoramentos..."
        emptyDescription="Você não possui monitoramentos nesse filtro."
        onEmptyAction={fetchMonitorings}
        EmptyIcon={<FaInbox size={50} className="text-indigo-400 animate-bounce-slow" />}
        LoadingIcon={<FaSpinner size={50} className="text-indigo-400 animate-spin-slow" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMonitorings.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={item.pet.image} alt={item.pet.name} className="w-full h-40 object-cover"/>
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <FaDog className="text-blue-600" /> {item.pet.name} ({item.pet.species})
                </h3>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <FaUser className="text-gray-500" /> Tutor: {item.owner.name}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <FaUser className="text-gray-500" /> Cuidador: {item.caregiver.name}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <FaCalendarAlt className="text-gray-500" /> {item.period}
                </p>
                <p className={`text-sm font-medium ${item.pet.status === "Em andamento" ? "text-blue-600" : item.pet.status === "Confirmado" ? "text-green-600" : "text-gray-500"}`}>
                  {item.pet.status}
                </p>
                <Link to={`/monitoramentos/${item.id}`} className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
                  <FaEye /> Ver ficha
                </Link>
              </div>
            </div>
          ))}
        </div>
      </DataWrapper>
    </div>
  );
};

export default MonitoringList;
