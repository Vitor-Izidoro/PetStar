import React, { useState } from "react";
import StepIndicator from "../../../components/StepIndicator";
import Step1PersonalInfo from "./Step1PersonalInfo";
import Step2Address from "./Step2Address";
import Step3Access from "./Step3Access";
import Step4UserType from "./Step4UserType";

const Signup = () => {
  const [step, setStep] = useState(1);
  const stepLabels = ["Personal Info", "Address", "Access", "User Type"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white text-center py-6 px-4">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
            PetStar
          </h2>
          <p className="mt-1 text-sm opacity-90">Crie sua conta</p>
        </div>

        {/* Body */}
        <div className="p-6">
          <StepIndicator title={""} currentStep={step} stepLabels={stepLabels} />

          {step === 1 && <Step1PersonalInfo next={() => setStep(2)} />}
          {step === 2 && <Step2Address next={() => setStep(3)} back={() => setStep(1)} />}
          {step === 3 && <Step3Access next={() => setStep(4)} back={() => setStep(2)} />}
          {step === 4 && <Step4UserType back={() => setStep(3)} />}
        </div>
      </div>
    </div>
  );
};

export default Signup;
