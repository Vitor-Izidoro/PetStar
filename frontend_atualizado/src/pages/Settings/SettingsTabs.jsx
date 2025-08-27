// SettingsTabs.jsx
import React from "react";
import { FaUser, FaBell, FaLock } from "react-icons/fa";

export default function SettingsTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex space-x-4 border-b">
      <button
        className={`px-4 py-2 rounded-t-lg ${
          activeTab === "account" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"
        } flex items-center gap-2`}
        onClick={() => setActiveTab("account")}
      >
        <FaUser /> Conta
      </button>
      <button
        className={`px-4 py-2 rounded-t-lg ${
          activeTab === "notifications" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"
        } flex items-center gap-2`}
        onClick={() => setActiveTab("notifications")}
      >
        <FaBell /> Notificações
      </button>
      <button
        className={`px-4 py-2 rounded-t-lg ${
          activeTab === "privacy" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"
        } flex items-center gap-2`}
        onClick={() => setActiveTab("privacy")}
      >
        <FaLock /> Privacidade
      </button>
    </div>
  );
}
