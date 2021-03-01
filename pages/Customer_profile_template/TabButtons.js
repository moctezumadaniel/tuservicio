import styles from '../../styles/CustomerProfileTemplate.module.css'

function TabButtons (){
    const servicesTabDescription = "Servicios";
    const reviewsTabDescription = "Reseñas";
    const reservationsTabDescription = "Reservaciones"
    return(
        <div className={styles.TabButtonsContainer}>
            <button className={styles.TabButtonActive}>{servicesTabDescription}</button>
            <button className={styles.TabButton}>{reviewsTabDescription}</button>
            <button className={styles.TabButton}>{reservationsTabDescription}</button>
        </div>
    )
} 

export default TabButtons