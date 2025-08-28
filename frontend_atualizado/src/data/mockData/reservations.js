import {
  FaMoneyBill,
  FaComments,
  FaStar,
  FaShare,
  FaCalendar
} from "react-icons/fa";

export const reservationsMock = [
  {
    id: 1,
    date: "15",
    month: "Abr",
    year: "2023",
    clientName: "Ana Silva",
    clientAvatar: "https://randomuser.me/api/portraits/women/32.jpg",
    clientLocation: "São Paulo, SP",
    clientId: 4,
    caregiverName: "Carlos Mendes",
    caregiverId: 2,
    service: "Hospedagem",
    duration: "3 dias",
    petName: "Rex",
    petId: 1,
    petBreed: "Golden Retriever",
    status: "pendente",
    checkIn: "15/04/2023 14:00",
    checkOut: "18/04/2023 12:00",
    total: "R$ 300,00",
    paid: false,
    location: "Rua das Flores, 123 - São Paulo, SP",
    message: "Aguardando confirmação do cuidador.",
    nextSteps: [
      {
        text: "Aguardando confirmação do cuidador",
        icon: FaMoneyBill
      },
      {
        text: "Pagamento será solicitado após confirmação",
        icon: FaComments
      }
    ]
  },
  {
    id: 2,
    date: "20",
    month: "Abr",
    year: "2023",
    clientName: "João Santos",
    clientAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
    clientLocation: "Rio de Janeiro, RJ",
    clientId: 5,
    caregiverName: "Maria Oliveira",
    caregiverId: 2,
    service: "Creche Diária",
    duration: "8 horas",
    petName: "Luna",
    petId: 2,
    petBreed: "Poodle",
    status: "confirmada",
    checkIn: "20/04/2023 08:00",
    checkOut: "20/04/2023 16:00",
    total: "R$ 120,00",
    paid: false,
    location: "Avenida Brasil, 456 - Rio de Janeiro, RJ",
    message: "Reserva confirmada! Aguarde o dia do serviço.",
    nextSteps: [
      {
        text: "Realize o pagamento para garantir sua reserva",
        icon: FaMoneyBill
      },
      {
        text: "Entre em contato com o cuidador para combinar detalhes",
        icon: FaComments
      }
    ]
  },
  {
    id: 3,
    date: "25",
    month: "Abr",
    year: "2023",
    clientName: "Marina Costa",
    clientAvatar: "https://randomuser.me/api/portraits/women/45.jpg",
    clientLocation: "Belo Horizonte, MG",
    clientId: 6,
    caregiverName: "Pedro Almeida",
    caregiverId: 3,
    service: "Passeio",
    duration: "1 hora",
    petName: "Thor",
    petId: 1,
    petBreed: "Bulldog Francês",
    status: "concluida",
    checkIn: "25/04/2023 16:00",
    checkOut: "25/04/2023 17:00",
    total: "R$ 40,00",
    paid: true,
    rating: 5,
    location: "Praça da Liberdade, 789 - Belo Horizonte, MG",
    message: "Serviço concluído com sucesso!",
    nextSteps: [
      {
        text: "Avalie o serviço prestado",
        icon: FaStar
      },
      {
        text: "Compartilhe sua experiência",
        icon: FaShare
      }
    ]
  },
  {
    id: 4,
    date: "28",
    month: "Abr",
    year: "2023",
    clientName: "Ricardo Lima",
    clientAvatar: "https://randomuser.me/api/portraits/men/65.jpg",
    clientLocation: "Porto Alegre, RS",
    clientId: 1,
    caregiverName: "Juliana Pereira",
    caregiverId: 4,
    service: "Visita Domiciliar",
    duration: "2 horas",
    petName: "Mel",
    petId: 3,
    petBreed: "SRD",
    status: "cancelada",
    checkIn: "28/04/2023 10:00",
    checkOut: "28/04/2023 12:00",
    total: "R$ 60,00",
    paid: false,
    location: "Rua dos Andradas, 321 - Porto Alegre, RS",
    message: "Reserva cancelada a pedido do cliente.",
    nextSteps: [
      {
        text: "Entre em contato para reagendar",
        icon: FaCalendar
      }
    ]
  }
];

export default reservationsMock;