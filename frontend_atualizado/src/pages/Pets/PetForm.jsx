import React, { useState } from "react";

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
      name, breed, age, gender, weight, size, about, care, img, gallery
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
  const removeGallery = (index) => setGallery(gallery.filter((_, i) => i !== index));

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
      <h3 className="text-xl font-semibold mb-4">{pet ? "Editar Pet" : "Adicionar Pet"}</h3>

      {/* Nome */}
      <div>
        <label className="block text-sm font-medium mb-1">Nome</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg" required />
      </div>

      {/* Raça */}
      <div>
        <label className="block text-sm font-medium mb-1">Raça</label>
        <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg" required />
      </div>

      {/* Idade */}
      <div>
        <label className="block text-sm font-medium mb-1">Idade</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg" required />
      </div>

      {/* Sexo */}
      <div>
        <label className="block text-sm font-medium mb-1">Sexo</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg" required>
          <option value="">Selecione</option>
          <option value="Macho">Macho</option>
          <option value="Fêmea">Fêmea</option>
        </select>
      </div>

      {/* Peso */}
      <div>
        <label className="block text-sm font-medium mb-1">Peso (kg)</label>
        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg" />
      </div>

      {/* Porte */}
      <div>
        <label className="block text-sm font-medium mb-1">Porte</label>
        <input type="text" value={size} onChange={(e) => setSize(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg" />
      </div>

      {/* Sobre */}
      <div>
        <label className="block text-sm font-medium mb-1">Sobre</label>
        <textarea value={about} onChange={(e) => setAbout(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg" rows="3" />
      </div>

      {/* Cuidados especiais */}
      <div>
        <label className="block text-sm font-medium mb-2">Cuidados especiais</label>
        {care.map((c, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              type="text"
              value={c}
              onChange={(e) => handleCareChange(i, e.target.value)}
              className="flex-1 border px-3 py-2 rounded-lg"
            />
            <button type="button" className="text-red-500" onClick={() => removeCare(i)}>✕</button>
          </div>
        ))}
        <button type="button" className="text-blue-600 text-sm" onClick={addCare}>
          + Adicionar cuidado
        </button>
      </div>

      {/* Imagem principal */}
      <div>
        <label className="block text-sm font-medium mb-1">Imagem principal (URL)</label>
        <input type="text" value={img} onChange={(e) => setImg(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg" />
      </div>

      {/* Galeria */}
      <div>
        <label className="block text-sm font-medium mb-2">Galeria de imagens (URLs)</label>
        {gallery.map((g, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              type="text"
              value={g}
              onChange={(e) => handleGalleryChange(i, e.target.value)}
              className="flex-1 border px-3 py-2 rounded-lg"
            />
            <button type="button" className="text-red-500" onClick={() => removeGallery(i)}>✕</button>
          </div>
        ))}
        <button type="button" className="text-blue-600 text-sm" onClick={addGallery}>
          + Adicionar imagem
        </button>
      </div>

        <button type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Salvar
        </button>
    </form>
  );
}
