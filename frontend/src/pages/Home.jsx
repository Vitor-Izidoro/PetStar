import React, { useState } from "react";
import Cuidadores from "./Cuidadores";

const Home = () => {
  const [section, setSection] = useState("hero"); // controla qual seção exibir

  const renderContent = () => {
    switch (section) {
      case "inicio":
        return <Inicio />;
      case "Cuidadores":
        return <Cuidadores />;
      case "hosts":
        return <Hosts />;
      case "depoimentos":
        return <Depoimentos />;
      default:
        return <Hero />;
    }
  };

  return (
    <main className="section-padding">
      <div className="container">
        {/* Botões de navegação entre seções */}
        <div className="text-center mb-4">
          <button onClick={() => setSection("inicio")} className="btn btn-outline-primary me-2">Hero</button>
          <button onClick={() => setSection("Cuidadores")} className="btn btn-outline-primary me-2">Como Funciona</button>
          <button onClick={() => setSection("para_anfitrioes")} className="btn btn-outline-primary me-2">Anfitriões</button>
          <button onClick={() => setSection("ajuda")} className="btn btn-outline-primary">Depoimentos</button>
        </div>

        {/* Aqui troca o conteúdo */}
        {renderContent()}
      </div>
    </main>
  );
};

export default Home;
