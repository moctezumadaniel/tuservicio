import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/MainTabButtons.module.css";
import { changeGlobalToPreferences } from "../../redux/actions/GlobalTab";
import { changeUserPreferencesFormToNone } from "../../redux/actions/UserPreferencesForms";

const PreferencesButton = () => {
  const currentTab = useSelector((state) => state.globalTab);

  const currentPreferenceForm = useSelector(
    (state) => state.userPreferencesForms
  );
  const closeDescription = "< SALIR";

  const dispatch = useDispatch();

  function handlePreferencesPress() {
    dispatch(changeGlobalToPreferences());
  }

  function handleClosePreferenceForm() {
    dispatch(changeUserPreferencesFormToNone());
  }
  return (
    <>
      {currentPreferenceForm !== "None" && currentTab === "Preferences" ? (
        <button
          className={styles.MainCloseChat}
          onClick={handleClosePreferenceForm}
        >
          {closeDescription}
        </button>
      ) : (
        <button
          className={
            currentTab === "Preferences"
              ? styles.MainTabButtonActive
              : styles.MainTabButton
          }
          onClick={handlePreferencesPress}
        >
          Preferencias
        </button>
      )}
    </>
  );
};

export default PreferencesButton;
