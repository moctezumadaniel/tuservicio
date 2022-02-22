import { useState } from "react";
import styles from "./CustomerProfileModals.module.css";
const NewReview = () => {
  const titles = {
    review: "Califíca de 1 a 10",
    title: "Escríbe el título de tu reseña",
    description: "Escribe los detalles de tu experiencia ",
  };
  const [newReview, setNewReview] = useState({
    review: "",
    title: "",
    description: "",
  });

  const handleReviewChange = (event) => {
    switch (event.target.name) {
      case "review":
        if (
          (event.target.value >= 1 && event.target.value <= 10) ||
          event.target.value === ""
        ) {
          setNewReview((state) => {
            return { ...state, review: event.target.value };
          });
        }
        break;
      case "title":
        setNewReview((state) => {
          return { ...state, title: event.target.value };
        });
        break;
      case "description":
        setNewReview((state) => {
          return { ...state, description: event.target.value };
        });
        break;
      default:
        return;
    }
  };
  return (
    <div className={styles.NewReviewContainer}>
      <div className={styles.ReviewTitleContainer}>
        <input
          type="number"
          className={styles.Review}
          max={10}
          min={1}
          placeholder={titles.review}
          value={newReview.review}
          onChange={(e) => handleReviewChange(e)}
          name="review"
        ></input>
        <input
          type="text"
          className={styles.Title}
          placeholder={titles.title}
          value={newReview.title}
          onChange={handleReviewChange}
          name="title"
        />
      </div>

      <textarea
        className={styles.ReviewDescription}
        placeholder={titles.description}
        value={newReview.description}
        onChange={handleReviewChange}
        name="description"
      ></textarea>
    </div>
  );
};

export default NewReview;
