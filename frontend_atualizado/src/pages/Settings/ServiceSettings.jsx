import React, { useState } from "react";

const ServiceSettings = () => {
  // Estado para controlar a etapa atual
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

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

  // Funções para manipular os serviços
  const toggleService = (id) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, enabled: !service.enabled } : service
    ));
  };

  const updateServicePrice = (id, newPrice) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, basePrice: newPrice } : service
    ));
  };

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

  const toggleDayAvailability = (dayIndex) => {
    const updatedDays = [...availability.days];
    updatedDays[dayIndex].available = !updatedDays[dayIndex].available;
    setAvailability({ ...availability, days: updatedDays });
  };

  const updateDayTime = (dayIndex, field, value) => {
    const updatedDays = [...availability.days];
    updatedDays[dayIndex][field] = value;
    setAvailability({ ...availability, days: updatedDays });
  };

  // Navegação entre etapas
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Componente do indicador de etapas
  const StepIndicator = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-indigo-700">Configuração de Serviços</h1>
        <span className="text-sm text-gray-500">Etapa {currentStep} de {totalSteps}</span>
      </div>
      
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((step) => (
          <React.Fragment key={step}>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep === step
                  ? "bg-indigo-600 text-white"
                  : currentStep > step
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {step}
            </div>
            {step < totalSteps && (
              <div
                className={`w-16 h-1 ${
                  currentStep > step ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      
      <div className="flex justify-between mt-2 text-xs text-gray-600">
        <span>Serviços</span>
        <span>Extras</span>
        <span>Transporte</span>
        <span>Disponibilidade</span>
        <span>Configurações</span>
      </div>
    </div>
  );

  // Renderização condicional baseada na etapa atual
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Serviços Principais</h2>
            <div className="space-y-4">
              {services.map(service => (
                <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={service.enabled}
                      onChange={() => toggleService(service.id)}
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
                      value={service.basePrice}
                      onChange={(e) => updateServicePrice(service.id, parseInt(e.target.value))}
                      className="w-20 p-2 border rounded"
                      disabled={!service.enabled}
                    />
                    <span className="ml-2 text-sm text-gray-600">/{service.priceType}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 2:
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
      
      case 3:
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
      
      case 4:
        return (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Disponibilidade</h2>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Dias da Semana</h3>
              <div className="space-y-3">
                {availability.days.map((day, index) => (
                  <div key={day.day} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={day.available}
                        onChange={() => toggleDayAvailability(index)}
                        className="h-5 w-5 text-indigo-600 mr-3"
                      />
                      <span className="font-medium">{day.day}</span>
                    </div>
                    {day.available && (
                      <div className="flex items-center space-x-2">
                        <input
                          type="time"
                          value={day.startTime}
                          onChange={(e) => updateDayTime(index, 'startTime', e.target.value)}
                          className="p-1 border rounded"
                        />
                        <span>às</span>
                        <input
                          type="time"
                          value={day.endTime}
                          onChange={(e) => updateDayTime(index, 'endTime', e.target.value)}
                          className="p-1 border rounded"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Número máximo de pets</label>
                <input
                  type="number"
                  value={availability.maxPets}
                  onChange={(e) => setAvailability({...availability, maxPets: parseInt(e.target.value)})}
                  className="w-full p-2 border rounded"
                  min="1"
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={availability.sameSpeciesOnly}
                    onChange={() => setAvailability({...availability, sameSpeciesOnly: !availability.sameSpeciesOnly})}
                    className="h-5 w-5 text-indigo-600 mr-2"
                  />
                  <label>Aceitar apenas pets da mesma espécie</label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={availability.acceptAggressivePets}
                    onChange={() => setAvailability({...availability, acceptAggressivePets: !availability.acceptAggressivePets})}
                    className="h-5 w-5 text-indigo-600 mr-2"
                  />
                  <label>Aceitar pets com histórico de agressividade</label>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Configurações Gerais</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Taxa de serviço (R$)</label>
                <input
                  type="number"
                  value={serviceSettings.taxRate}
                  onChange={(e) => setServiceSettings({...serviceSettings, taxRate: parseInt(e.target.value)})}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Política de cancelamento</label>
                <select
                  value={serviceSettings.cancellationPolicy}
                  onChange={(e) => setServiceSettings({...serviceSettings, cancellationPolicy: e.target.value})}
                  className="w-full p-2 border rounded"
                >
                  <option value="flexible">Flexível (reembolso total)</option>
                  <option value="moderate">Moderada (reembolso parcial)</option>
                  <option value="strict">Rígida (sem reembolso)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Antecedência mínima para reserva (horas)</label>
                <input
                  type="number"
                  value={serviceSettings.bookingNotice}
                  onChange={(e) => setServiceSettings({...serviceSettings, bookingNotice: parseInt(e.target.value)})}
                  className="w-full p-2 border rounded"
                  min="1"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={serviceSettings.requireVaccinationRecords}
                  onChange={() => setServiceSettings({...serviceSettings, requireVaccinationRecords: !serviceSettings.requireVaccinationRecords})}
                  className="h-5 w-5 text-indigo-600 mr-2"
                />
                <label>Exigir carteira de vacinação atualizada</label>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto min-h-screen p-6">
      <StepIndicator />
      
      {renderCurrentStep()}

      {/* Navegação entre etapas */}
      <div className="flex justify-between mt-8">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`px-6 py-2 rounded-lg ${
            currentStep === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Anterior
        </button>
        
        {currentStep < totalSteps ? (
          <button
            onClick={nextStep}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-500"
          >
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