import React from "react";

const SidebarPerfil = ({ user }) => {
  return (
    <>
      <div className="card profile-card mb-4">
        <div className="card-body text-center">
          <div className="position-relative d-inline-block mb-3">
            <img src={user.avatar} className="user-avatar" alt="Avatar" />
            <div className="edit-icon" data-bs-toggle="modal" data-bs-target="#editProfileModal">
              <i className="fas fa-pen"></i>
            </div>
          </div>
          <h3 className="profile-name">{user.name}</h3>
          <p className="text-muted mb-3">
            <i className="fas fa-map-marker-alt me-2"></i>{user.location}
          </p>

          <div className="d-flex justify-content-center mb-3">
            <div className="mx-3 text-center">
              <div className="h5 mb-0">{user.reservas.length}</div>
              <div className="text-muted small">Reservas</div>
            </div>
            {user.role === "dono" && (
              <div className="mx-3 text-center">
                <div className="h5 mb-0">{user.pets.length}</div>
                <div className="text-muted small">Pets</div>
              </div>
            )}
            {user.role === "cuidador" && (
              <div className="mx-3 text-center">
                <div className="h5 mb-0">{user.avaliacoes.length}</div>
                <div className="text-muted small">Avaliações</div>
              </div>
            )}
          </div>

          <div className="rating mb-3">
            {Array.from({ length: 5 }, (_, i) => (
              <i
                key={i}
                className={`fas fa-star${i + 0.5 < user.rating ? "" : "-half-alt"}`}
              ></i>
            ))}
            <span className="ms-2">{user.rating.toFixed(1)}</span>
          </div>

          <button className="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#editProfileModal">
            <i className="fas fa-pen me-2"></i>Editar Perfil
          </button>
        </div>
      </div>

      <div className="card profile-card mb-4">
        <div className="card-body">
          <h5 className="card-title mb-4">Informações de Contato</h5>
          <ul className="icon-list">
            <li><i className="fas fa-envelope"></i> {user.email}</li>
            <li><i className="fas fa-phone"></i> {user.phone}</li>
            <li><i className="fas fa-birthday-cake"></i> {user.birthDate}</li>
            <li><i className="fas fa-map-marker-alt"></i> {user.address}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarPerfil;
