import React from "react";

const Step2Address = ({ next, back }) => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Endereço</h4>
      <form className="space-y-4">
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Rua</label>
          <input type="text" placeholder="Rua" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Número</label>
            <input type="text" placeholder="Número" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">CEP</label>
            <input type="text" placeholder="00000-000" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Cidade/Estado</label>
            <input type="text" placeholder="Cidade/Estado" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
          </div>
        </div>
        <div className="flex justify-between">
          <button type="button" onClick={back} className="px-6 py-2 rounded-lg border hover:bg-gray-100 transition">Voltar</button>
          <button type="button" onClick={next} className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-500 transition">Próximo</button>
        </div>
      </form>
    </div>
  );
};

export default Step2Address;
