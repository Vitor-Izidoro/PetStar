import React from "react";

const ProximosPassos = ({ passos }) => (
  <>
    <h4 className="mb-4">Próximos passos</h4>
    <ul className="icon-list">
      {passos.map((passo, index) => (
        <li key={index}>
          <i className={passo.icon}></i> {passo.text}
        </li>
      ))}
    </ul>
  </>
);

export default ProximosPassos;
