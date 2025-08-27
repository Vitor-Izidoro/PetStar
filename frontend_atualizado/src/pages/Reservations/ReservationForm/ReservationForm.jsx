import React, { useState } from "react";
import StepIndicator from "../../../components/StepIndicator";
import Step1Reservation from "./Step1ServiceDates";
import Step2SelectPets from "./Step2SelectPets";
import Step3TransportServices from "./Step3TransportServices";
import Step4AdditionalInfo from "./Step4AdditionalInfo";
import Step5Verification from "./Step5Verification";

const ReservaForm = ({ host, onClose }) => {
  const [step, setStep] = useState(1);

  const stepLabels = ["Serviço & Datas", "Selecionar Pets", "Transporte", "Informações Extras", "Verificação"];
  const totalSteps = stepLabels.length;

  // Dados do formulário
  const [service, setService] = useState("Hospedagem - R$ 40/noite");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("18:00");
  const [selectedPets, setSelectedPets] = useState([]);
  const [transportOption, setTransportOption] = useState("levar-buscar");
  const [address, setAddress] = useState("");
  const [additionalServices, setAdditionalServices] = useState([]);
  const [emergencyContact, setEmergencyContact] = useState({ name: "", phone: "" });
  const [vetInfo, setVetInfo] = useState({ name: "", phone: "" });
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [foodInstructions, setFoodInstructions] = useState("");
  const [medicationInstructions, setMedicationInstructions] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const userPets = [
    { id: 1, name: "Rex", breed: "Labrador", age: "3 anos", image: "https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { id: 2, name: "Luna", breed: "Golden Retriever", age: "2 anos", image: "https://images.unsplash.com/photo-1583337130417-3346a1b33c4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { id: 3, name: "Thor", breed: "Bulldog", age: "4 anos", image: "https://images.unsplash.com/photo-1525253013412-55c1a69a5738?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  ];

  const availableServices = [
    { id: "banho", name: "Banho e Tosa", price: 35 },
    { id: "adestramento", name: "Sessão de Adestramento", price: 50 },
    { id: "foto", name: "Sessão de Fotos", price: 40 },
    { id: "brinquedo", name: "Brinquedo Personalizado", price: 20 },
  ];

  const servicePriceMap = {
    "Hospedagem - R$ 40/noite": 40,
    "Creche - R$ 30/dia": 30,
    "Passeio - R$ 25/passeio": 25,
  };

  const transportPriceMap = {
    "levar-buscar": 0,
    "buscar-only": 15,
    "levar-only": 15,
    "buscar-levar": 30,
  };

  const nights =
    startDate && endDate
      ? Math.max(1, Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)))
      : 1;

  const additionalServicesCost = additionalServices.reduce((total, id) => {
    const s = availableServices.find(s => s.id === id);
    return total + (s ? s.price : 0);
  }, 0);

  const subtotal = servicePriceMap[service] * nights * (selectedPets.length || 1);
  const taxaServico = 20;
  const transportCost = transportPriceMap[transportOption] || 0;
  const total = subtotal + taxaServico + transportCost + additionalServicesCost;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const reserva = {
      host: host.name, service, startDate, endDate, startTime, endTime,
      pets: selectedPets.map(id => userPets.find(p => p.id === id)),
      transportOption, address,
      additionalServices: additionalServices.map(id => {
        const s = availableServices.find(s => s.id === id);
        return s ? { id: s.id, name: s.name, price: s.price } : null;
      }).filter(Boolean),
      emergencyContact, vetInfo, specialInstructions, foodInstructions, medicationInstructions, message,
      subtotal, taxaServico, transportCost, additionalServicesCost, total,
    };

    setTimeout(() => {
      console.log("Reserva realizada:", reserva);
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <div className="text-green-500 text-5xl mb-4">✓</div>
        <h2 className="text-xl font-bold mb-2">Reserva solicitada com sucesso!</h2>
        <p className="text-gray-600 mb-4">Sua reserva foi criada e está aguardando confirmação do cuidador.</p>
        <button onClick={onClose} className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-500">Fechar</button>
      </div>
    );
  }

  return (
    <div className="lg:col-span-1 space-y-6">
      <div className="bg-white rounded-xl shadow p-6">
        <StepIndicator title={"Solicitar Reserva"} currentStep={step} stepLabels={stepLabels} />
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && <Step1Reservation service={service} setService={setService} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} startTime={startTime} setStartTime={setStartTime} endTime={endTime} setEndTime={setEndTime} setStep={setStep} />}
          {step === 2 && <Step2SelectPets userPets={userPets} selectedPets={selectedPets} setSelectedPets={setSelectedPets} setStep={setStep} />}
          {step === 3 && <Step3TransportServices transportOption={transportOption} setTransportOption={setTransportOption} address={address} setAddress={setAddress} additionalServices={additionalServices} setAdditionalServices={setAdditionalServices} availableServices={availableServices} setStep={setStep} />}
          {step === 4 && <Step4AdditionalInfo emergencyContact={emergencyContact} setEmergencyContact={setEmergencyContact} vetInfo={vetInfo} setVetInfo={setVetInfo} specialInstructions={specialInstructions} setSpecialInstructions={setSpecialInstructions} foodInstructions={foodInstructions} setFoodInstructions={setFoodInstructions} medicationInstructions={medicationInstructions} setMedicationInstructions={setMedicationInstructions} message={message} setMessage={setMessage} setStep={setStep} />}
          {step === 5 && <Step5Verification service={service} startDate={startDate} endDate={endDate} startTime={startTime} endTime={endTime} selectedPets={selectedPets} userPets={userPets} transportOption={transportOption} address={address} additionalServices={additionalServices} availableServices={availableServices} emergencyContact={emergencyContact} vetInfo={vetInfo} specialInstructions={specialInstructions} foodInstructions={foodInstructions} medicationInstructions={medicationInstructions} message={message} subtotal={subtotal} taxaServico={taxaServico} transportCost={transportCost} additionalServicesCost={additionalServicesCost} total={total} loading={loading} setStep={setStep} />}
        </form>
      </div>
    </div>
  );
};

export default ReservaForm;
