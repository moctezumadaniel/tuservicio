import styles from '../../styles/CustomerProfileTemplate.module.css'

import ServiceItemTemplate from './ServiceItemTemplate'
function ServicesTab (){
    return(
        <div className={styles.ServicesMainContainer}>
            <ServiceItemTemplate/>
            <ServiceItemTemplate/>
            <ServiceItemTemplate/>
            <ServiceItemTemplate/>
            <ServiceItemTemplate/>
            <ServiceItemTemplate/>
            <ServiceItemTemplate/>
            <ServiceItemTemplate/>
            <ServiceItemTemplate/>
            <ServiceItemTemplate/>
            <ServiceItemTemplate/>
            <ServiceItemTemplate/>
        </div>
    )
}
export default ServicesTab