import React from "react";
import DetalhesReserva from "./DetalhesReserva";
import LocalizacaoReserva from "./LocalizacaoReserva";
import ProximosPassos from "./ProximosPassos";

const Reserva = ({ reserva }) => {
  // Define título, classe do alerta, ícone e mensagem
  const statusMap = {
    confirmada: {
      titulo: "Reserva confirmada!",
      alertaClass: "alert alert-success",
      icone: "fas fa-check-circle",
      mensagem: `Solicitação enviada para ${reserva.anfitriao}. Confirmação em até 24h.`,
      showDetalhes: true,
    },
    pendente: {
      titulo: "Reserva pendente",
      alertaClass: "alert alert-warning",
      icone: "fas fa-hourglass-half",
      mensagem: `Sua solicitação para ${reserva.anfitriao} ainda está pendente. Aguarde a confirmação.`,
      showDetalhes: false,
    },
    cancelada: {
      titulo: "Reserva cancelada",
      alertaClass: "alert alert-danger",
      icone: "fas fa-times-circle",
      mensagem: `Sua reserva com ${reserva.anfitriao} foi cancelada.`,
      showDetalhes: false,
    },
  };

  const statusInfo = statusMap[reserva.status] || {};

  return (
    <div className="container mt-4 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card profile-card mb-4">
            <div className="card-body">
              <h2 className="section-title">{statusInfo.titulo}</h2>
              <div className={statusInfo.alertaClass}>
                <i className={`${statusInfo.icone} me-2`}></i>
                {statusInfo.mensagem}
              </div>

              {/* Renderiza detalhes apenas se confirmada */}
              {statusInfo.showDetalhes && (
                <div className="row mt-5">
                  <div className="col-md-6">
                    <DetalhesReserva reserva={reserva} />
                  </div>
                  <div className="col-md-6">
                    <LocalizacaoReserva localizacao={reserva.localizacao} />
                    <ProximosPassos passos={reserva.proximosPassos} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserva;
