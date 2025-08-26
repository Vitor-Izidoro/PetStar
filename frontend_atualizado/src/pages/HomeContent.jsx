import React from "react";
import { useAuth } from "../hooks/useAuth";
import Inicio from "./Inicio/Inicio";
import Cuidadores from "./Cuidadores/Cuidadores";

const HomeContent = () => {
  const { user } = useAuth();

  return !user ? <Cuidadores /> : <Inicio />;
};

export default HomeContent;
