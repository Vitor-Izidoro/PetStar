import React from "react";

const LocalizacaoReserva = ({ localizacao }) => (
  <>
    <h4 className="mb-4">Localização</h4>
    <p>
      <i className="fas fa-map-marker-alt text-primary me-2"></i>
      {localizacao.endereco}
    </p>
    <div className="ratio ratio-16x9 mb-4">
      <iframe
        src={localizacao.mapUrl}
        style={{ border: 0, borderRadius: "8px" }}
        allowFullScreen
        loading="lazy"
        title="mapa"
      ></iframe>
    </div>
  </>
);

export default LocalizacaoReserva;
