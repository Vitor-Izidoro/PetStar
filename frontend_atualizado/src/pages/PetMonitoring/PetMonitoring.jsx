import React from "react";
import { useParams } from "react-router-dom";
import ProfileTimeline from "./ProfileTimeLine";
import ReservationDetails from "./ReservationDetails";
import DailyReport from "./DailyReport";

// Dados de exemplo (normalmente viriam de uma API)
const monitorings = [
  {
    id: 1,
    pet: {
      name: "Rex",
      breed: "Vira-lata",
      age: "2 anos",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1b33c4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      status: "Em andamento",
    },
    caregiver: {
      name: "Laura Mendes",
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
  // ... outros monitoramentos
];

export default function PetMonitoring() {
  const { id } = useParams();
  const monitoring = monitorings.find((m) => m.id === parseInt(id));

  if (!monitoring) {
    return <div className="text-center mt-10">Monitoramento não encontrado.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      <div className="container mx-auto mt-4 mb-10 px-4 lg:px-0">
        <h2 className="text-2xl font-bold mb-6">
          Ficha de {monitoring.pet.name}
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3">
            <ProfileTimeline
              pet={monitoring.pet}
              caregiver={monitoring.caregiver}
              timeline={monitoring.timeline}
            />
          </div>
          <div className="lg:w-1/3 flex flex-col gap-6">
            <ReservationDetails reservation={monitoring.reservation} />
            <DailyReport report={monitoring.dailyReport} />
          </div>
        </div>
      </div>
    </div>
  );
}