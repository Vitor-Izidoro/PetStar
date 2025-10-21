import React from "react";
import {FaApple, FaFacebookF, FaGooglePlay, FaTwitter, FaInstagram, FaYoutube} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-10">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h5 className="text-xl font-bold mb-4 text-white">PetStar</h5>
          <p>A melhor plataforma para encontrar cuidadores para seu pet com confiança e segurança.</p>
          <div className="mt-4 space-y-2">
            <button className="w-full bg-gray-800 p-3 rounded-lg flex items-center">
              <FaApple className="text-2xl mr-3"/> <div><span className="text-xs">Baixe na</span><br/><strong>App Store</strong></div>
            </button>
            <button className="w-full bg-gray-800 p-3 rounded-lg flex items-center">
              <FaGooglePlay className="text-2xl mr-3"/> <div><span className="text-xs">Disponível no</span><br/><strong>Google Play</strong></div>
            </button>
          </div>
        </div>
        <div>
          <h5 className="text-xl font-bold mb-4 text-white">Links</h5>
          <ul className="space-y-2">
            <li><a href="/como-funciona">Como funciona</a></li>
            <li><a href="/para-donos">Para Donos</a></li>
            <li><a href="/reservationsClient">Para Anfitriões</a></li>
            <li><a href="#">Ajuda</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-bold mb-4 text-white">Legal</h5>
          <ul className="space-y-2">
            <li><a href="#">Termos de uso</a></li>
            <li><a href="#">Política de privacidade</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-bold mb-4 text-white">Contato</h5>
          <ul className="space-y-2">
            <li>contato@petstar.com.br</li>
            <li>(11) 3456-7890</li>
            <li>São Paulo, Brasil</li>
          </ul>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="p-2 bg-gray-800 rounded"><FaFacebookF/></a>
            <a href="#" className="p-2 bg-gray-800 rounded"><FaInstagram/></a>
            <a href="#" className="p-2 bg-gray-800 rounded"><FaTwitter/></a>
            <a href="#" className="p-2 bg-gray-800 rounded"><FaYoutube/></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 border-t border-gray-700 pt-6">
        © 2025 PetStar. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
