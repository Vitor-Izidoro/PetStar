import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/App.Routes';

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
