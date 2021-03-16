import styles from '../../../styles/CustomerServiceDashboard.module.css'

function CreateReservation (){
    const title = 'Crear y enviar'
    const date = 'Fecha'
    const schedule = 'Horario'
    const confirm = 'Confirmar'
    return(
        <div className={styles.NewReservationContainer}>
            <div className={styles.NewReservationTitle}>{title}</div>
            <div className={styles.NewReservationForm}>
                <div className={styles.DateForm}>
                    <div className={styles.DateTitle}>{date}</div>
                    <input type='date'/>
                </div>
                <div className={styles.ScheduleForm}>
                    <div className={styles.TimeTitle}>{schedule}</div>
                    <div className={styles.TimeFormContainer}>
                        <div>
                        De <input type='time'/>
                        </div>
                        <div>
                        Hasta <input type='time'/>
                        </div>
                    </div>
                </div>
                <button className={styles.ConfirmReservationButton}>{confirm}</button>
            </div>
        </div>
    )
}
export default CreateReservation