import React, { useState } from "react";
import StepIndicator from "../../../components/StepIndicator";
import MainServicesStep from "./MainServicesStep";
import AdditionalServicesStep from "./AdditionalServicesStep";
import TransportStep from "./TransportStep";
import AvailabilityStep from "./AvailabilityStep";
import GeneralSettingsStep from "./GeneralSettingsStep";

const ServiceSettings = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const stepLabels = ["Serviços", "Extras", "Transporte", "Disponibilidade", "Configurações"];
  const totalSteps = stepLabels.length;

  // Estados para configuração dos serviços
  const [services, setServices] = useState([
    { id: 1, name: "Hospedagem", description: "Hospedagem para pets em minha residência", basePrice: 40, priceType: "noite", enabled: true },
    { id: 2, name: "Creche", description: "Cuidados diários para pets", basePrice: 30, priceType: "dia", enabled: true },
    { id: 3, name: "Passeio", description: "Passeios com pets na região", basePrice: 25, priceType: "passeio", enabled: true }
  ]);

  const [additionalServices, setAdditionalServices] = useState([
    { id: 1, name: "Banho e Tosa", description: "Banho completo e tosa higiênica", price: 35, enabled: true },
    { id: 2, name: "Sessão de Adestramento", description: "Sessão básica de obediência", price: 50, enabled: true },
    { id: 3, name: "Sessão de Fotos", description: "Fotos profissionais do pet", price: 40, enabled: false },
    { id: 4, name: "Brinquedo Personalizado", description: "Brinquedo especial para o pet", price: 20, enabled: true }
  ]);

  const [transportOptions, setTransportOptions] = useState([
    { id: "levar-buscar", name: "Cliente leva e busca", description: "O cliente é responsável pelo transporte", price: 0, enabled: true },
    { id: "buscar-only", name: "Buscar pet", description: "Busco o pet no endereço do cliente", price: 15, enabled: true },
    { id: "levar-only", name: "Levar pet", description: "Levo o pet de volta para o cliente", price: 15, enabled: true },
    { id: "buscar-levar", name: "Buscar e levar", description: "Busco e levo o pet", price: 30, enabled: true }
  ]);

  const [availability, setAvailability] = useState({
    days: [
      { day: "Segunda", available: true, startTime: "08:00", endTime: "18:00" },
      { day: "Terça", available: true, startTime: "08:00", endTime: "18:00" },
      { day: "Quarta", available: true, startTime: "08:00", endTime: "18:00" },
      { day: "Quinta", available: true, startTime: "08:00", endTime: "18:00" },
      { day: "Sexta", available: true, startTime: "08:00", endTime: "18:00" },
      { day: "Sábado", available: false, startTime: "08:00", endTime: "18:00" },
      { day: "Domingo", available: false, startTime: "08:00", endTime: "18:00" }
    ],
    maxPets: 3,
    sameSpeciesOnly: false,
    acceptAggressivePets: false
  });

  const [serviceSettings, setServiceSettings] = useState({
    taxRate: 20,
    cancellationPolicy: "flexible",
    requireVaccinationRecords: true,
    bookingNotice: 24,
  });

  // Navegação entre etapas
  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Renderização condicional baseada na etapa atual
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <MainServicesStep services={services} setServices={setServices} />;
      case 2:
        return <AdditionalServicesStep additionalServices={additionalServices} setAdditionalServices={setAdditionalServices} />;
      case 3:
        return <TransportStep transportOptions={transportOptions} setTransportOptions={setTransportOptions} />;
      case 4:
        return <AvailabilityStep availability={availability} setAvailability={setAvailability} />;
      case 5:
        return <GeneralSettingsStep serviceSettings={serviceSettings} setServiceSettings={setServiceSettings} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <StepIndicator title={"Configuração de Serviços"} currentStep={currentStep} stepLabels={stepLabels} />

      {renderCurrentStep()}

      {/* Navegação entre etapas */}
      <div className="flex justify-between mt-8">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`px-6 py-2 rounded-lg ${currentStep === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
          Anterior
        </button>

        {currentStep < totalSteps ? (
          <button onClick={nextStep} className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-500">
            Próximo
          </button>
        ) : (
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500">
            Salvar Configurações
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceSettings;
