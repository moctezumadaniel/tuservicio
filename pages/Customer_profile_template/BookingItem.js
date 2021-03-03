import styles from '../../styles/CustomerProfileTemplate.module.css'

function BookingItem (){
    const schedule = "Martes 21 de febrero 2021 de 16:30 a 17:40";
    const description = "Mesa 23 de Nombre completo de una persona";
    const bookingButton = "Reservar"

    return (
        <div className={styles.BookingItemContainer}>
            <div className={styles.ItemSchedule}>{schedule}</div>
            <div className={styles.ItemDescription}>{description}</div>
            <button className={styles.BookingButton}>{bookingButton}</button>
        </div>
    )
}
export default BookingItem