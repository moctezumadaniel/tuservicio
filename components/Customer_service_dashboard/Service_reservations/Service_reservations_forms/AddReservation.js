import styles from '../../../../styles/CustomerReservationsForms.module.css'
import {useDispatch} from 'react-redux'
import {changeCustomerReservationsFormToNone} from '../../../../redux/actions/CustomerReservationsForms'
function AddReservation (){
    const dispatch = useDispatch()
    const dateTitle = "Fecha"
    const scheduleTitle = "Reservación de:"
    const scheduleTo = " a "
    const customerName = "Nombre del cliente"
    const confirmButton = "ACEPTAR"
    function handleCloseForm(){
        dispatch(changeCustomerReservationsFormToNone())
    }
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}></div> 

            <div className={styles.ModalContainer}>
                <div className={styles.ReservationInputContainer}>
                    <div className={styles.AddReservationsTitle}>{dateTitle}</div>
                    <input type="date" className={styles.ReservationDateInput}/>
                </div>

                <div className={styles.ReservationInputContainer}>
                    <div className={styles.AddReservationsTitle}>{scheduleTitle}</div>
                    <input type="time" className={styles.ReservationScheduleInput}/>{scheduleTo}
                    <input type="time" className={styles.ReservationScheduleInput}/>
                </div>

                <div className={styles.ReservationInputContainer}>
                    <div className={styles.AddReservationsTitle}>{customerName}</div>
                    <input type="text" className={styles.ReservationNameInput}/>
                </div>

                <div className={styles.ConfirmReservationContainer}>
                    <button className={styles.ConfirmButton}>{confirmButton}</button>
                </div>
            </div>

        </div>
    )
}
export default AddReservation