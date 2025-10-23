// Simulação de usuário logado
export const currentUser = {
  id: 1,
  role: "owner", // troque para " " para testar
  name: "Ricardo",
  email: "ricardo@email.com",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  phone: "(11) 99999-9999",
  location: "São Paulo, SP"
};

// Lista de usuários do sistema
export const users = [
  currentUser,
  {
    id: 2,
    role: "caregiver",
    name: "Maria Silva",
    email: "maria@email.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    phone: "(11) 98888-8888",
    location: "São Paulo, SP"
  },
  {
    id: 3,
    role: "caregiver",
    name: "João Pedro",
    email: "joao@email.com",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    phone: "(11) 97777-7777",
    location: "Rio de Janeiro, RJ"
  }
];

export default users;