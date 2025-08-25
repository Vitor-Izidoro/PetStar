import React from "react";

const Step1 = ({ formData, setFormData, nextStep }) => {
  return (
    <div className="step-container active">
      <h4 className="mb-4">Informações Pessoais</h4>
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Nome</label>
              <input
                type="text"
                className="form-control"
                placeholder="Seu nome"
                value={formData.firstName}
                onChange={e => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Sobrenome</label>
              <input
                type="text"
                className="form-control"
                placeholder="Seu sobrenome"
                value={formData.lastName}
                onChange={e => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">E-mail</label>
          <input
            type="email"
            className="form-control"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Telefone</label>
          <input
            type="tel"
            className="form-control"
            placeholder="(11) 99999-9999"
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-primary" onClick={() => nextStep(2)}>
            Próximo
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
