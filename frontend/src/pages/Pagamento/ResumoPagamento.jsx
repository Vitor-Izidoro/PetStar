import React from "react";

const ResumoPagamento = ({ reserva }) => (
  <div className="card payment-card mb-4">
    <div className="card-header">Resumo do Pagamento</div>
    <div className="card-body">
      <div className="price-detail">
        <span>{reserva.duracao} noites x R$ {reserva.valorNoite}</span>
        <span>R$ {reserva.valorNoite * reserva.duracao}</span>
      </div>
      <div className="price-detail">
        <span>Taxa de serviço</span>
        <span>R$ {reserva.taxaServico}</span>
      </div>
      <div className="price-detail">
        <span>Taxa de limpeza</span>
        <span>R$ {reserva.taxaLimpeza}</span>
      </div>
      <div className="price-total">
        <span>Total</span>
        <span>R$ {reserva.valorTotal}</span>
      </div>

      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" id="termsCheck" />
        <label className="form-check-label" htmlFor="termsCheck">
          Concordo com os <a href="#">Termos de Serviço</a> e <a href="#">Política de Cancelamento</a>
        </label>
      </div>

      <button className="btn btn-primary w-100">Confirmar Pagamento</button>

      <p className="text-center mt-3 small text-muted">
        <i className="fas fa-lock me-2"></i>Seus dados estão protegidos
      </p>
    </div>
  </div>
);

export default ResumoPagamento;
