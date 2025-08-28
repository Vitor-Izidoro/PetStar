import React from "react";

const PetCare = ({ cares }) => {
  return (
    <div className="col-md-6 mb-4">
      <h4 className="mb-3">Cuidados especiais</h4>
      <ul className="icon-list">
        {cares.map((care, index) => (
          <li key={index}>
            <i className={`fas ${care.icon} me-2`}></i> {care.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetCare;
