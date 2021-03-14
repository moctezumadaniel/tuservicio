import styles from '../../../styles/CustomerServiceDashboard.module.css'
import CreateReservation from './CreateReservation'
import CurrentReservations from './CurrentReservations'
import ReservationSettings from './ReservationSettings'
function ServiceReservations (){
    return(
        <div className={styles.ServiceReservationsContainer}>
            <CreateReservation/>
            <CurrentReservations/>
            <ReservationSettings/>
        </div>
    )
}
export default ServiceReservations