import styles from '../../../styles/CustomerServiceDashboard.module.css'
import CurrentReservations from './CurrentReservations'
import ReservationsSchedule from './ReservationsSchedule'
import ServiceReservationsForms from './Service_reservations_forms'
function ServiceReservations (){
    return(
        <div className={styles.ServiceReservationsContainer}>
            <CurrentReservations/>
            <ReservationsSchedule/>
            <ServiceReservationsForms/>
        </div>
    )
}
export default ServiceReservations