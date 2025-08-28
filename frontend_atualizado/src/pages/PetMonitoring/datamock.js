// Simulação de usuário logado
  export const currentUser = {
    id: 1,
    role: "owner", // troque para "caregiver" para testar
    name: "Ricardo",
  };

  // Lista de monitoramentos
  export const monitoringsMock = [
    {
      id: 1,
      pet: {
        name: "Rex",
        species: "Cachorro",
        breed: "Labrador",
        age: "3 anos",
        status: "Em andamento",
        image:
          "https://placedog.net/500/280?id=1", // imagem fictícia
      },
      caregiver: {
        id: 2,
        name: "Maria Silva",
        role: "caregiver",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
      },
      reservation: {
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
        title: "Passeio no parque",
        time: "09:00",
        description: "Levei o Rex para passear e brincar na grama.",
        image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      },
      {
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
        name: "Mimi",
        species: "Gato",
        breed: "Persa",
        age: "2 anos",
        status: "Confirmado",
        image:
          "https://placekitten.com/500/280", // imagem fictícia
      },
      caregiver: {
        id: 3,
        name: "João Pedro",
        role: "caregiver",
      },
      owner: {
        id: 1,
        name: "Ricardo",
        role: "owner",
      },
      period: "20/08 - 25/08",
    },
  ];