import React, { useState } from "react";

export default function GalleryForm({ photo, onSave }) {
  const [title, setTitle] = useState(photo?.title || "");
  const [url, setUrl] = useState(photo?.url || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...photo, title, url });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 outline-none"
          placeholder="Digite o título da foto"
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">URL da imagem</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 outline-none"
          placeholder="Cole o link da imagem"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Salvar
      </button>
    </form>
  );
}
