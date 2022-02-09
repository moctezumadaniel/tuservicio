import styles from "../../styles/Preferences.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  changePlatformToCustomer,
  changePlatformToUser,
} from "../../redux/actions/PlatformType";
import {
  changeUserPreferencesFormToName,
  changeUserPreferencesFormToPhoneNumber,
  changeUserPreferencesFormToEmailForm,
  changeUserPreferencesFormToPassword,
} from "../../redux/actions/UserPreferencesForms";
import { customerLogout } from "../../redux/actions/LoginsAndLogouts";
import { UserLogin } from "../../components/User_login";
import { useAuth0 } from "@auth0/auth0-react";
import PreferencesForms from "./Preferences_forms";

function PreferencesTab() {
  const titles = {
    //NULL INFO
    NullName: "Escribe tu nombre",
    NullPhoneNumber: "Escribe tu número de teléfono",
    NullEmail: "Escribe tu correo electrónico",
  };
  const currentGlobalTab = useSelector((state) => state.globalTab);
  const currentPlatform = useSelector((state) => state.platformType);
  const userPreferences = useSelector((state) => state.userInformation);
  const dispatch = useDispatch();
  const nameDescription = "Nombre";
  const nameButton = "CAMBIAR NOMBRE";
  const phoneNumberDescription = "Telefono";
  const phoneNumberButton = "CAMBIAR TELEFONO";
  const emailDesciption = "Correo electrónico";
  const emailButton = "CAMBIAR CORREO";
  const passwordDescription = "Contraseña";
  const password = "*********************";
  const paswordButton = "CAMBIAR CONTRASEÑA";
  const reviewsTitle = "Reseñas";
  const reviewsDescription = "Aqui estan las reseñas que has compartido";
  const reviewsButton = "ABRIR RESEÑAS";
  const feedbackTitle = "Problemas y comentarios";
  const feedbackDescription =
    "Aqui estan los comentarios y problemas que nos has enviado";
  const feedbackButton = "ABRIR PROBLEMAS Y COMENTARIOS";
  const changeToCustomerDescription = "Cambiar a proveedor de servicios";
  const changeToUserDescription = "Cambiar a cliente de servicios";
  const LogoutDescription = "Cerrar sesión";
  const { logout } = useAuth0();
  const { isAuthenticated, isLoading } = useAuth0();
  function handleChangeToCustomerPress() {
    if (userPreferences.userId == "") return;
    dispatch(changePlatformToCustomer());
  }
  function handleChangeToUserPress() {
    dispatch(changePlatformToUser(), dispatch(customerLogout()));
  }

  function openUserNameForm() {
    dispatch(changeUserPreferencesFormToName());
  }
  function openPhoneNumberForm() {
    dispatch(changeUserPreferencesFormToPhoneNumber());
  }
  function openEmailForm() {
    dispatch(changeUserPreferencesFormToEmailForm());
  }
  function openPasswordForm() {
    dispatch(changeUserPreferencesFormToPassword());
  }

  return currentGlobalTab === "Preferences" && isAuthenticated && !isLoading ? (
    <>
      <div className={styles.PreferencesMainContaner}>
        {currentPlatform === "User" ? (
          <button
            type="button"
            className={styles.ChangePlatformToCustomer}
            onClick={handleChangeToCustomerPress}
          >
            {changeToCustomerDescription}
          </button>
        ) : (
          <button
            className={styles.ChangePlatformToUser}
            onClick={handleChangeToUserPress}
          >
            {changeToUserDescription}
          </button>
        )}

        <div className={styles.PreferenceItem}>
          <div className={styles.ItemHeader}>{nameDescription}</div>
          <div className={styles.ItemDescription}>
            {userPreferences.name || titles.NullName}
          </div>
          <button
            className={styles.ItemButton}
            onClick={() => openUserNameForm()}
          >
            {nameButton}
          </button>
        </div>

        <div className={styles.PreferenceItem}>
          <div className={styles.ItemHeader}>{phoneNumberDescription}</div>
          <div className={styles.ItemDescription}>
            {userPreferences.phoneNumber || titles.NullPhoneNumber}
          </div>
          <button
            className={styles.ItemButton}
            onClick={() => openPhoneNumberForm()}
          >
            {phoneNumberButton}
          </button>
        </div>

        <div className={styles.PreferenceItem}>
          <div className={styles.ItemHeader}>{emailDesciption}</div>
          <div className={styles.ItemDescription}>
            {userPreferences.email || titles.NullEmail}
          </div>
          <button className={styles.ItemButton} onClick={() => openEmailForm()}>
            {emailButton}
          </button>
        </div>

        <div className={styles.PreferenceItem}>
          <div className={styles.ItemHeader}>{passwordDescription}</div>
          <div className={styles.ItemDescription}>{password}</div>
          <button
            className={styles.ItemButton}
            onClick={() => openPasswordForm()}
          >
            {paswordButton}
          </button>
        </div>

        <div className={styles.PreferenceItem}>
          <div className={styles.ItemHeader}>{reviewsTitle}</div>
          <div className={styles.ItemDescription}>{reviewsDescription}</div>
          <button className={styles.ItemButton}>{reviewsButton}</button>
        </div>

        <div className={styles.PreferenceItem}>
          <div className={styles.ItemHeader}>{feedbackTitle}</div>
          <div className={styles.ItemDescription}>{feedbackDescription}</div>
          <button className={styles.ItemButton}>{feedbackButton}</button>
        </div>

        <button
          type="button"
          className={styles.LogoutButton}
          onClick={() =>
            logout({
              returnTo: globalThis.location.href,
            })
          }
        >
          {LogoutDescription}
        </button>
      </div>
      <PreferencesForms />
    </>
  ) : currentGlobalTab === "Preferences" ? (
    <UserLogin />
  ) : (
    ""
  );
}
export default PreferencesTab;
