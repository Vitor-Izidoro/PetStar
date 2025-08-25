import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* conteúdo do footer (copiado do HTML original) */}
        <div className="row">
          <div className="col-lg-4 mb-5">
            <h5 className="footer-title">PetStar</h5>
            <p>A melhor plataforma para encontrar cuidadores para seu pet com confiança e segurança.</p>
            <div className="mt-4">
              <button className="app-download-btn">
                <i className="fab fa-apple"></i>
                <span>Baixe na</span>
                <strong>App Store</strong>
              </button>
              <button className="app-download-btn">
                <i className="fab fa-google-play"></i>
                <span>Disponível no</span>
                <strong>Google Play</strong>
              </button>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 mb-5">
            <h5 className="footer-title">Links</h5>
            <ul className="footer-links">
              <li><a href="#">Como funciona</a></li>
              <li><a href="#">Para Donos</a></li>
              <li><a href="#">Para Anfitriões</a></li>
              <li><a href="#">Ajuda</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 mb-5">
            <h5 className="footer-title">Legal</h5>
            <ul className="footer-links">
              <li><a href="#">Termos de uso</a></li>
              <li><a href="#">Política de privacidade</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 mb-5">
            <h5 className="footer-title">Contato</h5>
            <ul className="footer-links">
              <li><i className="fas fa-envelope me-2"></i> contato@petstar.com.br</li>
              <li><i className="fas fa-phone me-2"></i> (11) 3456-7890</li>
              <li><i className="fas fa-map-marker-alt me-2"></i> São Paulo, Brasil</li>
            </ul>
            <div className="mt-4">
              <a href="#" className="btn btn-outline-light me-2"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="btn btn-outline-light me-2"><i className="fab fa-instagram"></i></a>
              <a href="#" className="btn btn-outline-light me-2"><i className="fab fa-twitter"></i></a>
              <a href="#" className="btn btn-outline-light"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="text-center">
          <p className="mb-0">© 2023 PetStar. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
