// SettingsPage.jsx
import React, { useState } from "react";
import SettingsTabs from "./SettingsTabs";
import AccountSettings from "./AccountSettings";
import NotificationSettings from "./NotificationSettings";
import PrivacySettings from "./PrivacySettings";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl rounded-xl">
        <h2 className="text-2xl font-bold mb-6">Configurações</h2>

        {/* Tabs */}
        <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Content */}
        <div className="mt-4">
          {activeTab === "account" && <AccountSettings />}
          {activeTab === "notifications" && <NotificationSettings />}
          {activeTab === "privacy" && <PrivacySettings />}
        </div>
      </div>
    </div>
  );
}
