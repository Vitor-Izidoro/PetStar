// src/context/AppProviders.js
import React from "react";
import { AuthProvider } from "./AuthContext";
import { PetProvider } from "./PetContext";
// futuramente:
// import { ReservationProvider } from "./ReservationContext";
// import { CaregiverProvider } from "./CaregiverContext";

export const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <PetProvider>
        {/* outros providers vão aqui */}
        {children}
      </PetProvider>
    </AuthProvider>
  );
};
