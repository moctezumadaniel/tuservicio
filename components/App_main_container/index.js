import AppUserContainer from "../App_user_container";
import {useSelector} from 'react-redux'
import AppCustomerContainer from "../App_customer_container";
import { useAuth0 } from '@auth0/auth0-react'
import { getOrCreateUser } from '../../databaseFunctions/user/customerInformation'




function AppMainContainer (){
    const { isAuthenticated } = useAuth0()
    const { user } = useAuth0()
    const currentPlatform = useSelector(state=>state.platformType)
    if(user)getOrCreateUser(user.sub)
    return(
        currentPlatform === 'Customer'&& isAuthenticated?
        <AppCustomerContainer/>
        : <AppUserContainer/>
            
        
    )
}
export default AppMainContainer