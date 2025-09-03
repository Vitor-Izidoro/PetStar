import React from "react";
import InputField from "../../components/Form/InputField";

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
      <InputField
        label="Localização"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Cidade ou bairro"
      />

      {/* Serviço */}
      <InputField
        label="Tipo de serviço"
        type="select"
        value={service}
        onChange={(e) => setService(e.target.value)}
        options={[
          { value: "Todos", label: "Todos os serviços" },
          { value: "Hospedagem", label: "Hospedagem" },
          { value: "Creche", label: "Creche" },
          { value: "Passeio", label: "Passeio" },
          { value: "Visita", label: "Visita" },
        ]}
      />

      {/* Preço */}
      <InputField
        label="Preço por noite"
        type="range"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        min={0}
        max={100}
        step={5}
      />

      {/* Avaliação */}
      <InputField
        label="Avaliação mínima"
        type="select"
        value={minRating}
        onChange={(e) => setMinRating(Number(e.target.value))}
        options={[
          { value: 0, label: "Qualquer avaliação" },
          { value: 3, label: "3.0+ ★" },
          { value: 3.5, label: "3.5+ ★" },
          { value: 4, label: "4.0+ ★" },
          { value: 4.5, label: "4.5+ ★" },
        ]}
      />

      {/* Tipo de pet */}
      <InputField
        label="Tipo de pet"
        type="checkboxGroup"
        options={[
          { value: "Cachorros", label: "Cachorros" },
          { value: "Gatos", label: "Gatos" },
          { value: "Outros", label: "Outros" },
        ]}
        selectedValues={petTypes}
        toggleArrayValue={(arr, val) => toggleArrayValue(arr, val, setPetTypes)}
      />

      {/* Características */}
      <InputField
        label="Características"
        type="checkboxGroup"
        options={[
          { value: "Quintal", label: "Quintal" },
          { value: "Experiência veterinária", label: "Experiência veterinária" },
          { value: "Administra medicamentos", label: "Administra medicamentos" },
        ]}
        selectedValues={features}
        toggleArrayValue={(arr, val) => toggleArrayValue(arr, val, setFeatures)}
      />
    </aside>
  );
};

export default FiltersCaregiversList;
