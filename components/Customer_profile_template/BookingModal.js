import styles from '../../styles/CustomerProfileTemplate.module.css'
function BookingModal(){
    const modalDescription = "Reservar cita"
    const scheduleSelected = "16:00 a 18:00"
    const clientSelected = "Nombre del usuario SA de CV"
    const confirmDescription = "CONFIRMAR"
    const cancelDescription = "CANCELAR"
    return(
        <div className={styles.BookingModalMain}>
            <div className ={styles.BookingModal}>
                {modalDescription}<br/>
                {scheduleSelected}<br/>
                {clientSelected}
                <div className={styles.BookingModalButtons}>
                    <button className={styles.BookingModalCancel}>{cancelDescription}</button>
                    <button className={styles.BookingModalConfirm}>{confirmDescription}</button>
                </div>
            </div>
        </div>
    )
}
export default BookingModal
