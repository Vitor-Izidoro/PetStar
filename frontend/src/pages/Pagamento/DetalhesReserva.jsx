import React from "react";

const DetalhesReserva = ({ reserva }) => (
  <div className="card mb-4">
    <div className="card-header bg-light">
      <h5 className="mb-0">Detalhes da Reserva</h5>
    </div>
    <div className="card-body">
      <div className="row">
        <div className="col-md-6">
          <p><strong>Anfitrião:</strong> {reserva.anfitriao}</p>
          <p><strong>Serviço:</strong> {reserva.servico}</p>
          <p><strong>Check-in:</strong> {reserva.checkin}</p>
        </div>
        <div className="col-md-6">
          <p><strong>Pet:</strong> {reserva.pet}</p>
          <p><strong>Check-out:</strong> {reserva.checkout}</p>
          <p><strong>Duração:</strong> {reserva.duracao}</p>
        </div>
      </div>
    </div>
  </div>
);

export default DetalhesReserva;
