import React from "react";

const features = [
  { icon: "fas fa-search", title: "1. Busque", text: "Encontre anfitriões perto de você com base nas suas necessidades" },
  { icon: "fas fa-calendar-check", title: "2. Reserve", text: "Entre em contato, combine os detalhes e faça a reserva online" },
  { icon: "fas fa-heart", title: "3. Aproveite", text: "Deixe seu pet em boas mãos e receba atualizações durante a estadia" },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="section-title">Como funciona o PetStar</h2>
        <div className="row">
          {features.map((f, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="feature-card">
                <div className="feature-icon"><i className={f.icon}></i></div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-text">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
