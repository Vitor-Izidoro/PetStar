export const monitoringsMock = [
  {
    id: 1,
    pet: {
      id: 1,
      name: "Rex",
      species: "Cachorro",
      breed: "Labrador",
      age: "3 anos",
      status: "Em andamento",
      image: "https://placedog.net/500/280?id=1",
    },
    caregiver: {
      id: 2,
      name: "Maria Silva",
      role: "caregiver",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
    },
    reservation: {
      id: 1,
      service: "Hospedagem",
      checkin: "25/08/2025",
      checkout: "30/08/2025",
      location: "São Paulo, SP",
      total: "250,00"
    },
    owner: {
      id: 1,
      name: "Ricardo",
      role: "owner",
    },
    period: "10/08 - 15/08",
    timeline: [
      {
        id: 1,
        title: "Passeio no parque",
        time: "09:00",
        description: "Levei o Rex para passear e brincar na grama.",
        image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 2,
        title: "Alimentação",
        time: "12:00",
        description: "Rex comeu toda a refeição e tomou bastante água.",
      }
    ],
    dailyReport: {
      food: "Ração premium - 2 porções",
      water: "1,5L consumidos",
      exercise: "Passeio de 30min",
      behavior: "Alegre e brincalhão",
      medications: "Nenhum"
    }
  },
  {
    id: 2,
    pet: {
      id: 2,
      name: "Mimi",
      species: "Gato",
      breed: "Persa",
      age: "2 anos",
      status: "Confirmado",
      image: "https://placekitten.com/500/280",
    },
    caregiver: {
      id: 3,
      name: "João Pedro",
      role: "caregiver",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 4.5,
    },
    reservation: {
      id: 2,
      service: "Visita Domiciliar",
      checkin: "20/08/2025",
      checkout: "25/08/2025",
      location: "Rio de Janeiro, RJ",
      total: "180,00"
    },
    owner: {
      id: 1,
      name: "Ricardo",
      role: "owner",
    },
    period: "20/08 - 25/08",
    timeline: [],
    dailyReport: {
      food: "Ração especial - 3 porções",
      water: "1L consumido",
      exercise: "Brinquedos interativos",
      behavior: "Calmo e carinhoso",
      medications: "Nenhum"
    }
  },
];

export default monitoringsMock;