import React from "react";

const Step3Access = ({ next, back }) => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Dados de Acesso</h4>
      <form className="space-y-4">
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Senha</label>
          <input type="password" placeholder="Crie uma senha segura" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
        </div>
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Confirmar Senha</label>
          <input type="password" placeholder="Digite novamente sua senha" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
        </div>
        <div className="flex items-start space-x-2">
          <input type="checkbox" className="mt-1"/>
          <label className="text-sm text-gray-600">
            Concordo com os{" "}
            <a href="#" className="text-indigo-600 hover:underline">Termos de Uso</a> e{" "}
            <a href="#" className="text-indigo-600 hover:underline">Política de Privacidade</a>
          </label>
        </div>
        <div className="flex justify-between">
          <button type="button" onClick={back} className="px-6 py-2 rounded-lg border hover:bg-gray-100 transition">Voltar</button>
          <button type="button" onClick={next} className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-500 transition">Próximo</button>
        </div>
      </form>
    </div>
  );
};

export default Step3Access;
