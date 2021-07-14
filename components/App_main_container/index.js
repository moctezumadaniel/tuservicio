import AppUserContainer from "../App_user_container";
import {useSelector} from 'react-redux'
import AppCustomerContainer from "../App_customer_container";
import { useAuth0 } from '@auth0/auth0-react'
import styles from "../../styles/LoadingScreens.module.css"

function LoadingScreen(){
    const loadingMessage = 'Cargando...'
    return(
        <div className={styles.LoadingMessage}>{loadingMessage}</div>
    )
}
function AppMainContainer (){
    const { isAuthenticated, isLoading, user } = useAuth0()
    const currentPlatform = useSelector(state=>state.platformType)
    return(
        currentPlatform === 'Customer'&& isAuthenticated?
        <AppCustomerContainer/>
        : !isLoading?
        <AppUserContainer/>
        :<LoadingScreen/>
        
    )
}
export default AppMainContainer