// PrivacySettings.jsx
import React, { useState } from "react";
import { FaSave, FaLock, FaShieldAlt, FaBell, FaHistory } from "react-icons/fa";

export default function PrivacySettings() {
  const [password, setPassword] = useState({ current: "", new: "", confirm: "" });
  const [twoFA, setTwoFA] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className="space-y-6 max-w-3xl mx-auto p-4">
      {/* Alterar Senha */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <FaLock /> Alterar Senha
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium">Senha Atual</label>
            <input
              type="password"
              value={password.current}
              onChange={(e) => setPassword({ ...password, current: e.target.value })}
              className="w-full border rounded-lg px-3 py-2 outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Nova Senha</label>
            <input
              type="password"
              value={password.new}
              onChange={(e) => setPassword({ ...password, new: e.target.value })}
              className="w-full border rounded-lg px-3 py-2 outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Confirmar Senha</label>
            <input
              type="password"
              value={password.confirm}
              onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
              className="w-full border rounded-lg px-3 py-2 outline-none"
            />
          </div>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 flex items-center gap-2">
          <FaSave /> Salvar Senha
        </button>
      </div>

      {/* Autenticação de dois fatores */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <FaShieldAlt /> Autenticação de Dois Fatores
        </h4>
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={twoFA}
            onChange={() => setTwoFA(!twoFA)}
            className="h-5 w-5"
          />
          Ativar autenticação de dois fatores
        </label>
      </div>

      {/* Notificações */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <FaBell /> Notificações
        </h4>
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            className="h-5 w-5"
          />
          Receber notificações por e-mail
        </label>
      </div>

      {/* Atividades recentes */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <FaHistory /> Atividades Recentes
        </h4>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Login em 26/08/2025 às 14:30</li>
          <li>Alteração de senha em 20/08/2025</li>
          <li>Atualização de perfil em 15/08/2025</li>
        </ul>
      </div>
    </div>
  );
}
