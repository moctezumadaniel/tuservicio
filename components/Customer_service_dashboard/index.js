import {useSelector} from 'react-redux'
import ServiceTabButtons from './ServiceTabButtons'
import ServiceInformation from './ServiceInformation'
import ServiceContactAndMoreInfo from './ServiceContactAndMoreInfo'
import styles from '../../styles/CustomerServiceDashboard.module.css'

function CustomerServiceDashboard (){
    const currentGlobalTab = useSelector(state=>state.globalTab)
    return(
        currentGlobalTab === 'Services'?
        <div>
            <ServiceTabButtons/>
            <div className={styles.ServiceInformationTabContainer}>
                <ServiceInformation/>
                <ServiceContactAndMoreInfo/>
            </div>
        </div>
        :""
    )
}
export default CustomerServiceDashboard