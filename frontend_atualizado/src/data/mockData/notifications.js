export const notificationsMock = [
  {
    id: 1,
    title: "Nova reserva recebida",
    message: "Cliente solicitou hospedagem para Rex.",
    type: "reservation",
    isRead: false,
    date: "2025-08-25 07:30",
    petName: "Rex",
    clientName: "João",
    link: "/reservas/1"
  },
  {
    id: 2,
    title: "Mensagem de Ana Silva",
    message: "Ana comentou sobre a última visita do Thor.",
    type: "message",
    isRead: false,
    date: "2025-08-25 10:15",
    senderName: "Ana Silva",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 3,
    title: "Reserva finalizada",
    message: "O cuidado de Mimi terminou com sucesso.",
    type: "reservation",
    isRead: false,
    date: "2025-08-24 18:00",
    petName: "Mimi",
    completedBy: "Lucas"
  },
  {
    id: 4,
    title: "Lembrete de vacinação",
    message: "Thor está com a vacina V10 atrasada.",
    type: "reminder",
    isRead: true,
    date: "2025-08-23 09:00",
    petName: "Thor",
    reminderType: "vaccine"
  },
  {
    id: 5,
    title: "Avaliação recebida",
    message: "João avaliou seu serviço com 5 estrelas!",
    type: "review",
    isRead: true,
    date: "2025-08-22 14:30",
    clientName: "João",
    rating: 5
  }
];

export default notificationsMock;