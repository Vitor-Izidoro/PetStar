import React, { useState, useEffect } from "react";
import { FaPlusCircle, FaSpinner, FaInbox } from "react-icons/fa";
import Modal from "../../components/Modal";
import PetProfile from "./PetProfile";
import PetForm from "./PetForm";
import DataWrapper from "../../components/DataWrapper"; // import do wrapper
import petsMock from "../../data/mockData/pets";

export default function PetList() {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  // Simula carregamento de pets
  useEffect(() => {
    setTimeout(() => {
      setPets(petsMock);
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleSavePet = (newPet) => {
    if (newPet.id) {
      setPets(pets.map((p) => (p.id === newPet.id ? newPet : p)));
    } else {
      newPet.id = pets.length + 1;
      setPets([...pets, newPet]);
    }
    setFormOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        {!isLoading && (
          <>
            <h4 className="text-2xl font-bold">Meus Pets</h4>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
              onClick={() => {
                setSelectedPet(null);
                setFormOpen(true);
              }}
            >
              <FaPlusCircle className="mr-2" /> Adicionar Pet
            </button>
          </>
        )}
      </div>

      <DataWrapper
        isLoading={isLoading}
        data={pets}
        emptyTitle="Nenhum pet encontrado"
        LoadingTitle="Carregando pets..."
        emptyDescription="Parece que você ainda não adicionou nenhum pet."
        onEmptyAction={() => setFormOpen(true)}
        EmptyIcon={<FaInbox size={50} className="text-indigo-400 animate-bounce-slow" />}
        LoadingIcon={<FaSpinner size={50} className="text-indigo-400 animate-spin-slow" />}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {pets.map((pet) => (
            <div
              key={pet.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img src={pet.img} alt={pet.name} className="w-full h-40 object-cover" />
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

          {/* Card Adicionar Pet */}
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
      </DataWrapper>

      {/* Modal Perfil */}
      <Modal isOpen={isProfileOpen} onClose={() => setProfileOpen(false)}>
        {selectedPet && <PetProfile pet={selectedPet} />}
      </Modal>

      {/* Modal Form */}
      <Modal isOpen={isFormOpen} onClose={() => setFormOpen(false)}>
        <PetForm pet={selectedPet} onSave={handleSavePet} />
      </Modal>
    </div>
  );
}
