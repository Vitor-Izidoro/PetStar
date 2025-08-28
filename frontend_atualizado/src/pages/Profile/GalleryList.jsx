import React, { useState, useEffect } from "react";
import { FaPlusCircle, FaSpinner, FaInbox } from "react-icons/fa";
import Modal from "../../components/Modal";
import GalleryForm from "./GalleryForm";
import LoadingState from "../../components/LoadingState";
import EmptyState from "../../components/EmptyState";

export default function GalleryList() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormOpen, setFormOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Simula carregamento de fotos
  useEffect(() => {
    setTimeout(() => {
      setPhotos([
        {
          id: 1,
          title: "Passeio no parque",
          url: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=662&q=80",
        },
        {
          id: 2,
          title: "Brincando com o Thor",
          url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=843&q=80",
        },
      ]);
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleSavePhoto = (newPhoto) => {
    if (newPhoto.id) {
      setPhotos(photos.map((p) => (p.id === newPhoto.id ? newPhoto : p)));
    } else {
      newPhoto.id = photos.length + 1;
      setPhotos([...photos, newPhoto]);
    }
    setFormOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-2xl font-bold">Galeria de Fotos</h4>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="col-span-3 flex justify-center items-center min-h-[300px]">
            <LoadingState
              title="Carregando fotos..."
              description="Por favor, aguarde enquanto buscamos os dados."
              icon={<FaSpinner size={50} className="text-indigo-400 animate-spin-slow" />}
            />
          </div>
        ) : photos.length === 0 ? (
          <div className="col-span-3 flex justify-center items-center min-h-[300px]">
            <EmptyState
              title="Nenhuma foto encontrada"
              description="Parece que você ainda não adicionou nenhuma foto."
              icon={<FaInbox size={50} className="text-indigo-400 animate-bounce-slow" />}
              actionLabel="Adicionar Foto"
              onAction={() => setFormOpen(true)}
            />
          </div>
        ) : (
          <>
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
                onClick={() => {
                  setSelectedPhoto(photo);
                  setFormOpen(true);
                }}
              >
                <img src={photo.url} alt={photo.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h5 className="font-semibold">{photo.title}</h5>
                </div>
              </div>
            ))}

            {/* Card Adicionar Foto */}
            <div
              className="bg-white border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-gray-50"
              onClick={() => {
                setSelectedPhoto(null);
                setFormOpen(true);
              }}
            >
              <FaPlusCircle className="text-4xl text-blue-600 mb-2" />
              <h5 className="font-semibold">Adicionar Foto</h5>
              <p className="text-gray-500 text-center text-sm">
                Clique para adicionar uma nova foto à sua galeria
              </p>
            </div>
          </>
        )}
      </div>

      {/* Modal Form */}
      <Modal isOpen={isFormOpen} onClose={() => setFormOpen(false)}>
        <GalleryForm photo={selectedPhoto} onSave={handleSavePhoto} />
      </Modal>
    </div>
  );
}
