import React, { useState } from "react";
import PetsTab from "./PetsTab";
import ReservasTab from "./ReservasTab";
import AvaliacoesTab from "./AvaliacoesTab";
import ConfiguracoesTab from "./ConfiguracoesTab";

const TabsPerfil = ({ user }) => {
  const [activeTab, setActiveTab] = useState("pets");

  const renderTabContent = () => {
    switch (activeTab) {
      case "pets":
        return <PetsTab user={user} />;
      case "bookings":
        return <ReservasTab user={user} />;
      case "reviews":
        return <AvaliacoesTab user={user} />;
      case "settings":
        return <ConfiguracoesTab user={user} />;
      default:
        return null;
    }
  };

  return (
    <>
      <ul className="nav nav-tabs" role="tablist">
        {user.role === "dono" && (
          <li className="nav-item">
            <button className={`nav-link ${activeTab==="pets"?"active":""}`} onClick={() => setActiveTab("pets")}>Meus Pets</button>
          </li>
        )}
        <li className="nav-item">
          <button className={`nav-link ${activeTab==="bookings"?"active":""}`} onClick={() => setActiveTab("bookings")}>Minhas Reservas</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab==="reviews"?"active":""}`} onClick={() => setActiveTab("reviews")}>Avaliações</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab==="settings"?"active":""}`} onClick={() => setActiveTab("settings")}>Configurações</button>
        </li>
      </ul>

      <div className="tab-content">
        {renderTabContent()}
      </div>
    </>
  );
};

export default TabsPerfil;
