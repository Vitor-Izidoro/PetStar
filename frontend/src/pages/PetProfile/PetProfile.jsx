import React from "react";
import PetInfo from "./PetInfo";
import PetAbout from "./PetAbout";
import PetCare from "./PetCare";
import PetGallery from "./PetGallery";

const PetProfile = ({ pet }) => {
  return (
    <div className="container mt-4 mb-5" id="page-content">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="pet-profile card profile-card">
            <img
              src={pet.avatar}
              alt={pet.name}
              className="pet-avatar"
            />
            <h2 className="pet-name">{pet.name}</h2>
            <span className="pet-breed">
              {pet.breed} • {pet.age}
            </span>

            <PetInfo
              gender={pet.gender}
              weight={pet.weight}
              size={pet.size}
            />

            <div className="row text-start">
              <PetAbout description={pet.description} />
              <PetCare cares={pet.cares} />
              <PetGallery images={pet.images} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetProfile;
