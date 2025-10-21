import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFilter, FaInbox, FaSpinner, FaMapMarkerAlt, FaStar } from "react-icons/fa";

// ===============================================
// 1. DADOS MOCKADOS (Substitui 'hostsData')
// ===============================================
const hostsData = [
  {
    id: 1,
    name: "Ana Silva",
    location: "São Paulo, SP",
    rating: 4.8,
    price: 85,
    description: "Amante de pets com uma casa espaçosa e quintal seguro.",
    services: ["Hospedagem", "Creche"],
    pets: ["Cachorro", "Gato"],
    features: ["Casa com Quintal", "Experiência"],
    img: "https://via.placeholder.com/400x224?text=Cuidador+Ana"
  },
  {
    id: 2,
    name: "Bruno Costa",
    location: "Rio de Janeiro, RJ",
    rating: 4.5,
    price: 60,
    description: "Ofereço longas caminhadas diárias e muito carinho.",
    services: ["Passeio", "Creche"],
    pets: ["Cachorro"],
    features: ["Longas Caminhadas", "Primeiros Socorros"],
    img: "https://via.placeholder.com/400x224?text=Cuidador+Bruno"
  },
  {
    id: 3,
    name: "Carla Pires",
    location: "São Paulo, SP",
    rating: 5.0,
    price: 110,
    description: "Especialista em gatos e pets com necessidades especiais.",
    services: ["Hospedagem"],
    pets: ["Gato"],
    features: ["Acomodações Especiais", "Medicação"],
    img: "https://via.placeholder.com/400x224?text=Cuidador+Carla"
  },
];

// ===============================================
// 2. COMPONENTE CaregiverCard (Inlined)
// ===============================================
const CaregiverCard = ({ host }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      <img src={host.img} alt={host.name} className="h-56 w-full object-cover" /> {/* */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-bold">{host.name}</h4> {/* */}
          <span className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
            <FaStar className="w-3 h-3"/> {host.rating} {/* */}
          </span>
        </div>
        <span className="text-indigo-600 font-medium mb-2 flex items-center gap-1">
            <FaMapMarkerAlt className="w-4 h-4"/> {host.location} {/* */}
        </span>
        <div className="flex flex-wrap gap-2 mb-3">
          {host.features.map((f) => ( //
            <span
              key={f}
              className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs"
            >
              {f}
            </span>
          ))}
        </div>
        <p className="text-gray-600 text-sm mb-3 flex-1 line-clamp-2">{host.description}</p> {/* */}
        <p className="text-orange-500 font-bold mb-4">R$ {host.price}/noite</p> {/* */}

        <Link
          to={`/perfil-cuidador/${host.id}`}
          state={{ host }}
          className="block text-center bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700 transition"
        >
          Ver perfil
        </Link>
      </div>
    </div>
  );
};

// ===============================================
// 3. COMPONENTE DataWrapper (Mocked)
// Gerencia os estados de Loading e Empty,
// conforme o arquivo original sugere.
// ===============================================
const DataWrapper = ({ isLoading, data, emptyTitle, LoadingTitle, emptyDescription, EmptyIcon, LoadingIcon, children }) => {
    if (isLoading) {
        return (
            <div className="p-8 text-center col-span-full">
                {LoadingIcon}
                <h3 className="mt-2 text-lg font-medium text-indigo-700">{LoadingTitle}</h3>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="p-8 text-center border-2 border-dashed border-gray-300 rounded-lg col-span-full">
                {EmptyIcon}
                <h3 className="mt-2 text-lg font-medium text-gray-900">{emptyTitle}</h3>
                <p className="mt-1 text-sm text-gray-500">{emptyDescription}</p>
                {/* O onEmptyAction do original foi omitido na mockagem */}
            </div>
        );
    }

    return children;
};

// ===============================================
// 4. COMPONENTE FiltersCaregiversList (Mocked)
// Exibe os filtros e usa as funções de estado do componente pai.
// ===============================================
const FiltersCaregiversList = ({ location, setLocation, service, setService, maxPrice, setMaxPrice, minRating, setMinRating, petTypes, setPetTypes, features, setFeatures, toggleArrayValue }) => {
    const availableServices = ["Todos", "Hospedagem", "Passeio", "Creche"];
    const availablePetTypes = ["Cachorro", "Gato", "Pássaro", "Roedor"];

    return (
        <aside className="p-5 bg-white rounded-xl shadow lg:col-span-1 h-fit">
            <h3 className="text-lg font-bold mb-4 border-b pb-2">Filtros de Busca</h3>

            {/* Filtro de Localização */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Localização</label>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ex: São Paulo"
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                />
            </div>

            {/* Filtro de Serviço */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Serviço</label>
                <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                >
                    {availableServices.map(s => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
            </div>

            {/* Filtro de Preço Máximo */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Preço Máximo: R$ {maxPrice}</label>
                <input
                    type="range"
                    min="10"
                    max="150"
                    step="5"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer"
                />
            </div>
            
             {/* Filtro de Tipos de Pet */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipos de Pet</label>
                <div className="flex flex-wrap gap-2">
                    {availablePetTypes.map(p => (
                        <button
                            key={p}
                            onClick={() => toggleArrayValue(petTypes, p, setPetTypes)}
                            className={`px-3 py-1 text-xs rounded-full transition ${
                                petTypes.includes(p) ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {p}
                        </button>
                    ))}
                </div>
            </div>

            {/* Omitindo outros filtros para simplificação */}
        </aside>
    );
};


// ===============================================
// 5. COMPONENTE PRINCIPAL CaregiverPage
// ===============================================
const CaregiverPage = () => {
  const [caregivers, setCaregivers] = useState([]); //
  const [openFilter, setOpenFilter] = useState(true); // Inicializado como true para mostrar filtros
  // Estados para os filtros
  const [location, setLocation] = useState(""); //
  const [service, setService] = useState("Todos"); //
  const [maxPrice, setMaxPrice] = useState(150); // Ajustado para 150 para refletir o range do mock
  const [minRating, setMinRating] = useState(0); //
  const [petTypes, setPetTypes] = useState([]); //
  const [features, setFeatures] = useState([]); //
  const [isLoading, setIsLoading] = useState(false); //

  // Função utilitária para alternar valores em arrays (usada nos filtros)
  const toggleArrayValue = (arr, value, setter) => {
    if (arr.includes(value)) setter(arr.filter((v) => v !== value)); //
    else setter([...arr, value]); //
  };

  // Simulação da busca de dados
  const fetchCaregivers = () => {
    setIsLoading(true); //
    setTimeout(() => {
      setCaregivers(hostsData);
      setIsLoading(false); //
    }, 1500);
  };

  useEffect(() => {
    fetchCaregivers(); //
  }, []);

  // Lógica de Filtragem
  const filteredHosts = caregivers.filter((host) => { //
    if (location && !host.location.toLowerCase().includes(location.toLowerCase()))
      return false; //
    if (service !== "Todos" && !host.services.includes(service)) return false; //
    if (host.price > maxPrice) return false; //
    if (host.rating < minRating) return false; //
    if (petTypes.length > 0 && !petTypes.some((p) => host.pets.includes(p))) return false; //
    if (features.length > 0 && !features.every((f) => host.features.includes(f)))
      return false; //
    return true; //
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className={`container mx-auto mt-6 px-4 ${openFilter ? "grid lg:grid-cols-4 gap-8" : "flex justify-center"}`}>
        
        {/* ======================= BARRA DE FILTROS ======================= */}
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

        {/* ======================= LISTA DE CUIDADORES ======================= */}
        <section className="lg:col-span-3">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            {!isLoading && (
              <>
              {/* Contador de Anfitriões */}
              <span className="font-semibold text-gray-800">{filteredHosts.length} anfitriões encontrados</span>
              
              {/* Botão para Abrir/Fechar Filtro */}
              <button
                onClick={() => setOpenFilter(!openFilter)}
                className={`${openFilter ? "bg-red-600 hover:bg-red-500" : "bg-indigo-600 hover:bg-indigo-500"} text-white px-5 py-2 rounded-lg flex items-center gap-2 transition`}
              >
                <FaFilter /> {openFilter ? "Fechar Filtro" : "Ajustar Filtro"} {/* */}
              </button>
              </>
            )}
            
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Wrapper de Estado (Loading / Empty) */}
            <DataWrapper
              isLoading={isLoading}
              data={filteredHosts}
              emptyTitle="Nenhum cuidador encontrado"
              LoadingTitle="Carregando cuidadores..."
              emptyDescription="Ajuste seus filtros ou tente recarregar."
              onEmptyAction={fetchCaregivers}
              EmptyIcon={<FaInbox size={50} className="text-indigo-400" />}
              LoadingIcon={<FaSpinner size={50} className="text-indigo-400 animate-spin" />}
            >
              {/* Mapeamento dos Cards */}
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