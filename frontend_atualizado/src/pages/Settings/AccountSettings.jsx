// AccountSettings.jsx
import React, { useState } from "react";
import { FaSave, FaLock, FaPhoneAlt, FaBirthdayCake, FaMapMarkerAlt } from "react-icons/fa";

export default function AccountSettings() {
  const [username, setUsername] = useState("Laura Mendes");
  const [email, setEmail] = useState("laura.mendes@exemplo.com");
  const [phone, setPhone] = useState("+55 11 91234-5678");
  const [address, setAddress] = useState("Rua das Flores, 123, São Paulo, SP");
  const [dob, setDob] = useState("1990-08-25");
  const [password, setPassword] = useState("");

  return (
    <div className="space-y-6 max-w-3xl mx-auto p-4">
      {/* Informações básicas */}
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
      </div>

      {/* Contato e endereço */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold mb-2">Contato & Endereço</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Telefone</label>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-gray-500" />
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium">Endereço</label>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-gray-500" />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Data de nascimento e senha */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold mb-2">Segurança & Privacidade</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Data de Nascimento</label>
            <div className="flex items-center gap-2">
              <FaBirthdayCake className="text-gray-500" />
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium">Senha</label>
            <div className="flex items-center gap-2">
              <FaLock className="text-gray-500" />
              <input
                type="password"
                placeholder="Nova senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Botão salvar */}
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 flex items-center gap-2">
        <FaSave /> Salvar Alterações
      </button>
    </div>
  );
}
