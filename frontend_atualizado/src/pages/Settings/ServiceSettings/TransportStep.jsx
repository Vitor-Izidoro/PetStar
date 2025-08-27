import React from "react";

const TransportStep = ({ transportOptions, setTransportOptions }) => {
  const toggleTransportOption = (id) => {
    setTransportOptions(transportOptions.map(option => 
      option.id === id ? { ...option, enabled: !option.enabled } : option
    ));
  };

  const updateTransportPrice = (id, newPrice) => {
    setTransportOptions(transportOptions.map(option => 
      option.id === id ? { ...option, price: newPrice } : option
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Opções de Transporte</h2>
      <div className="space-y-4">
        {transportOptions.map(option => (
          <div key={option.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={option.enabled}
                onChange={() => toggleTransportOption(option.id)}
                className="h-5 w-5 text-indigo-600 mr-3"
              />
              <div>
                <h3 className="font-medium">{option.name}</h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">R$</span>
              <input
                type="number"
                value={option.price}
                onChange={(e) => updateTransportPrice(option.id, parseInt(e.target.value))}
                className="w-20 p-2 border rounded"
                disabled={!option.enabled}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransportStep;