import React from "react";

const StepIndicator = ({ currentStep }) => {
  return (
    <div className="step-indicator">
      {[1, 2, 3].map(step => (
        <div key={step} className={`step ${currentStep >= step ? "active" : ""}`}>
          {step}
          <div className="step-title">
            {step === 1 ? "Pessoais" : step === 2 ? "Acesso" : "Perfil"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
