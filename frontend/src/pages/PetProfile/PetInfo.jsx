import React from "react";

const PetInfo = ({ gender, weight, size }) => {
  return (
    <div className="pet-info">
      <div className="pet-info-item">
        <i className="fas fa-venus-mars me-2"></i> {gender}
      </div>
      <div className="pet-info-item">
        <i className="fas fa-weight me-2"></i> {weight}
      </div>
      <div className="pet-info-item">
        <i className="fas fa-ruler me-2"></i> {size}
      </div>
    </div>
  );
};

export default PetInfo;
