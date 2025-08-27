import React from "react";

const StepIndicator = ({ title, currentStep, stepLabels }) => {
  const totalSteps = stepLabels.length;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-indigo-700">{title}</h1>
        <span className="text-sm text-gray-500">
          Etapa {currentStep} de {totalSteps}
        </span>
      </div>

      <div className="flex items-center justify-between">
        {stepLabels.map((label, index) => {
          const step = index + 1;
          const isCompleted = currentStep > step;
          const isActive = currentStep === step;

          return (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center relative">
                {/* Círculo do passo */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center relative z-10 ${
                    isActive
                      ? "bg-indigo-600 text-white border-2 border-indigo-600"
                      : isCompleted
                      ? "bg-green-500 text-white border-2 border-green-500"
                      : "bg-white text-gray-400 border-2 border-gray-300"
                  }`}
                >
                  {isCompleted ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    step
                  )}
                </div>

                {/* Texto do passo */}
                <span
                  className={`mt-2 text-xs text-center ${
                    isActive ? "text-indigo-600 font-medium" : isCompleted ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  {label}
                </span>
              </div>

              {/* Linha entre passos */}
              {step < totalSteps && (
                <div className={`flex-1 h-1 mx-1 ${isCompleted ? "bg-green-500" : "bg-gray-300"}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
