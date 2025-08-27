// PrivacySettings.jsx
import React, { useState } from "react";
import { FaSave } from "react-icons/fa";

export default function PrivacySettings() {
  const [password, setPassword] = useState({ current: "", new: "", confirm: "" });

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold mb-2">Alterar Senha</h4>
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
  );
}
