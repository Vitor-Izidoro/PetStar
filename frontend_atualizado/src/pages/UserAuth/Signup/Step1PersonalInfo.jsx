import React from "react";

const Step1PersonalInfo = ({ next }) => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Informações Pessoais</h4>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Nome</label>
            <input type="text" placeholder="Seu nome" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Sobrenome</label>
            <input type="text" placeholder="Seu sobrenome" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">CPF</label>
            <input type="text" placeholder="000.000.000-00" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Data de Nascimento</label>
            <input type="date" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
          </div>
        </div>
        <div>
          <label className="block font-semibold text-gray-700 mb-1">E-mail</label>
          <input type="email" placeholder="Seu e-mail" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
        </div>
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Telefone</label>
          <input type="tel" placeholder="(11) 99999-9999" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
        </div>
        <div className="flex justify-end">
          <button type="button" onClick={next} className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-500 transition">Próximo</button>
        </div>
      </form>
    </div>
  );
};

export default Step1PersonalInfo;
