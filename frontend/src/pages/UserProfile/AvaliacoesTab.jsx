import React from "react";

const AvaliacoesTab = ({ user }) => {
  return (
    <div className="tab-pane fade show active">
      <h4 className="mt-4">{user.role === "dono" ? "Minhas Avaliações" : "Avaliações Recebidas"}</h4>

      {user.avaliacoes.map((avaliacao, idx) => (
        <div className="card mb-3" key={idx}>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">{avaliacao.nome}</h5>
              <div className="rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star${i + 0.5 < avaliacao.rating ? "" : "-half-alt"}`}
                  ></i>
                ))}
              </div>
            </div>
            <p className="text-muted">Postado em {avaliacao.data}</p>
            <p>{avaliacao.comentario}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvaliacoesTab;
