import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar sempre no topo */}
      <NavBar />

      <main className="flex-1 flex flex-col items-center justify-center px-4 bg-gray-100">
        <Outlet /> {/* Aqui entra o conteúdo da rota atual */}
      </main>

      {/* Footer sempre no rodapé */}
      <Footer />
    </div>
  );
};

export default Home;
