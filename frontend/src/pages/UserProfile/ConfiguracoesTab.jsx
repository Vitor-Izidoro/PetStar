import React from "react";

const ConfiguracoesTab = ({ user }) => {
  return (
    <div className="tab-pane fade show active">
      <h4 className="mt-4">Configurações</h4>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title mb-4">Preferências de Notificação</h5>
          <div className="form-check form-switch mb-3">
            <input className="form-check-input" type="checkbox" id="notif1" defaultChecked={user.notificacao.promocional} />
            <label className="form-check-label" htmlFor="notif1">E-mails promocionais</label>
          </div>
          <div className="form-check form-switch mb-3">
            <input className="form-check-input" type="checkbox" id="notif2" defaultChecked={user.notificacao.reserva} />
            <label className="form-check-label" htmlFor="notif2">Lembretes de reserva</label>
          </div>
          <div className="form-check form-switch mb-3">
            <input className="form-check-input" type="checkbox" id="notif3" defaultChecked={user.notificacao.atualizacoes} />
            <label className="form-check-label" htmlFor="notif3">Notícias e atualizações</label>
          </div>
          <button className="btn btn-primary mt-2">Salvar Preferências</button>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title mb-4">Segurança</h5>
          <div className="d-grid gap-2">
            <button className="btn btn-outline-primary">Alterar Senha</button>
            <button className="btn btn-outline-primary">Verificar Dispositivos Conectados</button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-4 text-danger">Zona de Perigo</h5>
          <p className="text-muted mb-4">Excluir conta é irreversível. Tenha certeza.</p>
          <button className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteAccountModal">
            Excluir Minha Conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfiguracoesTab;
