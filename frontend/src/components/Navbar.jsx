import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          <i className="fas fa-paw text-primary me-2"></i>PetStar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Como funciona</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Para Donos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Para Anfitriões</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ajuda</a>
            </li>
          </ul>
          <div className="d-flex">
            <a href="#" className="btn btn-outline-primary me-2">Entrar</a>
            <a href="#" className="btn btn-primary">Cadastrar</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
