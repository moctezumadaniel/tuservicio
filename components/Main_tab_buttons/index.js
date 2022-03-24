import styles from "../../styles/MainTabButtons.module.css";
import ServicesButton from "./ServicesButton";
import MessagesButton from "./MessagesButton";
import PreferencesButton from "./PreferencesButton";
function MainTabButtons() {
  return (
    <div className={styles.MainTabButtonsContainer}>
      <ServicesButton />
      <MessagesButton />
      <PreferencesButton />
    </div>
  );
}

export default MainTabButtons;
