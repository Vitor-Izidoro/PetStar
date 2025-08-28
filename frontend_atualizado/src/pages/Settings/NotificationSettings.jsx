// NotificationSettings.jsx
import React, { useState } from "react";
import { FaEnvelope, FaSms, FaBell, FaSave } from "react-icons/fa";

export default function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    promotions: false,
    updates: true,
  });

  return (
    <div className="space-y-6 max-w-3xl mx-auto p-4">
      <h4 className="text-xl font-semibold mb-4">Configurações de Notificações</h4>

      <div className="space-y-3">
        <label className="flex items-center gap-3">
          <FaEnvelope className="text-indigo-600 text-lg" />
          <input
            type="checkbox"
            checked={notifications.email}
            onChange={() => setNotifications({ ...notifications, email: !notifications.email })}
            className="h-5 w-5"
          />
          Receber notificações por e-mail
        </label>

        <label className="flex items-center gap-3">
          <FaSms className="text-green-600 text-lg" />
          <input
            type="checkbox"
            checked={notifications.sms}
            onChange={() => setNotifications({ ...notifications, sms: !notifications.sms })}
            className="h-5 w-5"
          />
          Receber notificações por SMS
        </label>

        <label className="flex items-center gap-3">
          <FaBell className="text-orange-500 text-lg" />
          <input
            type="checkbox"
            checked={notifications.push}
            onChange={() => setNotifications({ ...notifications, push: !notifications.push })}
            className="h-5 w-5"
          />
          Receber notificações push
        </label>

        <label className="flex items-center gap-3">
          <FaBell className="text-purple-500 text-lg" />
          <input
            type="checkbox"
            checked={notifications.promotions}
            onChange={() => setNotifications({ ...notifications, promotions: !notifications.promotions })}
            className="h-5 w-5"
          />
          Promoções e ofertas
        </label>

        <label className="flex items-center gap-3">
          <FaBell className="text-blue-500 text-lg" />
          <input
            type="checkbox"
            checked={notifications.updates}
            onChange={() => setNotifications({ ...notifications, updates: !notifications.updates })}
            className="h-5 w-5"
          />
          Atualizações do sistema
        </label>
      </div>

      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 flex items-center gap-2 mt-4">
        <FaSave /> Salvar Alterações
      </button>
    </div>
  );
}
