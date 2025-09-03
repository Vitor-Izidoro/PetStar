import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Contexts
import { AuthProvider } from "./context/AuthContext";
import { PetProvider } from "./context/PetContext";

// Pages
import Home from "./pages/Home/Home";
import HomeContent from "./pages/Home/HomeContent";
import Login from "./pages/UserAuth/Login";
import Signup from "./pages/UserAuth/Signup/Signup";
import AccountRecovery from "./pages/UserAuth/AccountRecovery";

import UserProfile from "./pages/Profile/UserProfile";

import CaregiverProfile from "./pages/Caregivers/CaregiverProfile";

import PetList from "./pages/Pets/PetList";
import PetProfile from "./pages/Pets/PetProfile";

import ReservationClient from "./pages/Reservations/ReservationsClient";
import ReservationsCaregiver from "./pages/Reservations/ReservationsCaregiver";
import ReservationConfirmation from "./pages/Reservations/Reservation";

import MonitoringList from "./pages/PetMonitoring/MonitoringList";
import PetMonitoring from "./pages/PetMonitoring/PetMonitoring";

import PaymentPage from "./pages/Payment/PaymentPage";

const App = () => {
  return (
    <AuthProvider>
      <PetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              {/* Página inicial */}
              <Route index element={<HomeContent />} />

              {/* Autenticação */}
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="accountRecovery" element={<AccountRecovery />} />

              {/* Perfil */}
              <Route path="userProfile" element={<UserProfile />} />

              {/* Pets */}
              <Route path="pets" element={<PetList />} />
              <Route path="petProfile" element={<PetProfile />} />

              {/* Cuidadores */}
              <Route path="perfil-cuidador/:id" element={<CaregiverProfile />} />

              {/* Reservas */}
              <Route path="reservationsClient" element={<ReservationClient />} />
              <Route path="reservationsCaregiver" element={<ReservationsCaregiver />} />
              <Route path="reservationConfirmation" element={<ReservationConfirmation />} />

              {/* Monitoramentos */}
              <Route path="monitoramentos" element={<MonitoringList />} />
              <Route path="monitoramentos/:id" element={<PetMonitoring />} />

              {/* Pagamentos */}
              <Route path="payment" element={<PaymentPage />} />
            </Route>
          </Routes>
        </Router>
      </PetProvider>
    </AuthProvider>
  );
};

export default App;
