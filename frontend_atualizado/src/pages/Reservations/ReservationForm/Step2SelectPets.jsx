import { useState } from "react";

const Step2SelectPets = ({ userPets, selectedPets, setSelectedPets, setStep }) => {
  const [error, setError] = useState("");

  const handlePetSelection = (petId) => {
    setError(""); // sempre limpa erro antes

    if (selectedPets.includes(petId)) {
      setSelectedPets(selectedPets.filter((id) => id !== petId));
    } else {
      setSelectedPets([...selectedPets, petId]);
    }
  };

  const handleNext = () => {
    if (selectedPets.length === 0) {
      setError("Selecione pelo menos um pet para continuar.");
      return;
    }
    setStep(3);
  };

  return (
    <>
      <div>
        <label className="block text-sm font-medium mb-2">Selecione seus pets</label>
        <div className="space-y-2">
          {userPets.map((pet) => (
            <div
              key={pet.id}
              className={`p-3 border rounded-lg cursor-pointer transition-all ${
                selectedPets.includes(pet.id)
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-300 hover:border-indigo-400"
              }`}
              onClick={() => handlePetSelection(pet.id)}
            >
              <div className="flex items-center">
                <div
                  className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                    selectedPets.includes(pet.id)
                      ? "bg-indigo-600 border-indigo-600"
                      : "border-gray-400"
                  }`}
                >
                  {selectedPets.includes(pet.id) && (
                    <span className="text-white text-xs">✓</span>
                  )}
                </div>
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-medium">{pet.name}</div>
                  <div className="text-sm text-gray-600">
                    {pet.breed} • {pet.age}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mostra mensagem de erro se tiver */}
      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

      <div className="flex gap-2 mt-3">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="w-1/2 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50"
        >
          Voltar
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="w-1/2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500"
        >
          Próximo
        </button>
      </div>
    </>
  );
};

export default Step2SelectPets;
