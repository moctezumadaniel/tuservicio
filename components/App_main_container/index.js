import AppUserContainer from "../App_user_container";
import {useSelector} from 'react-redux'
import AppCustomerContainer from "../App_customer_container";
function AppMainContainer (){
    const currentPlatform = useSelector(state=>state.platformType)
    return(
        currentPlatform === 'Customer'?
        <AppCustomerContainer/>
        : <AppUserContainer/>
            
        
    )
}
export default AppMainContainer