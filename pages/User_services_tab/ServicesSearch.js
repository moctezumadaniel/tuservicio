import styles from '../../styles/UserServiceSearch.module.css'
import {ButtonUserLogin} from '../../components/User_login'
import UserServicePreview from '../User_service_preview';
import { useAuth0 } from '@auth0/auth0-react'

function ServicesSearch (){
    const { isAuthenticated } = useAuth0()
    return(
        <>
        {!isAuthenticated?
        <ButtonUserLogin/>
        :""}
        <div className={styles.ServiceSearchMainContainer}>
            <UserServicePreview/>
            <UserServicePreview/>
            <UserServicePreview/>
            <UserServicePreview/>
            <UserServicePreview/>
            <UserServicePreview/>
            <UserServicePreview/>
            <UserServicePreview/>
            <UserServicePreview/>
        </div>
        </>
    )
}

export default ServicesSearch