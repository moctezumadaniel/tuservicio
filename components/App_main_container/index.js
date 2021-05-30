import AppUserContainer from "../App_user_container";
import {useSelector} from 'react-redux'
import AppCustomerContainer from "../App_customer_container";
import { useAuth0 } from '@auth0/auth0-react'
function AppMainContainer (){
    const { isAuthenticated } = useAuth0()
    const currentPlatform = useSelector(state=>state.platformType)
    return(
        currentPlatform === 'Customer'&& isAuthenticated?
        <AppCustomerContainer/>
        : <AppUserContainer/>
            
        
    )
}
export default AppMainContainer