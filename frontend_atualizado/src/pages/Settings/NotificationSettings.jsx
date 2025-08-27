// NotificationSettings.jsx
import React, { useState } from "react";

export default function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold mb-2">Notificações</h4>
      <div className="flex flex-col gap-3">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notifications.email}
            onChange={() => setNotifications({...notifications, email: !notifications.email})}
            className="mr-2"
          />
          Receber notificações por e-mail
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notifications.sms}
            onChange={() => setNotifications({...notifications, sms: !notifications.sms})}
            className="mr-2"
          />
          Receber notificações por SMS
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notifications.push}
            onChange={() => setNotifications({...notifications, push: !notifications.push})}
            className="mr-2"
          />
          Receber notificações push
        </label>
      </div>
    </div>
  );
}
