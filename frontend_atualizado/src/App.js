import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/UserAuth/Login';
import Signup from './pages/UserAuth/Signup/Signup';
import Home from './pages/Home/Home';
import HomeContent from './pages/Home/HomeContent'
import CaregiverProfile from './pages/Caregivers/CaregiverProfile';
import PetProfile from './pages/Pets/PetProfile';
import ReservationConfirmation from './pages/Reservations/Reservation';
import UserProfile from './pages/Profile/UserProfile';
import MonitoringList from './pages/PetMonitoring/MonitoringList';
import PetMonitoring from './pages/PetMonitoring/PetMonitoring';
import AccountRecovery from './pages/UserAuth/AccountRecovery';
import ReservationClient from './pages/Reservations/ReservationsClient';
import ReservationsCaregiver from './pages/Reservations/ReservationsCaregiver';
import PaymentPage from './pages/Payment/PaymentPage';
import PetList from './pages/Pets/PetList';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Layout com Navbar + Footer */}
          <Route path="/" element={<Home />}>
            {/* Redireciona dinamicamente dependendo do login */}
            <Route index element={<HomeContent />} />  

            <Route path="login" element={<Login />} /> 
            <Route path="/signup" element={<Signup />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/accountRecovery" element={<AccountRecovery />} />
            <Route path="/reservationsClient" element={<ReservationClient />} />
            <Route path="/reservationsCaregiver" element={<ReservationsCaregiver />} />
            <Route path="/pets" element={<PetList />} />
            <Route path="perfil-cuidador/:id" element={<CaregiverProfile />} />
            <Route path="/petProfile" element={<PetProfile />} />
            <Route path="/monitoramentos" element={<MonitoringList />} />
            <Route path="/monitoramentos/:id" element={<PetMonitoring />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
