import { useSelector } from "react-redux";
import styles from "../../styles/CustomerProfileTemplate.module.css";

function TopBar() {
  const pageInformation = useSelector((state) => state.userServicePage);
  const sendMessageDescription = "ENVIAR MENSAJE";
  const profileImage = "IMAGEN DE PERFIL";
  const phoneCallDescription = `LLAMAR AL ${pageInformation.phoneNumber}`;
  const CustomerName = pageInformation.name;
  return (
    <div>
      <div className={styles.TopBarContainer}>
        <button className={styles.MessageButton}>
          {sendMessageDescription}
        </button>
        <image className={styles.ProfileImage}>{profileImage}</image>
        <button className={styles.PhoneCallButton}>
          {phoneCallDescription}
        </button>
      </div>
      <div className={styles.CustomerName}>{CustomerName}</div>
    </div>
  );
}
export default TopBar;
