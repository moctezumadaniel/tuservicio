import {useSelector} from 'react-redux'
import ServiceTabButtons from './ServiceTabButtons'
function CustomerServiceDashboard (){
    const currentGlobalTab = useSelector(state=>state.globalTab)
    return(
        currentGlobalTab === 'Services'?
        <div>
            <ServiceTabButtons/>
        </div>
        :""
    )
}
export default CustomerServiceDashboard