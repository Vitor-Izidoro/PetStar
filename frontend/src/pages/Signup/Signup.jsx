import React, { useState } from "react";
import StepIndicator from "./StepIndicator";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
    role: ""
  });

  const nextStep = step => setCurrentStep(step);
  const prevStep = step => setCurrentStep(step);

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h2><i className="fas fa-paw me-2"></i>PetStar</h2>
          <p className="mb-0">Crie sua conta</p>
        </div>
        <div className="signup-body">
          <StepIndicator currentStep={currentStep} />
          {currentStep === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
          {currentStep === 2 && <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
          {currentStep === 3 && <Step3 formData={formData} setFormData={setFormData} prevStep={prevStep} />}
          <div className="signup-footer">
            <p>Já tem uma conta? <a href="login.html">Faça login</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
