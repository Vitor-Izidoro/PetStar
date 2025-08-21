import React from "react";
import HostCard from "./HostCard";
import Filters from "./Filters";

const Cuidadores = () => {
    const hosts = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=688&q=80",
      name: "Ana Silva",
      rating: "4.9",
      location: "Vila Madalena, São Paulo",
      features: ["Quintal", "Cães grandes", "Experiente"],
      description: "Adoro animais e tenho um quintal grande para brincadeiras. Experiência com cães de porte médio e grande.",
      price: 40,
    },
    {
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=687&q=80",
      name: "Carlos Oliveira",
      rating: "4.8",
      location: "Jardins, São Paulo",
      features: ["Veterinário", "Idosos", "Medicamentos"],
      description: "Veterinário aposentado com experiência com cães idosos e com necessidades especiais. Casa com espaço seguro.",
      price: 45,
    },
    {
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=761&q=80",
      name: "Marina Costa",
      rating: "5.0",
      location: "Pinheiros, São Paulo",
      features: ["Gatos", "Apartamento", "Medicamentos"],
      description: "Apartamento pet friendly com área de recreação exclusiva. Adoro gatos e tenho experiência com administração de medicamentos.",
      price: 50,
    },
    {
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=687&q=80",
      name: "Roberto Alves",
      rating: "4.7",
      location: "Moema, São Paulo",
      features: ["Passeios", "Creche", "Ativo"],
      description: "Adoro passear com cães e tenho disponibilidade para creche durante o dia. Espaço amplo e seguro para brincadeiras.",
      price: 35,
    },
  ];
  
  return (
    <div className="container mt-4 mb-5">
      <div className="row">
        {/* Coluna lateral de filtros */}
        <div className="col-lg-3">
          <Filters />
        </div>

        {/* Coluna principal de resultados */}
        <div className="col-lg-9">
          <div className="results-header d-flex justify-content-between align-items-center mb-3">
            <div className="results-count">
              {hosts.length} anfitriões encontrados
            </div>
            <div>
              <label className="form-label me-2">Ordenar por:</label>
              <select className="form-select sort-select">
                <option>Recomendados</option>
                <option>Melhor avaliados</option>
                <option>Preço: menor primeiro</option>
                <option>Preço: maior primeiro</option>
              </select>
            </div>
          </div>

          <div className="row">
            {hosts.map((host, i) => (
              <HostCard key={i} {...host} />
            ))}
          </div>

          {/* Paginação */}
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link" href="#">Anterior</a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Próximo</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Cuidadores;
