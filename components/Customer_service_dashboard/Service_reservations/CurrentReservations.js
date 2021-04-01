import styles from '../../../styles/CustomerPendingReservations.module.css'
function CurrentReservations(){
    const title = 'Por atender';
    const addReservation = 'AGREGAR RESERVACIÓN'
    const schedule = '21 de Marzo de 8:00am a 8:30am';
    const customer = 'Nombre Completo del Cliente'
    const description = 'Descripcion corta del motivo de la reservacion';
    const configureButton = 'EDITAR'
    const doneButton = 'ATENDIDA'
    return(
        <div className={styles.MainContainer}>
{/*TITLE AND BUTTON TO ADD MANUAL RESERVATION */}
            <div className={styles.TitleContainer}>{title}</div>

            <div className={styles.AddReservationContainer}>
                <button className={styles.AddReservationButton}>{addReservation}</button>
            </div>

{/*LIST OF PENDING RESERVATIONS */}
            <div className={styles.ListOfReservationsContainer}>
            {/*RESERVATION ITEM */}
                <div className={styles.ReservationItem}>

                    <div className={styles.ItemSchedule}>{schedule}</div>
                    <div className={styles.ItemCustomerName}>{customer}</div>
                    <div className={styles.ItemDescription}>{description}</div>

                    <div className={styles.ReservationItemButtonsContainer}>
                        <button className={styles.EditReservationButton}>{configureButton}</button>
                        <button className={styles.AttendedReservationButton}>{doneButton}</button>
                    </div>

                </div>
                {/*RESERVATION ITEM */}
                <div className={styles.ReservationItem}>
                    
                    <div className={styles.ItemSchedule}>{schedule}</div>
                    <div className={styles.ItemCustomerName}>{customer}</div>
                    <div className={styles.ItemDescription}>{description}</div>

                    <div className={styles.ReservationItemButtonsContainer}>
                        <button className={styles.EditReservationButton}>{configureButton}</button>
                        <button className={styles.AttendedReservationButton}>{doneButton}</button>
                    </div>

                </div>
                {/*RESERVATION ITEM */}
                <div className={styles.ReservationItem}>
                    
                    <div className={styles.ItemSchedule}>{schedule}</div>
                    <div className={styles.ItemCustomerName}>{customer}</div>
                    <div className={styles.ItemDescription}>{description}</div>

                    <div className={styles.ReservationItemButtonsContainer}>
                        <button className={styles.EditReservationButton}>{configureButton}</button>
                        <button className={styles.AttendedReservationButton}>{doneButton}</button>
                    </div>

                </div>
                {/*RESERVATION ITEM */}
                <div className={styles.ReservationItem}>
                    
                    <div className={styles.ItemSchedule}>{schedule}</div>
                    <div className={styles.ItemCustomerName}>{customer}</div>
                    <div className={styles.ItemDescription}>{description}</div>

                    <div className={styles.ReservationItemButtonsContainer}>
                        <button className={styles.EditReservationButton}>{configureButton}</button>
                        <button className={styles.AttendedReservationButton}>{doneButton}</button>
                    </div>

                </div>
                {/*RESERVATION ITEM */}
                <div className={styles.ReservationItem}>
                    
                    <div className={styles.ItemSchedule}>{schedule}</div>
                    <div className={styles.ItemCustomerName}>{customer}</div>
                    <div className={styles.ItemDescription}>{description}</div>

                    <div className={styles.ReservationItemButtonsContainer}>
                        <button className={styles.EditReservationButton}>{configureButton}</button>
                        <button className={styles.AttendedReservationButton}>{doneButton}</button>
                    </div>

                </div>
                {/*RESERVATION ITEM */}
                <div className={styles.ReservationItem}>
                    
                    <div className={styles.ItemSchedule}>{schedule}</div>
                    <div className={styles.ItemCustomerName}>{customer}</div>
                    <div className={styles.ItemDescription}>{description}</div>

                    <div className={styles.ReservationItemButtonsContainer}>
                        <button className={styles.EditReservationButton}>{configureButton}</button>
                        <button className={styles.AttendedReservationButton}>{doneButton}</button>
                    </div>

                </div>
                {/*RESERVATION ITEM */}
                <div className={styles.ReservationItem}>
                    
                    <div className={styles.ItemSchedule}>{schedule}</div>
                    <div className={styles.ItemCustomerName}>{customer}</div>
                    <div className={styles.ItemDescription}>{description}</div>

                    <div className={styles.ReservationItemButtonsContainer}>
                        <button className={styles.EditReservationButton}>{configureButton}</button>
                        <button className={styles.AttendedReservationButton}>{doneButton}</button>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default CurrentReservations