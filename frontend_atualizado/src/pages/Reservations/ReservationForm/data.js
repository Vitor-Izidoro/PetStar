// components/ReservaForm/data.js

export const userPets = [
  { id: 1, name: "Rex", breed: "Labrador", age: "3 anos", image: "https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { id: 2, name: "Luna", breed: "Golden Retriever", age: "2 anos", image: "https://images.unsplash.com/photo-1583337130417-3346a1b33c4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { id: 3, name: "Thor", breed: "Bulldog", age: "4 anos", image: "https://images.unsplash.com/photo-1525253013412-55c1a69a5738?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
];

export const availableServices = [
  { id: "banho", name: "Banho e Tosa", price: 35 },
  { id: "adestramento", name: "Sessão de Adestramento", price: 50 },
  { id: "foto", name: "Sessão de Fotos", price: 40 },
  { id: "brinquedo", name: "Brinquedo Personalizado", price: 20 },
];

export const servicePriceMap = {
  "Hospedagem - R$ 40/noite": 40,
  "Creche - R$ 30/dia": 30,
  "Passeio - R$ 25/passeio": 25,
};

export const transportPriceMap = {
  "levar-buscar": 0,
  "buscar-only": 15,
  "levar-only": 15,
  "buscar-levar": 30,
};
