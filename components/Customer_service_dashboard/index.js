import {useSelector} from 'react-redux'
import ServiceTabButtons from './ServiceTabButtons'
import ServiceInformation from './ServiceInformation'
import ServiceContactAndMoreInfo from './ServiceContactAndMoreInfo'
import styles from '../../styles/CustomerServiceDashboard.module.css'
import ServiceReservations from './Service_reservations'
import ServiceTools from './Service_tools'
import ServicesList from './ServicesList'
function CustomerServiceDashboard (){
    const currentGlobalTab = useSelector(state=>state.globalTab)
    const currentTab = useSelector(state=>state.customerDashboardTab)
    return(
        currentGlobalTab === 'Services'?
        <div>
            <ServiceTabButtons/>
            {currentTab === 'Profile' ?
            <div className={styles.ServiceInformationTabContainer}>
                <ServiceInformation/>
                <ServiceContactAndMoreInfo/> 
                <ServicesList/>
            </div>
            :currentTab === 'Reservations'?
            <ServiceReservations/>
            :<ServiceTools/>}   
        </div>
        :""
    )
}
export default CustomerServiceDashboard