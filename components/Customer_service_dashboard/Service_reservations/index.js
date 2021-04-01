import styles from '../../../styles/CustomerServiceDashboard.module.css'
import CreateReservation from './CreateReservation'
import CurrentReservations from './CurrentReservations'
import ReservationsSchedule from './ReservationsSchedule'
function ServiceReservations (){
    return(
        <div className={styles.ServiceReservationsContainer}>
            <CreateReservation/>
            <CurrentReservations/>
            <ReservationsSchedule/>
        </div>
    )
}
export default ServiceReservations