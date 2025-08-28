import React from "react";
import { useParams } from "react-router-dom";
import ProfileTimeline from "./ProfileTimeLine";
import ReservationDetails from "./ReservationDetails";
import DailyReport from "./DailyReport";
import {currentUser, monitoringsMock} from "./datamock"

export default function PetMonitoring() {
  const { id } = useParams();
  const monitoring = monitoringsMock.find((m) => m.id === parseInt(id));

  if (!monitoring) {
    return <div className="text-center mt-10">Monitoramento não encontrado.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      <div className="container mx-auto mt-4 mb-10 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3">
            <ProfileTimeline
              pet={monitoring.pet}
              owner={monitoring.owner}
              caregiver={monitoring.caregiver}
              timeline={monitoring.timeline}
              currentUser={currentUser}
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