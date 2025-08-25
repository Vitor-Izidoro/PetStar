import React from "react";

const Filters = () => {
  return (
    <div className="filters-section">
      <h5 className="filter-title">Filtros</h5>

      <div className="mb-4">
        <label className="form-label">Localização</label>
        <input type="text" className="form-control" placeholder="Cidade ou bairro" />
      </div>

      <div className="mb-4">
        <label className="form-label">Tipo de serviço</label>
        <select className="form-select">
          <option>Todos os serviços</option>
          <option>Hospedagem</option>
          <option>Creche</option>
          <option>Passeio</option>
          <option>Visita</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="form-label">Preço por noite</label>
        <input type="range" className="form-range" min="0" max="100" step="10" />
        <div className="d-flex justify-content-between">
          <span>R$ 0</span>
          <span>R$ 100+</span>
        </div>
      </div>

      <div className="mb-4">
        <label className="form-label">Avaliação mínima</label>
        <select className="form-select">
          <option>Qualquer avaliação</option>
          <option>4.5+ ★</option>
          <option>4.0+ ★</option>
          <option>3.5+ ★</option>
          <option>3.0+ ★</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="form-label">Tipo de pet</label>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="dogs" />
          <label className="form-check-label" htmlFor="dogs">Cachorros</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="cats" />
          <label className="form-check-label" htmlFor="cats">Gatos</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="other" />
          <label className="form-check-label" htmlFor="other">Outros pets</label>
        </div>
      </div>

      <div className="mb-4">
        <label className="form-label">Características</label>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="yard" />
          <label className="form-check-label" htmlFor="yard">Quintal</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="experience" />
          <label className="form-check-label" htmlFor="experience">Experiência veterinária</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="medication" />
          <label className="form-check-label" htmlFor="medication">Administra medicamentos</label>
        </div>
      </div>

      <button className="btn btn-primary w-100">Aplicar Filtros</button>
    </div>
  );
};

export default Filters;
