import React from "react";

const ReservaPendente = ({ reserva }) => {
  return (
    <div className="container mt-4 mb-5">
      <div className="alert alert-warning text-center">
        <i className="fas fa-hourglass-half me-2"></i> Sua solicitação de reserva para{" "}
        <strong>{reserva.anfitriao}</strong> ainda está pendente. Aguarde a confirmação.
      </div>
    </div>
  );
};

export default ReservaPendente;
