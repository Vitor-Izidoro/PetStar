import React, { useState, useEffect } from "react";
import hosts from "./hostsData";
import FiltersCaregiversList from "./FiltersCaregiversList";
import CaregiverCard from "./CaregiverCard";
import { FaFilter, FaInbox, FaSpinner } from "react-icons/fa";
import DataWrapper from "../../components/DataWrapper";

const CaregiverPage = () => {
  const [caregivers, setCaregivers] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [location, setLocation] = useState("");
  const [service, setService] = useState("Todos");
  const [maxPrice, setMaxPrice] = useState(100);
  const [minRating, setMinRating] = useState(0);
  const [petTypes, setPetTypes] = useState([]);
  const [features, setFeatures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleArrayValue = (arr, value, setter) => {
    if (arr.includes(value)) setter(arr.filter((v) => v !== value));
    else setter([...arr, value]);
  };

  const fetchCaregivers = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCaregivers(hosts);
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    fetchCaregivers();
  }, []);

  const filteredHosts = caregivers.filter((host) => {
    if (location && !host.location.toLowerCase().includes(location.toLowerCase()))
      return false;
    if (service !== "Todos" && !host.services.includes(service)) return false;
    if (host.price > maxPrice) return false;
    if (host.rating < minRating) return false;
    if (petTypes.length > 0 && !petTypes.some((p) => host.pets.includes(p))) return false;
    if (features.length > 0 && !features.every((f) => host.features.includes(f)))
      return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className={`container mx-auto mt-6 px-4 ${openFilter ? "grid lg:grid-cols-4 gap-8" : "flex justify-center"}`}>
        {openFilter && (
          <FiltersCaregiversList
            location={location} setLocation={setLocation}
            service={service} setService={setService}
            maxPrice={maxPrice} setMaxPrice={setMaxPrice}
            minRating={minRating} setMinRating={setMinRating}
            petTypes={petTypes} setPetTypes={setPetTypes}
            features={features} setFeatures={setFeatures}
            toggleArrayValue={toggleArrayValue}
          />
        )}

        <section className="lg:col-span-3">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <span className="font-semibold text-gray-800">{filteredHosts.length} anfitriões encontrados</span>
            <button
              onClick={() => setOpenFilter(!openFilter)}
              className={`${openFilter ? "bg-red-600 hover:bg-red-500" : "bg-indigo-600 hover:bg-indigo-500"} text-white px-5 py-2 rounded-lg flex items-center`}
            >
              <FaFilter /> {openFilter ? "Fechar Filtro" : "Ajustar Filtro"}
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <DataWrapper
              isLoading={isLoading}
              data={filteredHosts}
              emptyTitle="Nenhum cuidador encontrado"
              emptyDescription="Parece que não há cuidadores disponíveis no momento."
              onEmptyAction={fetchCaregivers}
              EmptyIcon={<FaInbox size={50} className="text-indigo-400 animate-bounce-slow" />}
              LoadingIcon={<FaSpinner size={50} className="text-indigo-400 animate-spin-slow" />}
            >
              {filteredHosts.map((host) => (
                <CaregiverCard key={host.id} host={host} />
              ))}
            </DataWrapper>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaregiverPage;
