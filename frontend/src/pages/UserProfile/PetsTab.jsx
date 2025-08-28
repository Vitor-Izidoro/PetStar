import React from "react";

const PetsTab = ({ user }) => {
  if(user.role !== "dono") return null;

  return (
    <div className="tab-pane fade show active">
      <div className="d-flex justify-content-between align-items-center mb-4 mt-4">
        <h4>Meus Pets</h4>
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addPetModal">
          <i className="fas fa-plus me-2"></i>Adicionar Pet
        </button>
      </div>

      <div className="row">
        {user.pets.map((pet, idx) => (
          <div className="col-md-6 mb-4" key={idx}>
            <div className="pet-card">
              <img src={pet.image} className="card-img-top" alt={pet.name} />
              <div className="card-body">
                <h5 className="card-title">{pet.name}</h5>
                <p className="card-text">{pet.breed} • {pet.age} anos • {pet.gender}</p>
                <div className="d-flex justify-content-between">
                  <a href="#" className="btn btn-outline-primary btn-sm">Editar</a>
                  <a href="#" className="btn btn-outline-secondary btn-sm">Ver Perfil</a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-md-6 mb-4">
          <div className="add-pet-card" data-bs-toggle="modal" data-bs-target="#addPetModal">
            <i className="fas fa-plus-circle mb-3" style={{ fontSize: "3rem" }}></i>
            <h5>Adicionar Pet</h5>
            <p className="text-center text-muted">Clique para adicionar um novo pet ao seu perfil</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetsTab;
