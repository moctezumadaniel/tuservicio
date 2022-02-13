import { useSelector } from "react-redux";
import styles from "../../styles/CustomerProfileTemplate.module.css";

function MoreInformation() {
  const pageInformation = useSelector((state) => state.userServicePage);
  const directionDescription = "Dirección";
  const serviceScore = pageInformation.score || "";
  const moreInformationDescription = "+ Información";
  const briefDescription = pageInformation.shortDescription || "";
  return (
    <div>
      <div className={styles.MoreInformationContainer}>
        <button className={styles.AddressButton}>{directionDescription}</button>
        <div>{serviceScore}</div>
        <button className={styles.MoreInformationButton}>
          {moreInformationDescription}
        </button>
      </div>
      <div className={styles.BriefDescription}>{briefDescription}</div>
    </div>
  );
}
export default MoreInformation;
