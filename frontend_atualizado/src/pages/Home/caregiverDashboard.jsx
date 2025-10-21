import React, { useState } from 'react';
import { 
    FaCalendarCheck, FaHourglassHalf, FaTimesCircle, FaCheckCircle, FaUsers, FaDog, 
    FaWrench, FaTags, FaClock, FaHeart, FaUserEdit, FaCamera, FaUpload, FaTrashAlt, 
    FaMapMarkerAlt, FaStar, FaInfoCircle, FaHome
} from 'react-icons/fa';
import { FaInbox } from 'react-icons/fa';

// ===============================================
// 1. DADOS MOCKADOS (Geral)
// ===============================================

const mockReservations = [
  {
    id: 101,
    status: 'Pendente',
    service: 'Hospedagem',
    clientName: 'João Silva',
    petName: 'Rex',
    dates: '20/11/2025 - 25/11/2025',
    totalPrice: 425.00,
  },
  {
    id: 102,
    status: 'Confirmada',
    service: 'Passeio',
    clientName: 'Maria Antunes',
    petName: 'Pipoca',
    dates: '21/11/2025 (10h)',
    totalPrice: 40.00,
  },
  {
    id: 103,
    status: 'Pendente',
    service: 'Creche',
    clientName: 'Carlos Souza',
    petName: 'Luna',
    dates: '22/11/2025',
    totalPrice: 80.00,
  },
];

const mockServiceData = {
  mainServices: {
    Hospedagem: 80, Creche: 50, Passeio: 20
  },
  generalSettings: {
    petTypes: ['Cachorro', 'Gato'],
    maxWeight: 30,
  },
  additionalServices: ['Casa com Quintal', 'Medicação', 'Transporte'],
};

const mockProfile = {
  id: 1,
  name: 'Ana Silva',
  description: 'Amante de pets com uma casa espaçosa e quintal seguro. Especialista em cães de médio porte e filhotes. Disponível para hospedagem e creche.',
  profilePic: 'https://via.placeholder.com/150?text=Perfil',
  gallery: [
    'https://via.placeholder.com/300x200?text=Ambiente+1',
    'https://via.placeholder.com/300x200?text=Ambiente+2',
  ],
};

// ===============================================
// 2. COMPONENTES AUXILIARES
// ===============================================

// Indicador de Status/Aba para Reservas
const ReservationCard = ({ reservation, onAction }) => {
  const statusColor = {
    'Pendente': 'bg-yellow-100 text-yellow-800 border-yellow-500',
    'Confirmada': 'bg-green-100 text-green-800 border-green-500',
    'Concluída': 'bg-indigo-100 text-indigo-800 border-indigo-500',
    'Cancelada': 'bg-red-100 text-red-800 border-red-500',
  };

  return (
    <div className={`bg-white p-5 rounded-lg shadow flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-l-4 ${statusColor[reservation.status]}`}>
      <div>
        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded ${statusColor[reservation.status]}`}>
          {reservation.status}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mt-1">{reservation.clientName}</h3>
        <p className="text-sm text-gray-600 flex items-center gap-1">
          <FaDog className="w-3 h-3"/> Pet: {reservation.petName} | Serviço: {reservation.service}
        </p>
        <p className="text-sm text-gray-500 mt-1">Datas: {reservation.dates}</p>
        <p className="text-lg font-bold text-orange-600 mt-2">R$ {reservation.totalPrice.toFixed(2)}</p>
      </div>

      <div className="mt-3 md:mt-0 space-x-2">
        {reservation.status === 'Pendente' && (
          <>
            <button
              onClick={() => onAction(reservation.id, 'Confirmada')}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              <FaCheckCircle className="inline mr-1"/> Aceitar
            </button>
            <button
              onClick={() => onAction(reservation.id, 'Cancelada')}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              <FaTimesCircle className="inline mr-1"/> Rejeitar
            </button>
          </>
        )}
        {reservation.status !== 'Pendente' && (
             <button
              onClick={() => alert(`Detalhes da Reserva ${reservation.id}`)}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              Ver Detalhes
            </button>
        )}
      </div>
    </div>
  );
};

// Indicador de Passo para Configurações de Serviço
const StepIndicator = ({ currentStep }) => {
    const steps = [
        { label: "Serviços Principais", icon: FaTags },
        { label: "Detalhes Gerais", icon: FaHeart },
        { label: "Adicionais e Features", icon: FaClock },
    ];

    return (
        <div className="flex justify-between items-center mb-8">
            {steps.map((step, index) => (
                <div key={index} className={`flex flex-col items-center w-1/3 ${index + 1 <= currentStep ? 'text-indigo-600' : 'text-gray-400'}`}>
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${index + 1 <= currentStep ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300 bg-white'}`}>
                        <step.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs mt-2 text-center hidden md:block">{step.label}</span>
                </div>
            ))}
        </div>
    );
};

// ===============================================
// 3. TELAS PRINCIPAIS DO ANFITRIÃO
// ===============================================

// 3.1. Gerenciamento de Reservas (ReservationsCaregiver.jsx)
const ReservationsCaregiver = () => {
  const [reservations, setReservations] = useState(mockReservations);
  const [activeTab, setActiveTab] = useState('Pendente');

  const handleAction = (id, newStatus) => {
    setReservations(prev => prev.map(res => 
      res.id === id ? { ...res, status: newStatus } : res
    ));
    alert(`Reserva ${id} foi marcada como: ${newStatus}`);
  };

  const filteredReservations = reservations.filter(res => 
    activeTab === 'Todos' ? res.status !== 'Cancelada' : res.status === activeTab
  );

  return (
    <div className="p-4 md:p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6 flex items-center">
        <FaCalendarCheck className="mr-3 text-indigo-600"/> Gestão de Reservas
      </h1>

      {/* Indicadores de Status */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Pendentes</p>
            <p className="text-2xl font-bold text-yellow-600">{reservations.filter(r => r.status === 'Pendente').length}</p>
          </div>
          <FaHourglassHalf className="w-8 h-8 text-yellow-300"/>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Confirmadas</p>
            <p className="text-2xl font-bold text-green-600">{reservations.filter(r => r.status === 'Confirmada').length}</p>
          </div>
          <FaCheckCircle className="w-8 h-8 text-green-300"/>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total de Clientes</p>
            <p className="text-2xl font-bold text-indigo-600">{new Set(reservations.map(r => r.clientName)).size}</p>
          </div>
          <FaUsers className="w-8 h-8 text-indigo-300"/>
        </div>
      </div>

      {/* Abas de Navegação */}
      <div className="flex border-b border-gray-200 mb-6">
        {['Pendente', 'Confirmada', 'Todos'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-6 text-sm font-medium transition duration-150 ${
              activeTab === tab 
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Lista de Reservas */}
      {filteredReservations.length > 0 ? (
        filteredReservations.map(res => (
          <ReservationCard 
            key={res.id} 
            reservation={res} 
            onAction={handleAction} 
          />
        ))
      ) : (
        <div className="text-center p-10 bg-gray-50 rounded-lg border">
          <FaInbox className="w-10 h-10 mx-auto text-gray-400 mb-4"/>
          <p className="text-lg text-gray-600">Nenhuma reserva na aba **{activeTab}**.</p>
        </div>
      )}
    </div>
  );
};

// 3.2. Configurações de Serviço (ServiceSettings.jsx)

// Passo 1: Serviços Principais (Preço)
const Step1MainServices = ({ data, onChange }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold mb-4">1. Defina seus Serviços e Preços (por noite/dia)</h3>
    {Object.keys(data.mainServices).map(service => (
      <div key={service} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
        <label className="text-gray-700 font-medium">{service}</label>
        <div className="flex items-center space-x-2">
          <span className="font-bold">R$</span>
          <input
            type="number"
            value={data.mainServices[service]}
            onChange={(e) => onChange('mainServices', { ...data.mainServices, [service]: Number(e.target.value) })}
            min="10"
            className="w-20 border-gray-300 rounded-lg text-center"
          />
        </div>
      </div>
    ))}
  </div>
);

// Passo 2: Detalhes Gerais (Tipos de Pet, Peso Máximo)
const Step2GeneralSettings = ({ data, onChange }) => {
    const availablePetTypes = ['Cachorro', 'Gato', 'Pássaro', 'Roedor'];
    const togglePetType = (type) => {
        const currentTypes = data.generalSettings.petTypes;
        const newTypes = currentTypes.includes(type)
            ? currentTypes.filter(t => t !== type)
            : [...currentTypes, type];
        onChange('generalSettings', { ...data.generalSettings, petTypes: newTypes });
    };

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">2. Para quais Pets você oferece serviços?</h3>

            <div className="p-4 border rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipos de Pet Aceitos</label>
                <div className="flex flex-wrap gap-2">
                    {availablePetTypes.map(type => (
                        <button
                            key={type}
                            type="button"
                            onClick={() => togglePetType(type)}
                            className={`px-3 py-1 text-sm rounded-full transition ${
                                data.generalSettings.petTypes.includes(type) ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <div className="p-4 border rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-2">Peso Máximo Aceito (kg)</label>
                <input
                    type="number"
                    value={data.generalSettings.maxWeight}
                    onChange={(e) => onChange('generalSettings', { ...data.generalSettings, maxWeight: Number(e.target.value) })}
                    min="1"
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                />
            </div>
        </div>
    );
};

// Passo 3: Serviços Adicionais (Features)
const Step3AdditionalServices = ({ data, onChange }) => {
    const availableFeatures = ['Casa com Quintal', 'Experiência em Filhotes', 'Medicação', 'Transporte', '24/7', 'Acomodações Especiais'];
    const toggleFeature = (feature) => {
        const newFeatures = data.additionalServices.includes(feature)
            ? data.additionalServices.filter(f => f !== feature)
            : [...data.additionalServices, feature];
        onChange('additionalServices', newFeatures);
    };

    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">3. Características e Serviços Extras que você oferece</h3>
            <div className="flex flex-wrap gap-3">
                {availableFeatures.map(feature => (
                    <button
                        key={feature}
                        type="button"
                        onClick={() => toggleFeature(feature)}
                        className={`px-4 py-2 text-sm rounded-lg transition border ${
                            data.additionalServices.includes(feature) ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        }`}
                    >
                        {feature}
                    </button>
                ))}
            </div>
        </div>
    );
};

const ServiceSettings = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(mockServiceData);

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Configurações de Serviço Salvas com Sucesso!');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1MainServices data={formData} onChange={updateFormData} />;
      case 2: return <Step2GeneralSettings data={formData} onChange={updateFormData} />;
      case 3: return <Step3AdditionalServices data={formData} onChange={updateFormData} />;
      default: return null;
    }
  };

  return (
    <div className="p-4 md:p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6 flex items-center">
        <FaWrench className="mr-3 text-indigo-600"/> Configurações de Serviço
      </h1>

      <StepIndicator currentStep={currentStep} />
      
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="min-h-[300px] border-b pb-8">
          {renderStep()}
        </div>

        {/* Botões de Navegação */}
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg disabled:opacity-50 transition"
          >
            Voltar
          </button>
          
          {currentStep < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
            >
              Próximo Passo
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
            >
              Salvar Configurações
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

// 3.3. Gestão de Perfil Público (ProfileManagement.jsx)
const ProfileManagement = () => {
    const [profile, setProfile] = useState(mockProfile);
    const [isEditingDescription, setIsEditingDescription] = useState(false);
    
    const handleSaveDescription = () => {
        setIsEditingDescription(false);
        alert('Descrição salva!');
    };

    const handleFileUpload = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            const newImage = URL.createObjectURL(file);
            if (type === 'profile') {
                setProfile(prev => ({ ...prev, profilePic: newImage }));
            } else if (type === 'gallery') {
                setProfile(prev => ({ ...prev, gallery: [...prev.gallery, newImage] }));
            }
            alert(`Nova imagem de ${type === 'profile' ? 'perfil' : 'galeria'} adicionada!`);
        }
    };
    
    const handleRemovePhoto = (index) => {
        const newGallery = profile.gallery.filter((_, i) => i !== index);
        setProfile(prev => ({ ...prev, gallery: newGallery }));
        alert('Foto removida!');
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center">
                <FaUserEdit className="mr-3 text-indigo-600"/> Gerenciamento do Perfil Público
            </h1>

            {/* SEÇÃO 1: FOTO DE PERFIL E INFORMAÇÕES BÁSICAS */}
            <div className="flex items-center space-x-6 pb-6 border-b">
                <div className="relative">
                    <img
                        src={profile.profilePic}
                        alt="Foto de Perfil"
                        className="w-28 h-28 object-cover rounded-full border-4 border-indigo-200"
                    />
                    <label htmlFor="profile-upload" className="absolute bottom-0 right-0 p-2 bg-indigo-600 text-white rounded-full cursor-pointer hover:bg-indigo-700 transition">
                        <FaCamera className="w-4 h-4"/>
                        <input type="file" id="profile-upload" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'profile')} />
                    </label>
                </div>
                <div>
                    <h2 className="text-2xl font-bold">{profile.name}</h2>
                    <p className="text-gray-500">Anfitrião PetStar</p>
                    <button className="text-sm text-orange-500 hover:underline mt-1">
                        Ver perfil como Cliente
                    </button>
                </div>
            </div>

            {/* SEÇÃO 2: DESCRIÇÃO/BIO */}
            <div className="mt-8 pb-6 border-b">
                <h3 className="text-xl font-semibold mb-3 flex justify-between items-center">
                    Sua Descrição (Bio)
                    <button onClick={() => setIsEditingDescription(!isEditingDescription)} className="text-sm text-indigo-600 hover:text-indigo-800">
                        {isEditingDescription ? 'Cancelar' : 'Editar'}
                    </button>
                </h3>
                {isEditingDescription ? (
                    <>
                        <textarea
                            value={profile.description}
                            onChange={(e) => setProfile(prev => ({ ...prev, description: e.target.value }))}
                            className="w-full border-gray-300 rounded-lg h-32 p-3"
                        />
                        <button onClick={handleSaveDescription} className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                            Salvar Descrição
                        </button>
                    </>
                ) : (
                    <p className="text-gray-600 whitespace-pre-wrap">{profile.description}</p>
                )}
            </div>

            {/* SEÇÃO 3: GALERIA DE FOTOS DO AMBIENTE */}
            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Galeria de Fotos do Seu Espaço</h3>
                <div className="grid grid-cols-3 gap-4">
                    {/* Botão para Upload de Nova Foto */}
                    <div className="relative border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-32 hover:border-indigo-500 transition">
                        <label htmlFor="gallery-upload" className="text-center text-gray-500 cursor-pointer p-4">
                            <FaUpload className="w-6 h-6 mx-auto mb-1 text-indigo-500"/>
                            <span className="text-sm">Adicionar Foto</span>
                            <input type="file" id="gallery-upload" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'gallery')} />
                        </label>
                    </div>

                    {/* Fotos Existentes */}
                    {profile.gallery.map((imgUrl, index) => (
                        <div key={index} className="relative h-32 overflow-hidden rounded-lg shadow">
                            <img src={imgUrl} alt={`Galeria ${index + 1}`} className="w-full h-full object-cover"/>
                            <button 
                                onClick={() => handleRemovePhoto(index)}
                                className="absolute top-1 right-1 p-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition opacity-90"
                                title="Remover Foto"
                            >
                                <FaTrashAlt className="w-3 h-3"/>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// ===============================================
// 4. DASHBOARD CONTAINER (Organiza as telas em abas)
// ===============================================
const CaregiverDashboard = () => {
    const [activeTab, setActiveTab] = useState('Reservas');

    const tabs = [
        { name: 'Reservas', component: ReservationsCaregiver, icon: FaCalendarCheck },
        { name: 'Configurações de Serviço', component: ServiceSettings, icon: FaWrench },
        { name: 'Perfil Público', component: ProfileManagement, icon: FaUserEdit },
    ];

    const ActiveComponent = tabs.find(t => t.name === activeTab).component;

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2 flex items-center">
                    <FaHome className='text-orange-500 mr-2'/> Área do Anfitrião
                </h1>
                <p className="text-gray-500 mb-8">Gerencie seu negócio PetStar de forma simples e eficiente.</p>

                {/* Navbar de Abas */}
                <div className="flex border-b border-gray-300 mb-8 overflow-x-auto">
                    {tabs.map(tab => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                            className={`flex items-center py-3 px-6 text-sm font-semibold transition duration-150 whitespace-nowrap ${
                                activeTab === tab.name 
                                    ? 'border-b-4 border-indigo-600 text-indigo-600 bg-white'
                                    : 'text-gray-500 hover:text-indigo-600'
                            }`}
                        >
                            <tab.icon className="mr-2"/> {tab.name}
                        </button>
                    ))}
                </div>

                {/* Conteúdo da Aba Ativa */}
                <ActiveComponent />

            </div>
        </div>
    );
};

export default CaregiverDashboard;