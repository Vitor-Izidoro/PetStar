// AccountSettings.jsx
import React, { useState } from "react";
import { FaSave } from "react-icons/fa";

export default function AccountSettings() {
  const [username, setUsername] = useState("Laura Mendes");
  const [email, setEmail] = useState("laura.mendes@exemplo.com");

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold mb-2">Informações da Conta</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Nome</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 outline-none"
          />
        </div>
      </div>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 flex items-center gap-2">
        <FaSave /> Salvar Alterações
      </button>
    </div>
  );
}
