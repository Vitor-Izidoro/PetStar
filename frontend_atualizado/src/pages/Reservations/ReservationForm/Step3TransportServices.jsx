// components/ReservaForm/Step3TransportServices.jsx
import React from "react";

const Step3TransportServices = ({
  transportOption, setTransportOption, address, setAddress,
  availableServices, additionalServices, setAdditionalServices, setStep
}) => {
  const handleAdditionalService = (serviceId) => {
    if (additionalServices.includes(serviceId)) {
      setAdditionalServices(additionalServices.filter(id => id !== serviceId));
    } else {
      setAdditionalServices([...additionalServices, serviceId]);
    }
  };

  const transportOptions = [
    { id: "levar-buscar", label: "Vou levar e buscar meu pet", price: 0 },
    { id: "buscar-only", label: "Preciso que busque meu pet", price: 15 },
    { id: "levar-only", label: "Preciso que leve meu pet", price: 15 },
    { id: "buscar-levar", label: "Preciso que busque e leve meu pet", price: 30 },
  ];

  return (
    <>
      <div>
        <label className="block text-sm font-medium mb-2">Opção de Transporte</label>
        <div className="space-y-2">
          {transportOptions.map(option => (
            <div
              key={option.id}
              className={`p-3 border rounded-lg cursor-pointer transition-all ${
                transportOption === option.id
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-300 hover:border-indigo-400"
              }`}
              onClick={() => setTransportOption(option.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                      transportOption === option.id
                        ? "bg-indigo-600 border-indigo-600"
                        : "border-gray-400"
                    }`}
                  >
                    {transportOption === option.id && (
                      <span className="text-white text-xs">✓</span>
                    )}
                  </div>
                  <span>{option.label}</span>
                </div>
                {option.price > 0 && <span className="font-medium">R$ {option.price}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {(transportOption === "buscar-only" || transportOption === "levar-only" || transportOption === "buscar-levar") && (
        <div>
          <label className="block text-sm font-medium mb-1">Endereço para busca/entrega</label>
          <input
            type="text"
            placeholder="Digite seu endereço completo"
            className="w-full border rounded-lg p-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-2">Serviços Adicionais (opcional)</label>
        <div className="space-y-2">
          {availableServices.map(service => (
            <div
              key={service.id}
              className={`p-3 border rounded-lg cursor-pointer transition-all ${
                additionalServices.includes(service.id)
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-300 hover:border-indigo-400"
              }`}
              onClick={() => handleAdditionalService(service.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                      additionalServices.includes(service.id)
                        ? "bg-indigo-600 border-indigo-600"
                        : "border-gray-400"
                    }`}
                  >
                    {additionalServices.includes(service.id) && (
                      <span className="text-white text-xs">✓</span>
                    )}
                  </div>
                  <span>{service.name}</span>
                </div>
                <span className="font-medium">R$ {service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          type="button"
          onClick={() => setStep(2)}
          className="w-1/2 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50"
        >
          Voltar
        </button>
        <button
          type="button"
          onClick={() => setStep(4)}
          className="w-1/2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500"
        >
          Próximo
        </button>
      </div>
    </>
  );
};

export default Step3TransportServices;
