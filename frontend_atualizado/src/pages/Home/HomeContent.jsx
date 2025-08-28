import { useAuth } from "../../hooks/useAuth";
import Inicio from "./LandingPage";
import CaregiverPage from "../Caregivers/CaregiverPage";

const HomeContent = () => {
  const { user } = useAuth();

  return !user ? <CaregiverPage /> : <Inicio />;
};

export default HomeContent;
