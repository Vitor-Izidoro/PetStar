import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/UserAuth/Login';
import Signup from './pages/UserAuth/Signup';
import Home from './pages/Home';
import HomeContent from './pages/HomeContent'
import PetStarProfile from './pages/Cuidadores/PetStarProfile';
import PetProfile from './pages/Pets/PetProfile';
import ReservationConfirmation from './pages/Reserva/ReservaConfirmation';
import UserProfile from './pages/Profile/UserProfile';
import PetMonitoring from './pages/PetMonitoring/PetMonitoring';
import AccountRecovery from './pages/UserAuth/AccountRecovery';
import ReservaList from './pages/Reserva/ReservaList';
import PaymentPage from './pages/Pagamento/Pagamento';


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
            <Route path="perfil-cuidador/:id" element={<PetStarProfile />} />
            <Route path="/petProfile" element={<PetProfile />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Route>

          <Route path="/reservaConfirmation" element={<ReservationConfirmation />} />
          <Route path="/petMonitoring" element={<PetMonitoring />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
