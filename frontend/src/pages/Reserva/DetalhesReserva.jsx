import React from "react";

const DetalhesReserva = ({ reserva }) => (
  <>
    <h4 className="mb-4">Detalhes da reserva</h4>
    {Object.entries({
      Anfitrião: reserva.anfitriao,
      Serviço: reserva.servico,
      "Check-in": reserva.checkin,
      "Check-out": reserva.checkout,
      Duração: reserva.duracao,
      Pet: reserva.pet,
      Total: reserva.total,
    }).map(([label, value]) => (
      <div key={label} className="d-flex justify-content-between border-bottom pb-2 mb-2">
        <span>{label}:</span>
        <span className={label === "Total" ? "fw-bold" : ""}>{value}</span>
      </div>
    ))}
  </>
);

export default DetalhesReserva;
