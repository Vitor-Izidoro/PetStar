import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPaw, FaUser, FaMapMarkerAlt, FaLock, FaUsers, FaCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
// ===============================================
// 1. COMPONENTE STEP INDICATOR
// ===============================================

const StepIndicator = ({ title, currentStep, stepLabels }) => {
  const totalSteps = stepLabels.length;

  return (
    <div className="mb-8 relative">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <span className="text-sm text-gray-500">
          Etapa {currentStep} de {totalSteps}
        </span>
      </div>

      <div className="relative flex items-center justify-between px-4 sm:px-0">
        {/* Linha de fundo */}
        <div className="absolute top-4 left-0 right-0 h-1 bg-gray-300 z-0 rounded mx-auto" style={{ width: 'calc(100% - 32px)' }} />

        {/* Linha de progresso */}
        <div
          className="absolute top-4 left-4 h-1 bg-indigo-500 z-0 rounded transition-all duration-500"
          style={{
            width: `${(currentStep - 1) / (totalSteps - 1) * 100}%`,
          }}
        />

        {stepLabels.map((label, index) => {
          const step = index + 1;
          const isCompleted = currentStep > step;
          const isActive = currentStep === step;

          return (
            <div key={step} className="flex flex-col items-center relative z-10 w-1/4">
              {/* Círculo do passo */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center relative z-10 border-2 transition-colors duration-300 ${isActive
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-400/50"
                    : isCompleted
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-white text-gray-400 border-gray-300"
                  }`}
              >
                {isCompleted ? (
                  <FaCheckCircle className="w-4 h-4" />
                ) : (
                  step
                )}
              </div>

              {/* Texto do passo */}
              <span
                className={`mt-2 text-xs text-center hidden sm:block ${isActive
                    ? "text-indigo-600 font-bold"
                    : isCompleted
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ===============================================
// 2. COMPONENTES DE ETAPAS INDIVIDUAIS
// ===============================================

// Step 1: Informações Pessoais (Versão Aprimorada e Integrada)
const Step1PersonalInfo = ({ next }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui deveria ter a validação dos campos
    next();
  };

  return (
    <div>
      <h4 className="text-xl font-bold text-indigo-700 mb-4 flex items-center gap-2"><FaUser /> Seus Dados Pessoais</h4>
      <p className="text-sm text-gray-500 mb-6">Informações básicas e de contato. Seu CPF é opcional, mas ajuda na verificação futura.</p>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Nome *</label>
            <input type="text" placeholder="Seu nome" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400" required />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Sobrenome *</label>
            <input type="text" placeholder="Seu sobrenome" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">CPF (Opcional)</label>
            <input type="text" placeholder="000.000.000-00" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400" />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Data de Nascimento *</label>
            <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400" required />
          </div>
        </div>
        <div>
          <label className="block font-semibold text-gray-700 mb-1">E-mail *</label>
          <input type="email" placeholder="Seu e-mail" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400" required />
        </div>
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Telefone *</label>
          <input type="tel" placeholder="(11) 99999-9999" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400" required />
        </div>

        <div className="flex justify-end pt-4">
          {/* O botão "Próximo" agora é o submit do formulário para validar os campos antes de avançar */}
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center gap-2"
          >
            Próximo <FaChevronRight className="w-3 h-3" />
          </button>
        </div>
      </form>
    </div>
  );
};


// Step 2: Endereço
const Step2Address = ({ next, back }) => (
  <div className="space-y-5">
    <h2 className="text-xl font-bold text-indigo-700 flex items-center gap-2"><FaMapMarkerAlt /> Seu Endereço</h2>
    <p className="text-sm text-gray-500 mb-6">Informe seu endereço para que a plataforma possa mostrar serviços próximos.</p>

    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); next(); }}>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">CEP *</label>
        <input type="text" placeholder="00000-000" className="w-full px-4 py-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500" required />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Rua/Avenida *</label>
        <input type="text" placeholder="Rua de Exemplo" className="w-full px-4 py-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500" required />
      </div>
      <div className="flex space-x-4">
        <div className="w-1/3">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Número *</label>
          <input type="text" placeholder="100" className="w-full px-4 py-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div className="w-2/3">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Bairro *</label>
          <input type="text" placeholder="Centro" className="w-full px-4 py-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <button type="button" onClick={back} className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold transition flex items-center gap-2">
          <FaChevronLeft className="w-3 h-3" /> Voltar
        </button>
        <button type="submit" className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center gap-2">
          Próximo <FaChevronRight className="w-3 h-3" />
        </button>
      </div>
    </form>
  </div>
);

// Step 3: Acesso (Email e Senha)
const Step3Access = ({ next, back }) => (
  <div className="space-y-5">
    <h2 className="text-xl font-bold text-indigo-700 flex items-center gap-2"><FaLock /> Dados de Acesso</h2>
    <p className="text-sm text-gray-500 mb-6">Estes serão seus dados de login na PetStar.</p>

    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); next(); }}>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Crie sua Senha *</label>
        <input type="password" placeholder="••••••••" className="w-full px-4 py-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500" required />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Confirme a Senha *</label>
        <input type="password" placeholder="••••••••" className="w-full px-4 py-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500" required />
      </div>
      <div className="flex justify-between pt-4">
        <button type="button" onClick={back} className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold transition flex items-center gap-2">
          <FaChevronLeft className="w-3 h-3" /> Voltar
        </button>
        <button type="submit" className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center gap-2">
          Próximo <FaChevronRight className="w-3 h-3" />
        </button>
      </div>
    </form>
  </div>
);

// Step 4: Tipo de Usuário
const Step4UserType = ({ finish, back }) => {
  const [selected, setSelected] = useState('Dono'); // Inicia com Dono de Pet

  const handleSelect = (type) => {
    setSelected(type);
    // Em um app real, aqui você salvaria o tipo no estado pai
  };

  const cardClass = (type) =>
    `p-6 border-2 rounded-xl text-center cursor-pointer transition transform hover:scale-[1.03] ${selected === type
      ? 'border-indigo-600 bg-indigo-50 shadow-lg'
      : 'border-gray-200 bg-white hover:border-indigo-400'
    }`;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-indigo-700 flex items-center gap-2"><FaUsers /> Você é...</h2>
      <p className="text-sm text-gray-500 mb-6">Escolha como você usará a PetStar. Você pode mudar isso depois.</p>

      <div className="grid grid-cols-2 gap-6">

        {/* Opção Dono de Pet */}
        <div className={cardClass('Dono')} onClick={() => handleSelect('Dono')}>
          <FaDog className="w-10 h-10 mx-auto text-indigo-600 mb-3" />
          <h3 className="font-bold text-lg">Dono de Pet</h3>
          <p className="text-xs text-gray-500 mt-1">Busco cuidadores para meu animal.</p>
        </div>

        {/* Opção Cuidador (Anfitrião) */}
        <div className={cardClass('Cuidador')} onClick={() => handleSelect('Cuidador')}>
          <FaPaw className="w-10 h-10 mx-auto text-orange-600 mb-3" />
          <h3 className="font-bold text-lg">Anfitrião</h3>
          <p className="text-xs text-gray-500 mt-1">Quero oferecer meus serviços de cuidado.</p>
        </div>
      </div>

      <div className="flex justify-between pt-4 border-t mt-6">
        <button type="button" onClick={back} className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold transition flex items-center gap-2">
          <FaChevronLeft className="w-3 h-3" /> Voltar
        </button>
        <button
          type="button"
          onClick={finish}
          className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition flex items-center gap-2"
        >
          Finalizar Cadastro <FaCheckCircle className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};


// ===============================================
// 3. COMPONENTE PRINCIPAL (Orquestrador)
// ===============================================
const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const stepLabels = [
    "Dados Pessoais",
    "Endereço",
    "Acesso",
    "Tipo de Usuário"
  ];
  const totalSteps = stepLabels.length;

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleFinish = () => {
    alert('🎉 Cadastro Finalizado com Sucesso! Bem-vindo(a) à PetStar.');
    // Aqui iria a lógica de autenticação e redirecionamento.
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1PersonalInfo next={handleNext} />;
      case 2: return <Step2Address next={handleNext} back={handleBack} />;
      case 3: return <Step3Access next={handleNext} back={handleBack} />;
      case 4: return <Step4UserType finish={handleFinish} back={handleBack} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-6 sm:p-10">

        {/* Header e Step Indicator */}
        <header className="">
          {/* Barra de título */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3 px-6 py-3 rounded-2xl shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              <FaPaw className="w-7 h-7 animate-bounce" />
              <span className="text-2xl font-extrabold tracking-wide">PetStar Cadastro</span>
            </div>
          </div>

          {/* Step indicator */}
          <div className="max-w-2xl mx-auto">
            <StepIndicator
              title="Crie sua conta"
              currentStep={currentStep}
              stepLabels={stepLabels}
            />
          </div>
        </header>


        {/* Conteúdo da Etapa */}
        <div className="min-h-[400px]">
          {renderStep()}
        </div>

        {/* Rodapé */}
        <div className="text-center text-sm text-gray-600 mt-6 pt-4 border-t">
          Já tem uma conta?{" "}
          <Link to="/login" className="text-indigo-600 font-bold hover:underline">
            Faça Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
