import React from "react";

const ReservasTab = ({ user }) => {
  return (
    <div className="tab-pane fade show active">
      <h4 className="mt-4">{user.role === "dono" ? "Minhas Reservas" : "Reservas Recebidas"}</h4>

      {user.reservas.map((reserva, idx) => (
        <div className="card mb-3" key={idx}>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h5>{user.role === "dono" ? reserva.servico + " com " + reserva.anfitriao : reserva.servico + " para " + reserva.petOwner}</h5>
                <p className="text-muted">{reserva.dataInicio} - {reserva.dataFim} • {reserva.duracao}</p>
                <span className={`badge ${reserva.status === "confirmada" ? "bg-success" : reserva.status === "pendente" ? "bg-warning" : "bg-danger"}`}>
                  {reserva.status.charAt(0).toUpperCase() + reserva.status.slice(1)}
                </span>
              </div>
              <div className="text-end">
                <p className="fw-bold">R$ {reserva.preco}</p>
                <a href="#" className="btn btn-outline-primary btn-sm me-2">Detalhes</a>
                {user.role === "dono" && reserva.status === "concluida" && <a href="#" className="btn btn-outline-secondary btn-sm">Avaliar</a>}
              </div>
            </div>
          </div>
        </div>
      ))}

      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1">Anterior</a>
          </li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Próxima</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ReservasTab;
