import React, { useState } from "react";
import { FaPlus, FaTimes, FaPaw } from "react-icons/fa";

export default function PetForm({ pet }) {
  const [name, setName] = useState(pet?.name || "");
  const [breed, setBreed] = useState(pet?.breed || "");
  const [age, setAge] = useState(pet?.age || "");
  const [gender, setGender] = useState(pet?.gender || "");
  const [weight, setWeight] = useState(pet?.weight || "");
  const [size, setSize] = useState(pet?.size || "");
  const [about, setAbout] = useState(pet?.about || "");
  const [care, setCare] = useState(pet?.care || [""]);
  const [img, setImg] = useState(pet?.img || "");
  const [gallery, setGallery] = useState(pet?.gallery || [""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      breed,
      age,
      gender,
      weight,
      size,
      about,
      care,
      img,
      gallery,
    });
    alert("Pet salvo com sucesso!");
  };

  const handleCareChange = (index, value) => {
    const newCare = [...care];
    newCare[index] = value;
    setCare(newCare);
  };

  const addCare = () => setCare([...care, ""]);
  const removeCare = (index) => setCare(care.filter((_, i) => i !== index));

  const handleGalleryChange = (index, value) => {
    const newGallery = [...gallery];
    newGallery[index] = value;
    setGallery(newGallery);
  };

  const addGallery = () => setGallery([...gallery, ""]);
  const removeGallery = (index) =>
    setGallery(gallery.filter((_, i) => i !== index));

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-h-[80vh] overflow-y-auto pr-2 bg-white p-6 rounded-2xl shadow-lg"
    >
      <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <FaPaw className="text-blue-600" />
        {pet ? "Editar Pet" : "Adicionar Pet"}
      </h3>

      {/* Imagem principal */}
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <img
            src={
              img ||
              "https://cdn-icons-png.flaticon.com/512/616/616408.png"
            }
            alt="Avatar Pet"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow"
          />
          <label className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full cursor-pointer shadow hover:bg-blue-700">
            <FaPlus />
            <input
              type="text"
              placeholder="URL da imagem"
              className="hidden"
              onChange={(e) => setImg(e.target.value)}
            />
          </label>
        </div>
        <p className="text-sm text-gray-500 mt-2">Foto principal</p>
        <input
          type="text"
          placeholder="URL da imagem principal"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className="mt-2 w-full border px-3 py-2 rounded-lg text-sm"
        />
      </div>

      {/* Informações básicas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Raça</label>
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Idade</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Sexo</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Selecione</option>
            <option value="Macho">Macho</option>
            <option value="Fêmea">Fêmea</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Peso (kg)</label>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Porte</label>
          <input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Sobre */}
      <div>
        <label className="block text-sm font-medium mb-1">Sobre</label>
        <textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          rows="3"
        />
      </div>

      {/* Cuidados */}
      <div>
        <label className="block text-sm font-medium mb-2">Cuidados especiais</label>
        {care.map((c, i) => (
          <div key={i} className="flex gap-2 mb-2 items-center">
            <input
              type="text"
              value={c}
              onChange={(e) => handleCareChange(i, e.target.value)}
              className="flex-1 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              className="text-red-500 hover:text-red-700"
              onClick={() => removeCare(i)}
            >
              <FaTimes />
            </button>
          </div>
        ))}
        <button
          type="button"
          className="text-blue-600 text-sm flex items-center gap-1"
          onClick={addCare}
        >
          <FaPlus /> Adicionar cuidado
        </button>
      </div>

      {/* Galeria */}
      <div>
        <label className="block text-sm font-medium mb-2">Galeria de imagens</label>
        <div className="grid grid-cols-3 gap-3">
          {gallery.map((g, i) => (
            <div key={i} className="relative">
              {g ? (
                <img
                  src={g}
                  alt={`Galeria ${i + 1}`}
                  className="w-full h-24 object-cover rounded-lg border"
                />
              ) : (
                <div className="w-full h-24 flex items-center justify-center border rounded-lg text-gray-400">
                  <FaPaw />
                </div>
              )}
              <button
                type="button"
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                onClick={() => removeGallery(i)}
              >
                <FaTimes size={12} />
              </button>
              <input
                type="text"
                value={g}
                placeholder="URL da imagem"
                onChange={(e) => handleGalleryChange(i, e.target.value)}
                className="w-full mt-1 border px-2 py-1 text-xs rounded-lg"
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="mt-2 text-blue-600 text-sm flex items-center gap-1"
          onClick={addGallery}
        >
          <FaPlus /> Adicionar imagem
        </button>
      </div>

      {/* Botão final */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
