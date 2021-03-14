import styles from '../../../styles/CustomerServiceDashboard.module.css'
import CurrentReservations from './CurrentReservations'
import ReservationSettings from './ReservationSettings'
function ServiceReservations (){
    return(
        <div className={styles.ServiceReservationsContainer}>
            <CurrentReservations/>
            <ReservationSettings/>
        </div>
    )
}
export default ServiceReservations