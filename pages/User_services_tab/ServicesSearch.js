import styles from '../../styles/UserServiceSearch.module.css'

import UserServicePreview from '../../pages/User_service_preview';

function ServicesSearch (){
    return(
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
    )
}

export default ServicesSearch