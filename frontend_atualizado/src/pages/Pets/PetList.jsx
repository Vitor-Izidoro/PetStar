import React, { useState } from "react";
import { FaPlus, FaPlusCircle } from "react-icons/fa";
import Modal from "../../components/Modal";
import PetProfile from "./PetProfile";
import PetForm from "./PetForm";

export default function PetList() {
  const [pets, setPets] = useState([
    {
      id: 1,
      name: "Thor",
      breed: "Golden Retriever",
      age: "3 anos",
      gender: "Macho",
      weight: "32 kg",
      size: "Porte grande",
      about:
        "Thor é um golden retriever muito brincalhão e amigável. Adora correr em parques, nadar e brincar de buscar a bolinha.",
      care: [
        "Alimentação: Ração Premium 2x ao dia",
        "Remédio para pulgas mensalmente",
        "Precisa de 2 passeios longos por dia",
        "Não pode comer chocolate",
      ],
      img: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=662&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=662&q=80",
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=764&q=80",
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=735&q=80",
        "https://images.unsplash.com/photo-1593134257782-e89567b7718a?auto=format&fit=crop&w=735&q=80",
      ],
    },
    {
      id: 2,
      name: "Luna",
      breed: "SRD",
      age: "5 anos",
      gender: "Fêmea",
      weight: "8 kg",
      size: "Porte pequeno",
      about:
        "Luna é uma gatinha muito carinhosa, adora colo e longas sonecas no sofá. É independente mas sempre pede carinho.",
      care: ["Ração seca à vontade", "Água fresca sempre disponível"],
      img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=843&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=843&q=80",
        "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=764&q=80",
      ],
    },
  ]);

  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const handleSavePet = (newPet) => {
    if (newPet.id) {
      // Edição
      setPets(pets.map((p) => (p.id === newPet.id ? newPet : p)));
    } else {
      // Novo
      newPet.id = pets.length + 1;
      setPets([...pets, newPet]);
    }
    setFormOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-lg font-semibold">Meus Pets</h4>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
          onClick={() => {
            setSelectedPet(null);
            setFormOpen(true);
          }}
        >
          <FaPlus className="mr-2" /> Adicionar Pet
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="bg-gray-50 rounded-xl overflow-hidden shadow"
          >
            <img
              src={pet.img}
              alt={pet.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h5 className="font-semibold">{pet.name}</h5>
              <p className="text-gray-500 text-sm">
                {pet.breed} • {pet.age} • {pet.gender}
              </p>
              <div className="flex justify-between mt-3">
                <button
                  className="border border-blue-600 text-blue-600 px-3 py-1 rounded-lg text-sm hover:bg-blue-50"
                  onClick={() => {
                    setSelectedPet(pet);
                    setFormOpen(true);
                  }}
                >
                  Editar
                </button>
                <button
                  className="border border-gray-400 text-gray-600 px-3 py-1 rounded-lg text-sm hover:bg-gray-100"
                  onClick={() => {
                    setSelectedPet(pet);
                    setProfileOpen(true);
                  }}
                >
                  Ver Perfil
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Card para adicionar pet */}
        <div
          className="bg-white border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-gray-50"
          onClick={() => {
            setSelectedPet(null);
            setFormOpen(true);
          }}
        >
          <FaPlusCircle className="text-4xl text-blue-600 mb-2" />
          <h5 className="font-semibold">Adicionar Pet</h5>
          <p className="text-gray-500 text-center text-sm">
            Clique para adicionar um novo pet ao seu perfil
          </p>
        </div>
      </div>

      {/* Modal Perfil */}
      <Modal isOpen={isProfileOpen} onClose={() => setProfileOpen(false)}>
        {selectedPet && <PetProfile pet={selectedPet} />}
      </Modal>

      {/* Modal Form */}
      <Modal isOpen={isFormOpen} onClose={() => setFormOpen(false)}>
        <PetForm pet={selectedPet} onSave={handleSavePet} />
      </Modal>
    </>
  );
}
