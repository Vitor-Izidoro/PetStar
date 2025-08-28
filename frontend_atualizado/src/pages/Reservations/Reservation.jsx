import {
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";

const statusTimeline = ["pendente", "confirmada", "concluida", "cancelada"];

const ReservaConfirmation = ({ reservation, status }) => {
  const statusConfig = {
    confirmada: {
      icon: <FaCheckCircle className="text-green-600 inline mr-2" />,
      alertClass: "bg-green-100 border-green-400 text-green-700",
    },
    pendente: {
      icon: <FaClock className="text-yellow-600 inline mr-2" />,
      alertClass: "bg-yellow-100 border-yellow-400 text-yellow-700",
    },
    cancelada: {
      icon: <FaTimesCircle className="text-red-600 inline mr-2" />,
      alertClass: "bg-red-100 border-red-400 text-red-700",
    },
    concluida: {
      icon: <FaCheckCircle className="text-gray-500 inline mr-2" />,
      alertClass: "bg-gray-100 border-gray-300 text-gray-500",
    },
  };

  const { icon, alertClass } = statusConfig[status] || statusConfig.pendente;

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="p-6">
          {/* Cabeçalho */}
          <h2 className="text-2xl font-bold mb-4">
            {status === "confirmada"
              ? "Reserva confirmada!"
              : status === "pendente"
              ? "Reserva pendente!"
              : status === "cancelada"
              ? "Reserva cancelada!"
              : "Reserva concluída!"}
          </h2>
          <div
            className={`p-4 border rounded-lg mb-6 flex items-center text-sm sm:text-base ${alertClass}`}
          >
            {icon}
            <span>{reservation.message || "Acompanhe os detalhes da reserva."}</span>
          </div>

          {/* Timeline */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Status da Reserva</h4>
            <div className="flex flex-col relative ml-4">
              {statusTimeline.map((s, i) => {
                const currentIndex = statusTimeline.indexOf(status);
                const itemIndex = i;

                const isCompleted = itemIndex < currentIndex;
                const isActive = itemIndex === currentIndex;

                const color = isActive
                  ? "bg-blue-600"
                  : isCompleted
                  ? "bg-green-600"
                  : "bg-gray-300";

                return (
                  <div key={i} className="flex items-center mb-4 relative">
                    {i !== statusTimeline.length - 1 && (
                      <div className="absolute left-1.5 top-6 h-full w-0.5 bg-gray-300"></div>
                    )}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${color} text-white z-10`}
                    >
                      {isCompleted ? "✓" : ""}
                    </div>
                    <span className="ml-3 capitalize">{s}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Detalhes da reserva */}
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-4">Detalhes da reserva</h4>
              <div className="space-y-2 text-sm sm:text-base">
                {[
                  ["Cliente:", reservation.clientName],
                  ["Serviço:", reservation.service],
                  ["Check-in:", reservation.checkIn],
                  ["Check-out:", reservation.checkOut],
                  ["Duração:", reservation.duration],
                  ["Pet:", `${reservation.petName} (${reservation.petBreed})`],
                  ["Total:", reservation.total],
                ].map(([label, value], i) => (
                  <div key={i} className="flex justify-between border-b pb-2">
                    <span>{label}</span>
                    <span className={label === "Total:" ? "font-bold" : ""}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Localização e próximos passos */}
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-4">Localização</h4>
              <p className="flex items-center mb-4 text-sm sm:text-base">
                <FaMapMarkerAlt className="text-blue-600 mr-2" />
                {reservation.location}
              </p>

              <h4 className="text-lg font-semibold mb-4">Próximos passos</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                {reservation.nextSteps?.map((step, i) => (
                  <li key={i} className="flex items-center">
                    {step.icon && <step.icon className="mr-2" />}
                    {step.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservaConfirmation;
