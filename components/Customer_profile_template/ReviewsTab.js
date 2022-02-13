import styles from "../../styles/CustomerProfileTemplate.module.css";
import ReviewItemTemplate from "./ReviewItemTemplate";
function ReviewsTab() {
  const pageInformation = useSelector((state) => state.userServicePage);

  return (
    <div className={styles.ReviewsMainContainer}>
      <ReviewItemTemplate />
      <ReviewItemTemplate />
      <ReviewItemTemplate />
      <ReviewItemTemplate />
      <ReviewItemTemplate />
      <ReviewItemTemplate />
      <ReviewItemTemplate />
      <ReviewItemTemplate />
      <ReviewItemTemplate />
    </div>
  );
}
export default ReviewsTab;
