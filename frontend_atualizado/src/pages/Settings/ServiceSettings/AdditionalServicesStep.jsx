import React from "react";

const AdditionalServicesStep = ({ additionalServices, setAdditionalServices }) => {
  const toggleAdditionalService = (id) => {
    setAdditionalServices(additionalServices.map(service => 
      service.id === id ? { ...service, enabled: !service.enabled } : service
    ));
  };

  const updateAdditionalServicePrice = (id, newPrice) => {
    setAdditionalServices(additionalServices.map(service => 
      service.id === id ? { ...service, price: newPrice } : service
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Serviços Adicionais</h2>
      <div className="space-y-4">
        {additionalServices.map(service => (
          <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={service.enabled}
                onChange={() => toggleAdditionalService(service.id)}
                className="h-5 w-5 text-indigo-600 mr-3"
              />
              <div>
                <h3 className="font-medium">{service.name}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">R$</span>
              <input
                type="number"
                value={service.price}
                onChange={(e) => updateAdditionalServicePrice(service.id, parseInt(e.target.value))}
                className="w-20 p-2 border rounded"
                disabled={!service.enabled}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalServicesStep;