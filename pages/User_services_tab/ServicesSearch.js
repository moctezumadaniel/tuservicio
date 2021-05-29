import styles from '../../styles/UserServiceSearch.module.css'
import {ButtonUserLogin} from '../../components/User_login'
import UserServicePreview from '../User_service_preview';

function ServicesSearch (){
    return(
        <>
        <ButtonUserLogin/>
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