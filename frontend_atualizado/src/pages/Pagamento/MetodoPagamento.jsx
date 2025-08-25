import React, { useState } from "react";

const MetodoPagamento = ({ valor }) => {
  const [metodo, setMetodo] = useState("cartao");

  return (
    <div className="card payment-card mb-4">
      <div className="card-header">Método de Pagamento</div>
      <div className="card-body">
        <ul className="nav nav-pills mb-4">
          <li className="nav-item">
            <button
              className={`nav-link ${metodo === "cartao" ? "active" : ""}`}
              onClick={() => setMetodo("cartao")}
            >
              <i className="far fa-credit-card me-2"></i>Cartão de Crédito
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${metodo === "pix" ? "active" : ""}`}
              onClick={() => setMetodo("pix")}
            >
              <i className="fas fa-qrcode me-2"></i>PIX
            </button>
          </li>
        </ul>

        {metodo === "cartao" ? (
          <form>
            <div className="row">
              <div className="col-12 mb-3">
                <label className="form-label">Número do Cartão</label>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="1234 5678 9012 3456" />
                  <span className="input-group-text">
                    <i className="far fa-credit-card"></i>
                  </span>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Nome no Cartão</label>
                <input type="text" className="form-control" placeholder="LAURA MENDES" />
              </div>
              <div className="col-md-3 mb-3">
                <label className="form-label">Validade</label>
                <input type="text" className="form-control" placeholder="MM/AA" />
              </div>
              <div className="col-md-3 mb-3">
                <label className="form-label">CVV</label>
                <input type="text" className="form-control" placeholder="123" />
              </div>
              <div className="col-12 mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="saveCard" />
                  <label className="form-check-label" htmlFor="saveCard">
                    Salvar informações do cartão para pagamentos futuros
                  </label>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PETSTAR1234567890`}
              alt="QR Code PIX"
              className="img-fluid mb-3"
              style={{ maxWidth: "200px" }}
            />
            <p className="text-muted">Escaneie o QR Code com seu app bancário para pagar via PIX</p>
            <p><strong>Valor: R$ {valor}</strong></p>
            <p className="text-muted small">Pagamento válido por 30 minutos</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetodoPagamento;
