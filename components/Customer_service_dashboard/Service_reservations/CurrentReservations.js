import styles from '../../../styles/CustomerServiceDashboard.module.css'

function CurrentReservations(){
    const title = 'Por atender';
    const customer = 'Nombre Completo del Cliente'
    const schedule = '8:00am a 8:30am';
    const description = 'Descripcion corta del motivo de la reservacion';
    const doneButton = 'ATENDIDA'
    const showButton = 'Mostrar'
    const hideButton = 'Ocultar'
    return(
        <div>
            <div className={styles.CurrentReservationsTitle}>{title}</div>
                <div className={styles.CurrentReservationItem}>
                    <div>
                        <div>{customer}</div>
                        <div className={styles.ReservationSchedule}>{schedule}</div>
                    </div>
                    <div className={styles.ReservationDescription}>{description}</div>
                    <button className={styles.DoneButton}>{doneButton}</button>
                </div>
        </div>
    )
}
export default CurrentReservations