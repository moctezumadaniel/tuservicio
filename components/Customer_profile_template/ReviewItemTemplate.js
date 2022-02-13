import styles from '../../styles/CustomerProfileTemplate.module.css'

function ReviewItemTemplate(){
    const reviewScore = "5 star";
    const titleScore = "Título de la reseña";
    const descriptionScore = "Esta es una descipción de la reseña, con un limete de hasta 1000 caracteres"
    return(
        <div className={styles.ReviewItemContainer}>
            <div className={styles.MainReviewContainer}>
                <div>{titleScore}</div>
                <div>{reviewScore}</div>
            </div>
            <div>{descriptionScore}</div>
        </div>
    )
}
export default ReviewItemTemplate