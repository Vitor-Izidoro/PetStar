const Step5Verification = ({
  service, startDate, endDate, startTime, endTime, selectedPets, userPets,
  transportOption, address, additionalServices, availableServices, emergencyContact,
  vetInfo, specialInstructions, foodInstructions, medicationInstructions, message,
  subtotal, taxaServico, transportCost, additionalServicesCost, total, loading, setStep
}) => {
  const selectedPetObjects = selectedPets.map(id => userPets.find(p => p.id === id));
  const selectedAdditionalServices = additionalServices.map(id => availableServices.find(s => s.id === id)).filter(Boolean);

  return (
    <div className="space-y-6">
      <div className="bg-indigo-50 p-4 rounded-lg">
        <h4 className="font-medium text-indigo-800 mb-2">Confirme os dados da sua reserva</h4>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between mb-1"><span>Serviço:</span><span>{service}</span></div>
          <div className="flex justify-between mb-1"><span>Período:</span><span>{startDate} a {endDate}</span></div>
          <div className="flex justify-between mb-1"><span>Horário:</span><span>{startTime} às {endTime}</span></div>
        </div>

        <div className="space-y-3">
          {selectedPetObjects.map(pet => (
            <div key={pet.id} className="flex items-center bg-gray-50 p-3 rounded-lg">
              <img src={pet.image} alt={pet.name} className="w-12 h-12 rounded-full mr-3"/>
              <div><div>{pet.name}</div><div className="text-sm text-gray-600">{pet.breed} • {pet.age}</div></div>
            </div>
          ))}
        </div>

        {selectedAdditionalServices.length > 0 && (
          <div className="space-y-2">
            {selectedAdditionalServices.map(s => <div key={s.id} className="flex justify-between bg-gray-50 p-3 rounded-lg"><span>{s.name}</span><span>R$ {s.price}</span></div>)}
          </div>
        )}
      </div>

      <div className="flex gap-2 mt-4">
        <button type="button" onClick={() => setStep(4)} className="w-1/2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50">Voltar</button>
        <button type="submit" className="w-1/2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500" disabled={loading}>
          {loading ? "Confirmando..." : "Confirmar Reserva"}
        </button>
      </div>
    </div>
  );
};

export default Step5Verification;
