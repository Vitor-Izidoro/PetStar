import React, { useState } from "react";
import { Link } from "react-router-dom";

const hosts = [
  {
    id: "1",
    name: "Ana Silva",
    rating: 4.9,
    location: "Vila Madalena, São Paulo",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=688&q=80",
    features: ["Quintal", "Cães grandes", "Experiente"],
    description:
      "Adoro animais e tenho um quintal grande para brincadeiras. Experiência com cães de porte médio e grande.",
    price: 40,
    services: ["Hospedagem"],
    pets: ["Cachorros"],
  },
  {
    id: "2",
    name: "Carlos Oliveira",
    rating: 4.8,
    location: "Jardins, São Paulo",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=687&q=80",
    features: ["Veterinário", "Idosos", "Medicamentos"],
    description:
      "Veterinário aposentado com experiência com cães idosos e com necessidades especiais. Casa com espaço seguro.",
    price: 45,
    services: ["Hospedagem", "Creche", "Passeio"],
    pets: ["Cachorros"],
  },
  {
    id: "3",
    name: "Marina Costa",
    rating: 5.0,
    location: "Pinheiros, São Paulo",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=761&q=80",
    features: ["Gatos", "Apartamento", "Medicamentos"],
    description:
      "Apartamento pet friendly com área de recreação exclusiva. Adoro gatos e tenho experiência com administração de medicamentos.",
    price: 50,
    services: ["Creche", "Visita"],
    pets: ["Gatos"],
  },
  {
    id: "4",
    name: "Roberto Alves",
    rating: 4.7,
    location: "Moema, São Paulo",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=687&q=80",
    features: ["Passeios", "Creche", "Ativo"],
    description:
      "Adoro passear com cães e tenho disponibilidade para creche durante o dia. Espaço amplo e seguro para brincadeiras.",
    price: 35,
    services: ["Creche", "Passeio"],
    pets: ["Cachorros"],
  },
];

const Cuidadores = () => {
  const [location, setLocation] = useState("");
  const [service, setService] = useState("Todos");
  const [maxPrice, setMaxPrice] = useState(100);
  const [minRating, setMinRating] = useState(0);
  const [petTypes, setPetTypes] = useState([]);
  const [features, setFeatures] = useState([]);

  const toggleArrayValue = (arr, value, setter) => {
    if (arr.includes(value)) {
      setter(arr.filter((v) => v !== value));
    } else {
      setter([...arr, value]);
    }
  };

  const filteredHosts = hosts.filter((host) => {
    // Localização
    if (location && !host.location.toLowerCase().includes(location.toLowerCase()))
      return false;

    // Serviço
    if (service !== "Todos" && !host.services.includes(service)) return false;

    // Preço
    if (host.price > maxPrice) return false;

    // Avaliação
    if (host.rating < minRating) return false;

    // Tipo de pet
    if (petTypes.length > 0 && !petTypes.some((p) => host.pets.includes(p))) return false;

    // Features
    if (features.length > 0 && !features.every((f) => host.features.includes(f)))
      return false;

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto mt-8 mb-12 px-4 grid lg:grid-cols-4 gap-8">
        {/* Filtros */}
        <aside className="lg:col-span-1 bg-white rounded-xl shadow p-6 h-fit">
          <h5 className="font-bold text-gray-800 mb-4">Filtros</h5>

          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-1">Localização</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Cidade ou bairro"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-1">Tipo de serviço</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="Todos">Todos os serviços</option>
              <option value="Hospedagem">Hospedagem</option>
              <option value="Creche">Creche</option>
              <option value="Passeio">Passeio</option>
              <option value="Visita">Visita</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-1">Preço por noite</label>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>R$ 0</span>
              <span>R$ {maxPrice}+</span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-1">Avaliação mínima</label>
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value={0}>Qualquer avaliação</option>
              <option value={3}>3.0+ ★</option>
              <option value={3.5}>3.5+ ★</option>
              <option value={4}>4.0+ ★</option>
              <option value={4.5}>4.5+ ★</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-1">Tipo de pet</label>
            <div className="space-y-2">
              {["Cachorros", "Gatos", "Outros"].map((pet) => (
                <label key={pet} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={petTypes.includes(pet)}
                    onChange={() => toggleArrayValue(petTypes, pet, setPetTypes)}
                  />
                  {pet}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-1">Características</label>
            <div className="space-y-2">
              {["Quintal", "Experiência veterinária", "Administra medicamentos"].map(
                (feat) => (
                  <label key={feat} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={features.includes(feat)}
                      onChange={() => toggleArrayValue(features, feat, setFeatures)}
                    />
                    {feat}
                  </label>
                )
              )}
            </div>
          </div>
        </aside>

        {/* Resultados */}
        <section className="lg:col-span-3">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <span className="font-semibold text-gray-800">
              {filteredHosts.length} anfitriões encontrados
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredHosts.map((host) => (
              <div
                key={host.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
              >
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
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cuidadores;
