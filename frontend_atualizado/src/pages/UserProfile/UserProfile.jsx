import React from "react";
import SidebarPerfil from "./SidebarPerfil";
import TabsPerfil from "./TabsPerfil";

const UserProfile = ({ user }) => {
  return (
    <div className="container mt-4 mb-5" id="page-content">
      <div className="row">
        <div className="col-lg-4">
          <SidebarPerfil user={user} />
        </div>
        <div className="col-lg-8">
          <TabsPerfil user={user} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
