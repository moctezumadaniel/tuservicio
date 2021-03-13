import {useSelector} from 'react-redux'
import ServiceTabButtons from './ServiceTabButtons'
import ServiceInformation from './ServiceInformation'
function CustomerServiceDashboard (){
    const currentGlobalTab = useSelector(state=>state.globalTab)
    return(
        currentGlobalTab === 'Services'?
        <div>
            <ServiceTabButtons/>
            <ServiceInformation/>
        </div>
        :""
    )
}
export default CustomerServiceDashboard