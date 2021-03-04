import styles from '../../styles/CustomerProfileTemplate.module.css'

function TabButtons (){
    const servicesTabDescription = "Servicios";
    const reviewsTabDescription = "Reseñas";
    const reservationsTabDescription = "Reservaciones"
    const addReviewButtonDescription = "AÑADIR RESEÑA" /*MODIFICAR MI RESENA (Cuando detecte que esta añadida)*/ 
    return(
        <div>
            <div className={styles.TabButtonsContainer}>
                <button className={styles.TabButton}>{servicesTabDescription}</button>
                <button className={styles.TabButtonActive}>{reviewsTabDescription}</button>
                <button className={styles.TabButton}>{reservationsTabDescription}</button>
            </div>
            <div className={styles.AddReviewContainer}>
                <button className={styles.AddReviewButton}>{addReviewButtonDescription}</button>
            </div>
        </div>
    )
} 

export default TabButtons