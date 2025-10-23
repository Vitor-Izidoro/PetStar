import React, { useState } from "react";
import { FaPlus, FaTimes, FaPaw, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import InputField from "../../components/Form/InputField"; // ajuste o caminho conforme necessário

export default function PetForm({ pet }) {
  // Informações básicas
  const [name, setName] = useState(pet?.name || "");
  const [breed, setBreed] = useState(pet?.breed || "");
  const [age, setAge] = useState(pet?.age || "");
  const [gender, setGender] = useState(pet?.gender || "");
  const [weight, setWeight] = useState(pet?.weight || "");
  const [size, setSize] = useState(pet?.size || "");
  const [about, setAbout] = useState(pet?.about || "");
  const [care, setCare] = useState(pet?.care || [""]);

  // Imagens
  const [imgFile, setImgFile] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);

  // Mensagem de feedback
  const [message, setMessage] = useState({ type: "", text: "" });

  // Submissão
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificação dos campos obrigatórios
    if (!name || !breed || !age || !size) {
      setMessage({
        type: "error",
        text: "Preencha todos os campos obrigatórios (*).",
      });
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("breed", breed);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("weight", weight);
    formData.append("size", size);
    formData.append("about", about);
    care.forEach((c, i) => formData.append(`care[${i}]`, c));
    if (imgFile) formData.append("img", imgFile);
    galleryFiles.forEach((file, i) => {
      if (file) formData.append(`gallery[${i}]`, file);
    });

    console.log("FormData enviado:", formData);

    setMessage({
      type: "success",
      text: "Pet salvo com sucesso!",
    });
  };

  // Cuidados
  const handleCareChange = (index, value) => {
    const newCare = [...care];
    newCare[index] = value;
    setCare(newCare);
  };
  const addCare = () => setCare([...care, ""]);
  const removeCare = (index) => setCare(care.filter((_, i) => i !== index));

  // Imagem principal
  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) setImgFile(file);
  };

  // Galeria
  const handleGalleryChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const newGallery = [...galleryFiles];
      newGallery[index] = file;
      setGalleryFiles(newGallery);
    }
  };
  const addGallery = () => setGalleryFiles([...galleryFiles, null]);
  const removeGallery = (index) => setGalleryFiles(galleryFiles.filter((_, i) => i !== index));

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-h-[80vh] overflow-y-auto pr-2 bg-white p-6 rounded-2xl shadow-lg"
    >
      <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <FaPaw className="text-blue-600" />
        {pet ? "Editar Pet" : "Adicionar Pet"}
      </h3>

      {/* Mensagem de feedback */}
      {message.text && (
        <div
          className={`p-4 rounded-lg flex items-center gap-2 ${
            message.type === "success"
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {message.type === "success" ? <FaCheckCircle /> : <FaExclamationTriangle />}
          <span>{message.text}</span>
        </div>
      )}

      {/* Imagem principal */}
      <div className="flex flex-col items-center">
        {imgFile ? (
          <img
            src={URL.createObjectURL(imgFile)}
            alt="Imagem principal"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow"
          />
        ) : (
          <div className="w-32 h-32 rounded-full border-4 border-gray-200 shadow flex items-center justify-center text-gray-400">
            <FaPaw size={40} />
          </div>
        )}
        <InputField
          label="Selecionar imagem principal"
          type="file"
          accept="image/*"
          onChange={handleImgChange}
        />
      </div>

      {/* Informações básicas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField label="Nome*" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <InputField label="Raça*" type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
        <InputField label="Idade*" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        <InputField
          label="Sexo"
          type="select"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          options={[
            { value: "", label: "Selecione" },
            { value: "Macho", label: "Macho" },
            { value: "Fêmea", label: "Fêmea" },
          ]}
        />
        <InputField label="Peso (kg)" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <InputField label="Porte*" type="text" value={size} onChange={(e) => setSize(e.target.value)} />
      </div>

      {/* Sobre */}
      <InputField
        label="Sobre"
        type="textarea"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        placeholder="Escreva algo sobre o pet"
      />

      {/* Cuidados */}
      <div>
        <label className="block text-sm font-medium mb-2">Cuidados especiais</label>
        {care.map((c, i) => (
          <div key={i} className="flex gap-2 mb-2 items-center">
            <InputField
              type="text"
              value={c}
              onChange={(e) => handleCareChange(i, e.target.value)}
              placeholder="Ex: Necessita de medicação diária"
            />
            <button type="button" className="text-red-500 hover:text-red-700" onClick={() => removeCare(i)}>
              <FaTimes />
            </button>
          </div>
        ))}
        <button type="button" className="text-blue-600 text-sm flex items-center gap-1" onClick={addCare}>
          <FaPlus /> Adicionar cuidado
        </button>
      </div>

      {/* Galeria */}
      <div>
        <label className="block text-sm font-medium mb-2">Galeria de imagens</label>
        <div className="grid grid-cols-3 gap-3">
          {galleryFiles.map((file, i) => (
            <div key={i} className="relative">
              {file ? (
                <img
                  src={URL.createObjectURL(file)}
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
              <InputField
                type="file"
                accept="image/*"
                onChange={(e) => handleGalleryChange(i, e)}
              />
            </div>
          ))}
        </div>
        <button type="button" className="mt-2 text-blue-600 text-sm flex items-center gap-1" onClick={addGallery}>
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
