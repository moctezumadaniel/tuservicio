import { useDispatch, useSelector } from "react-redux";
import { openNewReviewModal } from "../../redux/actions/ServicePage/PageStatus";
import styles from "../../styles/CustomerProfileTemplate.module.css";
import ReviewItemTemplate from "./ReviewItemTemplate";
function ReviewsTab() {
  const dispatch = useDispatch();
  const pageInformation = useSelector((state) => state.customerInformation);
  const handleAddReview = () => {
    dispatch(openNewReviewModal());
  };
  return (
    <div className={styles.ReviewsMainContainer}>
      <div>
        <button onClick={handleAddReview}>AGREGAR RESEÑA</button>
      </div>
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
