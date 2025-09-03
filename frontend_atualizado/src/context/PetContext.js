import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../api/baseApi"; // axios com baseURL configurada

const PetContext = createContext();

export const PetProvider = ({ children, ownerId }) => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Buscar pets do backend, filtrando por owner_id
  const fetchPets = async () => {
    try {
      const res = await api.get("/pets", {
        params: { owner_id: ownerId }, // envia como query
      });
      setPets(res.data);
    } catch (error) {
      console.error("Erro ao buscar pets:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (ownerId) {
      fetchPets();
    }
  }, [ownerId]);

  // Criar pet
  const addPet = async (pet) => {
    try {
      const res = await api.post("/pets", { ...pet, owner_id: ownerId });
      setPets((prev) => [...prev, res.data]);
    } catch (error) {
      console.error("Erro ao adicionar pet:", error);
    }
  };

  // Atualizar pet
  const updatePet = async (pet) => {
    try {
      const res = await api.put(`/pets/${pet.id}`, pet);
      setPets((prev) => prev.map((p) => (p.id === pet.id ? res.data : p)));
    } catch (error) {
      console.error("Erro ao atualizar pet:", error);
    }
  };

  // Deletar pet
  const deletePet = async (id) => {
    try {
      await api.delete(`/pets/${id}`);
      setPets((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Erro ao deletar pet:", error);
    }
  };

  return (
    <PetContext.Provider
      value={{ pets, isLoading, addPet, updatePet, deletePet, fetchPets }}
    >
      {children}
    </PetContext.Provider>
  );
};

// Hook para usar o contexto
export const usePets = () => useContext(PetContext);
