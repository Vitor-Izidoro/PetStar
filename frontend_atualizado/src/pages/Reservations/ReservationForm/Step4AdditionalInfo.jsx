const Step4AdditionalInfo = ({
  emergencyContact, setEmergencyContact, vetInfo, setVetInfo,
  specialInstructions, setSpecialInstructions, foodInstructions, setFoodInstructions,
  medicationInstructions, setMedicationInstructions, message, setMessage, setStep
}) => (
  <>
    <div>
      <h4 className="font-medium text-gray-700 mb-3">Informações de Emergência</h4>
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">Contato de Emergência</label>
          <input
            type="text"
            placeholder="Nome do contato"
            className="w-full border rounded-lg p-2 mb-2"
            value={emergencyContact.name}
            onChange={(e) => setEmergencyContact({...emergencyContact, name: e.target.value})}
          />
          <input
            type="tel"
            placeholder="Telefone"
            className="w-full border rounded-lg p-2"
            value={emergencyContact.phone}
            onChange={(e) => setEmergencyContact({...emergencyContact, phone: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Veterinário</label>
          <input
            type="text"
            placeholder="Nome do veterinário/clínica"
            className="w-full border rounded-lg p-2 mb-2"
            value={vetInfo.name}
            onChange={(e) => setVetInfo({...vetInfo, name: e.target.value})}
          />
          <input
            type="tel"
            placeholder="Telefone"
            className="w-full border rounded-lg p-2"
            value={vetInfo.phone}
            onChange={(e) => setVetInfo({...vetInfo, phone: e.target.value})}
          />
        </div>
      </div>
    </div>

    <div>
      <h4 className="font-medium text-gray-700 mb-3">Instruções Especiais</h4>
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">Comportamento/Cuidados Especiais</label>
          <textarea
            rows="2"
            placeholder="Ex: Medo de fogos de artifício, não gosta de outros cães, etc."
            className="w-full border rounded-lg p-2"
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Alimentação</label>
          <textarea
            rows="2"
            placeholder="Ex: Ração específica, horários, quantidade, etc."
            className="w-full border rounded-lg p-2"
            value={foodInstructions}
            onChange={(e) => setFoodInstructions(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Medicamentos</label>
          <textarea
            rows="2"
            placeholder="Ex: Nome do medicamento, dosagem, horários, etc."
            className="w-full border rounded-lg p-2"
            value={medicationInstructions}
            onChange={(e) => setMedicationInstructions(e.target.value)}
          />
        </div>
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium mb-1">Mensagem para o anfitrião (opcional)</label>
      <textarea
        rows="3"
        placeholder="Digite uma mensagem para o anfitrião..."
        className="w-full border rounded-lg p-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>

    <div className="flex gap-2 mt-4">
      <button
        type="button"
        onClick={() => setStep(3)}
        className="w-1/2 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50"
      >
        Voltar
      </button>
      <button
        type="button"
        onClick={() => setStep(5)}
        className="w-1/2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500"
      >
        Verificar Dados
      </button>
    </div>
  </>
);

export default Step4AdditionalInfo;
