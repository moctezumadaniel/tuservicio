import styles from '../../../styles/UserReservations.module.css'
function UserReservations (){
    
    return(
        <div className={styles.ListOfReservationsContainer}>
            <ListOfUserReservations/>
             
        </div>
    )
}
export default UserReservations

function ListOfUserReservations(){
    const defaultPage = "Aún no tienes reservaciones"
    const schedule = '21 de Marzo de 8:00am a 8:30am';
    const customer = 'Nombre Completo del Cliente'
    const description = 'Descripcion corta del motivo de la reservacion';
    const configureButton = 'CANCELAR'
    const doneButton = 'CONTACTAR'
    return(
        <div className={styles.ListOfReservationsContainer}>
            {/*<div className={styles.DefaultPageTitle}>{defaultPage}</div>*/}
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
    )
}