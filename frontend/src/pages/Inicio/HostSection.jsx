import React from "react";

const hosts = [
  {
    name: "Ana Silva",
    rating: "4.9 ★",
    location: "Vila Madalena, São Paulo",
    desc: "Adoro animais e tenho um quintal grande para brincadeiras. Experiência com cães de porte médio e grande.",
    price: "A partir de R$ 40/noite",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
  },
  {
    name: "Carlos Oliveira",
    rating: "4.8 ★",
    location: "Jardins, São Paulo",
    desc: "Veterinário aposentado com experiência com cães idosos e com necessidades especiais. Casa com espaço seguro.",
    price: "A partir de R$ 45/noite",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Marina Costa",
    rating: "5.0 ★",
    location: "Pinheiros, São Paulo",
    desc: "Apartamento pet friendly com área de recreação exclusiva. Adoro gatos e tenho experiência com administração de medicamentos.",
    price: "A partir de R$ 50/noite",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&q=80",
  },
];

const HostsSection = () => {
  return (
    <section className="section-padding hosts-section">
      <div className="container">
        <h2 className="section-title">Anfitriões em destaque</h2>
        <div className="row">
          {hosts.map((host, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card host-card">
                <img src={host.img} className="card-img-top" alt={`Anfitrião ${host.name}`} />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 className="host-name mb-0">{host.name}</h4>
                    <span className="rating-badge">{host.rating}</span>
                  </div>
                  <span className="host-location"><i className="fas fa-map-marker-alt me-2"></i>{host.location}</span>
                  <p className="host-description">{host.desc}</p>
                  <p className="host-price">{host.price}</p>
                  <a href="#" className="btn btn-primary w-100">Ver perfil</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="#" className="btn btn-outline-primary btn-lg">Ver todos os anfitriões</a>
        </div>
      </div>
    </section>
  );
};

export default HostsSection;
