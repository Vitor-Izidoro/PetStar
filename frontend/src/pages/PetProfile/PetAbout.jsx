import React from "react";

const PetAbout = ({ description }) => {
  return (
    <div className="col-md-6 mb-4">
      <h4 className="mb-3">Sobre</h4>
      {description.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
};

export default PetAbout;
