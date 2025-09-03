import api from "./baseApi";

// GET /pets?owner_id=...
export const getPets = async (owner_id) => {
  const res = await api.get("/pets", { params: { owner_id } });
  return res.data;
};

export const getPet = async (id) => {
  const res = await api.get(`/pets/${id}`);
  return res.data;
};

export const createPet = async (pet) => {
  const res = await api.post("/pets", pet);
  return res.data;
};

export const updatePet = async (id, pet) => {
  const res = await api.put(`/pets/${id}`, pet);
  return res.data;
};

export const deletePet = async (id) => {
  const res = await api.delete(`/pets/${id}`);
  return res.data;
};
