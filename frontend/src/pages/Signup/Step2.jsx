import React from "react";

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div className="step-container">
      <h4 className="mb-4">Dados de Acesso</h4>
      <form>
        <div className="mb-3">
          <label className="form-label">Senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="Crie uma senha segura"
            value={formData.password}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirmar Senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="Digite novamente sua senha"
            value={formData.confirmPassword}
            onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
          />
        </div>
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="terms"
            checked={formData.terms}
            onChange={e => setFormData({ ...formData, terms: e.target.checked })}
          />
          <label className="form-check-label" htmlFor="terms">
            Concordo com os <a href="#">Termos de Uso</a> e <a href="#">Política de Privacidade</a>
          </label>
        </div>
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-outline-secondary" onClick={() => prevStep(1)}>
            Voltar
          </button>
          <button type="button" className="btn btn-primary" onClick={() => nextStep(3)}>
            Próximo
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
