import {useSelector} from 'react-redux'
import ServiceTabButtons from './ServiceTabButtons'
import ServiceInformation from './ServiceInformation'
import ServiceContactAndMoreInfo from './ServiceContactAndMoreInfo'
import styles from '../../styles/CustomerServiceDashboard.module.css'
import ServiceReservations from './Service_reservations'
import CustomerTools from './Customer_tools'
import ServicesList from './ServicesList'
function CustomerServiceDashboard (){
    const currentGlobalTab = useSelector(state=>state.globalTab)
    const currentTab = useSelector(state=>state.customerDashboardTab)
    const currentTool = useSelector(state=>state.customerActiveTool)
    return(
        currentGlobalTab === 'Services'?
        <div>
            {currentTool === 'None'?
                <ServiceTabButtons/>
            :""}
            
            {currentTab === 'Profile' ?
            <div className={styles.ServiceInformationTabContainer}>
                <ServiceInformation/>
                <ServiceContactAndMoreInfo/> 
                <ServicesList/>
            </div>
            :currentTab === 'Reservations'?
            <ServiceReservations/>
            :<CustomerTools/>}   
        </div>
        :""
    )
}
export default CustomerServiceDashboard