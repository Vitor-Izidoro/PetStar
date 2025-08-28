import React from "react";

const FiltersCaregiversList = ({
  location,
  setLocation,
  service,
  setService,
  maxPrice,
  setMaxPrice,
  minRating,
  setMinRating,
  petTypes,
  setPetTypes,
  features,
  setFeatures,
  toggleArrayValue,
}) => {
  return (
    <aside className="lg:col-span-1 bg-white rounded-xl shadow p-6 h-fit">
      <h5 className="font-bold text-gray-800 mb-4">Filtros</h5>

      {/* Localização */}
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

      {/* Serviço */}
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

      {/* Preço */}
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

      {/* Avaliação */}
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

      {/* Tipo de pet */}
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

      {/* Características */}
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
  );
};

export default FiltersCaregiversList;
