import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "../../styles/LoadingScreens.module.css";
import dynamic from "next/dynamic";

const AppUserContainer = dynamic(() => import("../App_user_container"));
const AppCustomerContainer = dynamic(() => import("../App_customer_container"));

function LoadingScreen() {
  const loadingMessage = "Cargando...";
  return <div className={styles.LoadingMessage}>{loadingMessage}</div>;
}
function AppMainContainer() {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const currentPlatform = useSelector((state) => state.platformType);
  return currentPlatform === "Customer" && isAuthenticated ? (
    <AppCustomerContainer />
  ) : !isLoading ? (
    <AppUserContainer />
  ) : (
    <LoadingScreen />
  );
}
export default AppMainContainer;
