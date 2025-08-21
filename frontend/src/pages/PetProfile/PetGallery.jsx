import React from "react";

const PetGallery = ({ images }) => {
  return (
    <div className="col-12">
      <h4 className="mb-3">Galeria</h4>
      <div className="gallery">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetGallery;
