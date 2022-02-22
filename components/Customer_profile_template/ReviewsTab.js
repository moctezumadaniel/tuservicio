import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/CustomerProfileTemplate.module.css";
import NewReview from "./Modals/NewReview";
import ReviewItemTemplate from "./ReviewItemTemplate";
function ReviewsTab() {
  const [formStatus, setFormStatus] = useState("");
  const handleAddReview = () => {
    setFormStatus("NewReview");
  };
  return (
    <div className={styles.ReviewsMainContainer}>
      <div className={styles.NewReviewContainer}>
        {formStatus === "NewReview" && <NewReview />}
        <div className={styles.NewReviewButtonContainer}>
          <button onClick={handleAddReview} className={styles.NewReviewButton}>
            AGREGAR RESEÑA
          </button>
        </div>
      </div>
      <div className={styles.ReviewsContainer}>
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
    </div>
  );
}
export default ReviewsTab;
