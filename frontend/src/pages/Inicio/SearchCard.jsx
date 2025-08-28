import React from "react";

const SearchCard = () => {
  return (
    <div className="card search-card">
      <div className="card-body">
        <form>
          <div className="row g-3">
            <div className="col-md-3">
              <label className="form-label">O que você precisa?</label>
              <select className="form-select">
                <option>Hospedagem</option>
                <option>Creche</option>
                <option>Passeio</option>
                <option>Visita</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Onde?</label>
              <input type="text" className="form-control" placeholder="Cidade ou bairro" />
            </div>
            <div className="col-md-2">
              <label className="form-label">Check-in</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-2">
              <label className="form-label">Check-out</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-2 d-flex align-items-end">
              <button className="btn btn-primary w-100">Buscar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchCard;
