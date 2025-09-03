import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AppProviders } from "./context/AppProviders";
import { useAuth } from "./context/AuthContext";

// Páginas públicas
import LandingPage from "./pages/LandingPage";
import Login from "./pages/UserAuth/Login";
import Signup from "./pages/UserAuth/Signup/Signup";
import AccountRecovery from "./pages/UserAuth/AccountRecovery";

// Páginas privadas
import Home from "./pages/Home/Home";
import PetList from "./pages/Pets/PetList";
import Caregivers from "./pages/Caregivers/CaregiverList";
import ReservationsClient from "./pages/Reservations/ReservationsClient";
import ReservationsCaregiver from "./pages/Reservations/ReservationsCaregiver";
import MonitoringList from "./pages/PetMonitoring/MonitoringList";

// Rota protegida
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AppProviders>
      <Router>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recoveryAccount" element={<AccountRecovery />} />

          {/* Rotas privadas */}
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/pets"
            element={
              <PrivateRoute>
                <PetList />
              </PrivateRoute>
            }
          />
          <Route
            path="/caregivers"
            element={
              <PrivateRoute>
                <Caregivers />
              </PrivateRoute>
            }
          />
          <Route
            path="/reservationsClient"
            element={
              <PrivateRoute>
                <ReservationsClient />
              </PrivateRoute>
            }
          />
          <Route
            path="/reservationsCaregiver"
            element={
              <PrivateRoute>
                <ReservationsCaregiver />
              </PrivateRoute>
            }
          />
          <Route
            path="/monitoramento"
            element={
              <PrivateRoute>
                <MonitoringList />
              </PrivateRoute>
            }
          />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AppProviders>
  );
};

export default App;
