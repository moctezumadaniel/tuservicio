import styles from "../../styles/CustomerProfileTemplate.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  tabToReservations,
  tabToReviews,
  tabToServices,
} from "../../redux/actions/ServicePage/PageStatus";
function TabButtons() {
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.pageStatus.currentTab);
  const handleTabPress = (event) => {
    switch (event.target.name) {
      case "Services":
        dispatch(tabToServices());
        break;
      case "Reviews":
        dispatch(tabToReviews());
        break;
      case "Reservations":
        dispatch(tabToReservations());
        break;
      default:
        return;
    }
  };
  console.log(currentTab);
  const servicesTabDescription = "Servicios";
  const reviewsTabDescription = "Reseñas";
  const reservationsTabDescription = "Reservaciones";

  return (
    <div>
      <div className={styles.TabButtonsContainer}>
        <button
          className={
            currentTab === "Reservations"
              ? styles.TabButtonActive
              : styles.TabButton
          }
          name="Reservations"
          type="button"
          onClick={handleTabPress}
        >
          {reservationsTabDescription}
        </button>
        <button
          className={
            currentTab === "Services"
              ? styles.TabButtonActive
              : styles.TabButton
          }
          name="Services"
          type="button"
          onClick={handleTabPress}
        >
          {servicesTabDescription}
        </button>
        <button
          className={
            currentTab === "Reviews" ? styles.TabButtonActive : styles.TabButton
          }
          name="Reviews"
          type="button"
          onClick={handleTabPress}
        >
          {reviewsTabDescription}
        </button>
      </div>
    </div>
  );
}

export default TabButtons;
