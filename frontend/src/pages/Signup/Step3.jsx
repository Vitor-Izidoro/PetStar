import React from "react";

const Step3 = ({ formData, setFormData, prevStep }) => {
  const selectRole = role => setFormData({ ...formData, role });

  return (
    <div className="step-container">
      <h4 className="mb-4">Você é?</h4>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className={`card text-center h-100 ${formData.role === "owner" ? "border-primary" : ""}`}>
            <div className="card-body">
              <i className="fas fa-user fa-3x text-primary mb-3"></i>
              <h5>Dono de Pet</h5>
              <p>Busco cuidadores para meu animal de estimação</p>
              <button className="btn btn-outline-primary" onClick={() => selectRole("owner")}>
                Selecionar
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className={`card text-center h-100 ${formData.role === "host" ? "border-primary" : ""}`}>
            <div className="card-body">
              <i className="fas fa-home fa-3x text-primary mb-3"></i>
              <h5>Anfitrião</h5>
              <p>Quero cuidar de pets e gerar renda extra</p>
              <button className="btn btn-outline-primary" onClick={() => selectRole("host")}>
                Selecionar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-outline-secondary" onClick={() => prevStep(2)}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default Step3;
