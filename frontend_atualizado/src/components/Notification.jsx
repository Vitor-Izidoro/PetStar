import React, { useState } from "react";
import { FaBell, FaSpinner, FaPaw, FaRegFrown } from "react-icons/fa";
import EmptyState from "./EmptyState";
import LoadingState from "./LoadingState";

export default function Notification() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [notifications, setNotifications] = useState([
        {
        id: 1,
        title: "Nova reserva recebida",
        message: "Cliente solicitou hospedagem para Rex.",
        type: "reservation",
        isRead: false,
        date: "2025-08-25 07:30",
        petName: "Rex",
        clientName: "João",
        link: "/reservas/1"
        },
        {
        id: 2,
        title: "Mensagem de Ana Silva",
        message: "Ana comentou sobre a última visita do Thor.",
        type: "message",
        isRead: false,
        date: "2025-08-25 10:15",
        senderName: "Ana Silva",
        avatar: "/images/ana.png"
        },
        {
        id: 3,
        title: "Reserva finalizada",
        message: "O cuidado de Mimi terminou com sucesso.",
        type: "reservation",
        isRead: false,
        date: "2025-08-24 18:00",
        petName: "Mimi",
        completedBy: "Lucas"
        }
    ]);

    const hasUnread = notifications.some(n => !n.isRead);

    const handleToogleDropdown = () => {
        // Abrir/fechar dropdown
        setShowNotifications(!showNotifications);

        // Marcar todas como lidas ao abrir
        if (!showNotifications) {
            setNotifications(prev =>
                prev.map(n => ({ ...n, isRead: true }))
            );
        }
    };

    const fetchNotifications = async () => {
        setIsLoading(true);
        // Simula requisição
        setTimeout(() => {
        // Aqui você poderia buscar dados de API
        setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="relative">
        <button
            onClick={handleToogleDropdown}
            className="relative p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition shadow-md"
        >
            <FaBell className="text-gray-700 text-xl" />
            {hasUnread && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full border-2 border-white"></span>
            )}
        </button>

        {/* Dropdown de notificações */}
        {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
            <div className="p-4 font-semibold border-b border-gray-200 text-gray-800">
                Notificações
            </div>

            {isLoading ? (
                <LoadingState
                title="Carregando notificações..."
                description="Por favor, aguarde enquanto buscamos os dados."
                icon={<FaSpinner size={50} className="text-indigo-400 animate-spin-slow" />}
                />
            ) : notifications.length === 0 ? (
                <EmptyState
                title="Sem notificações"
                description="Você está atualizado!"
                icon={<FaRegFrown size={50} className="text-red-400 animate-bounce-slow" />}
                actionLabel="Atualizar"
                onAction={fetchNotifications}
                />
            ) : (
                <ul className="max-h-64 overflow-y-auto">
                {notifications.map(notification => (
                    <li key={notification.id} className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100 cursor-pointer flex items-start gap-2">
                    <FaPaw className="text-indigo-600 mt-1" />
                    <div>
                        <p className="text-gray-800 font-medium">{notification.title}</p>
                        <p className="text-gray-500 text-sm">{notification.message}</p>
                        {notification.petName && <p className="text-gray-400 text-xs">Pet: {notification.petName}</p>}
                        {notification.clientName && <p className="text-gray-400 text-xs">Cliente: {notification.clientName}</p>}
                        {notification.date && <p className="text-gray-400 text-xs mt-1">{notification.date}</p>}
                    </div>
                    </li>
                ))}
                </ul>
            )}
            </div>
        )}
        </div>
    );
}