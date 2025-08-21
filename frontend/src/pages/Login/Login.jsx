import React, { useState } from "react";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Login enviado:", formData);
    // Aqui você pode integrar com API ou Firebase
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2><i className="fas fa-paw me-2"></i>PetStar</h2>
          <p className="mb-0">Entre na sua conta</p>
        </div>
        <div className="login-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <input
                type="email"
                className="form-control"
                placeholder="Seu e-mail"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Senha</label>
              <input
                type="password"
                className="form-control"
                placeholder="Sua senha"
                value={formData.password}
                onChange={e => setFormData({ ...formData, password: e.target.value })}
              />
              <div className="d-flex justify-content-end mt-2">
                <a href="#" className="text-sm text-decoration-none">Esqueceu a senha?</a>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">Entrar</button>
          </form>

          <div className="divider">
            <span>Ou entre com</span>
          </div>

          <SocialLogin />

          <div className="login-footer">
            <p>Não tem uma conta? <a href="signup.html">Cadastre-se</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
