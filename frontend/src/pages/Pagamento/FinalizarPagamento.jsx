import React from "react";
import DetalhesReserva from "./DetalhesReserva";
import MetodoPagamento from "./MetodoPagamento";
import ResumoPagamento from "./ResumoPagamento";
import PoliticaCancelamento from "./PoliticaCancelamento";

const FinalizarPagamento = ({ reserva }) => {
  return (
    <div className="container mt-4 mb-5">
      <div className="row">
        {/* Coluna Principal */}
        <div className="col-lg-8">
          <div className="card profile-card mb-4">
            <div className="card-body">
              <h2 className="section-title">Finalizar Pagamento</h2>
              <p className="text-muted mb-4">
                Confirme os detalhes da sua reserva e finalize o pagamento
              </p>

              <DetalhesReserva reserva={reserva} />
              <MetodoPagamento valor={reserva.valorTotal} />
            </div>
          </div>
        </div>

        {/* Coluna Lateral */}
        <div className="col-lg-4">
          <ResumoPagamento reserva={reserva} />
          <PoliticaCancelamento />
        </div>
      </div>
    </div>
  );
};

export default FinalizarPagamento;
