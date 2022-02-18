import { useDispatch, useSelector } from "react-redux";
import {
  openAddress,
  openMoreInformation,
} from "../../redux/actions/ServicePage/PageStatus";
import styles from "../../styles/CustomerProfileTemplate.module.css";

function MoreInformation() {
  const dispatch = useDispatch();
  const moreInfoStatus = useSelector(
    (state) => state.pageStatus.moreInformation
  );
  const pageInformation = useSelector((state) => state.customerInformation);
  const handleMoreInfoPress = (event) => {
    switch (event.target.name) {
      case "MoreInformation":
        dispatch(openMoreInformation());
        break;
      case "Address":
        dispatch(openAddress());
        break;
      default:
        return;
    }
  };
  const directionDescription = "Dirección";
  const serviceScore = pageInformation?.score || "";
  const moreInformationDescription = "+ Información";
  const shortDescription =
    pageInformation?.shortDescription || "Sin descripción del servicio";
  const address = pageInformation?.address || "Sin dirección del servicio";
  const moreInformation =
    pageInformation?.moreInformation || "Sin descripción extra del servicio";
  return (
    <div>
      <div className={styles.MoreInformationContainer}>
        <button
          className={styles.AddressButton}
          type="button"
          name="Address"
          onClick={handleMoreInfoPress}
        >
          {directionDescription}
        </button>
        <div>{serviceScore}</div>
        <button
          className={styles.MoreInformationButton}
          type="button"
          name="MoreInformation"
          onClick={handleMoreInfoPress}
        >
          {moreInformationDescription}
        </button>
      </div>
      <div className={styles.BriefDescription}>{shortDescription}</div>
      {moreInfoStatus === "Address" && (
        <div className={styles.BriefDescription}>{address}</div>
      )}
      {moreInfoStatus === "MoreInformation" && (
        <div className={styles.BriefDescription}>{moreInformation}</div>
      )}
    </div>
  );
}
export default MoreInformation;
