import React from "react";
import SearchCard from "./SearchCard";

const CuidadorSection = () => {
  return (
    <section className="hero-section">
      <div className="container text-center">
        <h1 className="hero-title">Cuidador de pets com todo cuidado que seu animal merece</h1>
        <p className="hero-subtitle">Encontre anfitriões confiáveis para hospedar seu pet com amor</p>
        <div className="row justify-content-center mt-4">
          <div className="col-lg-10">
            <SearchCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuidadorSection;
