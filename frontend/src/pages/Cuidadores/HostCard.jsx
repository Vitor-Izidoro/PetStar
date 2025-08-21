import React from "react";

const HostCard = ({ img, name, rating, location, features, description, price }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card host-card h-100">
        <img src={img} className="card-img-top" alt={`Anfitrião ${name}`} />
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h4 className="host-name mb-0">{name}</h4>
            <span className="rating-badge">{rating} ★</span>
          </div>
          <span className="host-location">
            <i className="fas fa-map-marker-alt me-2"></i>
            {location}
          </span>

          <div className="host-features my-2">
            {features.map((f, i) => (
              <span key={i} className="feature-badge me-1">
                {f}
              </span>
            ))}
          </div>

          <p className="host-description">{description}</p>
          <p className="host-price">R$ {price}/noite</p>
          <a href="perfil-cuidador.html" className="btn btn-primary w-100">
            Ver perfil
          </a>
        </div>
      </div>
    </div>
  );
};

export default HostCard;
