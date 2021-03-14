import styles from '../../../styles/CustomerServiceDashboard.module.css'
import CurrentReservations from './CurrentReservations'
function ServiceReservations (){
    return(
        <div className={styles.ServiceReservationsContainer}>
            <CurrentReservations/>
        </div>
    )
}
export default ServiceReservations