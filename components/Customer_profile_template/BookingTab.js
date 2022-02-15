import { useSelector } from "react-redux";
import styles from "../../styles/CustomerProfileTemplate.module.css";

import BookingItem from "./BookingItem";
import BookingModal from "./BookingModal";
function BookingTab() {
  const pageInformation = useSelector((state) => state.userServicePage);

  return (
    <div className={styles.BookingMainContainer}>
      {pageInformation?.listOfSchedules.length > 0
        ? pageInformation?.listOfSchedules.map((schedule) => (
            <BookingItem
              key={schedule._id}
              day={schedule.day}
              start={schedule.start}
              end={schedule.end}
              description={schedule.description}
            />
          ))
        : ""}
      {/*<BookingModal/>*/}
    </div>
  );
}
export default BookingTab;
