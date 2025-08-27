import React from "react";

const GeneralSettingsStep = ({ serviceSettings, setServiceSettings }) => {
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
};

export default GeneralSettingsStep;