import styles from "../../styles/UserLogin.module.css";
import { useAuth0 } from "@auth0/auth0-react";

export function ButtonUserLogin() {
  const { loginWithRedirect } = useAuth0();
  const buttonDescription = "Accede a tú cuenta o crea una";
  return (
    <div className={styles.LoginMainContainer}>
      <div className={styles.LoginButtonContainer}>
        <button
          className={styles.LoginButton}
          onClick={() => loginWithRedirect()}
        >
          {buttonDescription}
        </button>
      </div>
    </div>
  );
}

export function UserLogin() {
  const { loginWithRedirect } = useAuth0();
  const title =
    "Accede a tú cuenta o crea una para reservar, contactar y almacenar tus servicios";
  const buttonDescription = "Accede a tú cuenta o crea una";
  return (
    <div className={styles.LoginMainContainer}>
      <div className={styles.TitleContainer}>{title}</div>
      <div className={styles.LoginButtonContainer}>
        <button
          className={styles.LoginButton}
          onClick={() => loginWithRedirect()}
        >
          {buttonDescription}
        </button>
      </div>
    </div>
  );
}
