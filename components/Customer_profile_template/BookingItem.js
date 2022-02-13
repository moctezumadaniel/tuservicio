import styles from "../../styles/CustomerProfileTemplate.module.css";

function BookingItem(props) {
  const schedule = `${props.day} de ${props.start} a ${props.end}`;
  const bookingButton = "RESERVAR";
  return (
    <div className={styles.BookingItemContainer}>
      <div className={styles.ItemSchedule}>{schedule}</div>
      <div className={styles.ItemDescription}>{props.description}</div>
      <button className={styles.BookingButton}>{bookingButton}</button>
    </div>
  );
}
export default BookingItem;
