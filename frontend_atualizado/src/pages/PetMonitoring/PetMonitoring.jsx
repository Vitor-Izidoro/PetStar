import React from "react";
import Navbar from "../../components/Navbar";
import ProfileTimeline from "./ProfileTimeLine";
import ReservationDetails from "./ReservationDetails";
import DailyReport from "./DailyReport";
import Footer from "../../components/Footer";

export default function PetMonitoring() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      <Navbar />
      <div className="container mx-auto mt-4 mb-10 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3">
            <ProfileTimeline />
          </div>
          <div className="lg:w-1/3 flex flex-col gap-6">
            <ReservationDetails />
            <DailyReport />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
