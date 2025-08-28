import React from "react";
import { FaUser, FaHome } from "react-icons/fa";

const Step4UserType = ({ back }) => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-6">Você é?</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition">
          <FaUser className="text-indigo-600 text-4xl mb-3 mx-auto"/>
          <h5 className="font-semibold text-lg">Dono de Pet</h5>
          <p className="text-gray-600 text-sm mb-3">Busco cuidadores para meu animal de estimação</p>
          <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition">Selecionar</button>
        </div>
        <div className="border rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition">
          <FaHome className="text-indigo-600 text-4xl mb-3 mx-auto"/>
          <h5 className="font-semibold text-lg">Anfitrião</h5>
          <p className="text-gray-600 text-sm mb-3">Quero cuidar de pets e gerar renda extra</p>
          <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition">Selecionar</button>
        </div>
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={back} className="px-6 py-2 rounded-lg border hover:bg-gray-100 transition">Voltar</button>
      </div>
    </div>
  );
};

export default Step4UserType;
