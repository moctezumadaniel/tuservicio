import {useSelector} from 'react-redux'
import ServiceTabButtons from './ServiceTabButtons'
import ServiceInformation from './Customer_profile/ServiceInformation'
import ServiceContactAndMoreInfo from './Customer_profile/ServiceContactAndMoreInfo'
import styles from '../../styles/CustomerServiceDashboard.module.css'
import ServiceReservations from './Service_reservations'
import CustomerTools from './Customer_tools'
import ServicesList from './Customer_profile/ServicesList'
import ProfileForms from './Customer_profile/Customer_profile_forms'
function CustomerServiceDashboard (){
    const currentGlobalTab = useSelector(state=>state.globalTab)
    const currentTab = useSelector(state=>state.customerDashboardTab)
    const currentTool = useSelector(state=>state.customerActiveTool)
    window.scrollTo(0,0)
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
                <ProfileForms/>
            </div>
            :currentTab === 'Reservations'?
            <ServiceReservations/>
            :<CustomerTools/>}   
        </div>
        :""
    )
}
export default CustomerServiceDashboard