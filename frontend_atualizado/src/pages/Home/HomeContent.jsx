import { useAuth } from "../../hooks/useAuth";
import Inicio from "./LandingPage";
import Caregivers from "../Caregivers/CaregiverList";

const HomeContent = () => {
  const { user } = useAuth();

  return !user ? <Caregivers /> : <Inicio />;
};

export default HomeContent;
