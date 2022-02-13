import styles from "../../styles/CustomerProfileTemplate.module.css";

function ReviewItemTemplate(props) {
  const reviewScore = props.score || "";
  const titleScore = props.title || "";
  const descriptionScore = props.description || "";
  return (
    <div className={styles.ReviewItemContainer}>
      <div className={styles.MainReviewContainer}>
        <div>{titleScore}</div>
        <div>{reviewScore}</div>
      </div>
      <div>{descriptionScore}</div>
    </div>
  );
}
export default ReviewItemTemplate;
