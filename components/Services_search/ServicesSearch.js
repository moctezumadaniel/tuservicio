import styles from '../../styles/UserServiceSearch.module.css'
import {ButtonUserLogin} from '../User_login'
import { useAuth0 } from '@auth0/auth0-react'
import Image from 'next/image'
import { useSelector } from 'react-redux'

function ServicesSearch (){
    const { isAuthenticated, isLoading } = useAuth0()
    return(
        <>
        {!isAuthenticated && !isLoading?
        <ButtonUserLogin/>
        :""}
        <div className={styles.ServiceSearchMainContainer}>
            <UserServicesPreview/>
            
        </div>
        </>
    )
}

export default ServicesSearch



function UserServicesPreview(){
    const currentServices = useSelector(state => state.userDisplayedServices)
    const stars = "estrellas";
    const todaySchedule = "8:00 a 16:00" /*Green when is open at the moment of the search*/
    const currentDay = () =>{
        const dayDictionary = {
            '0':'sunday',
            '1':'monday',
            '2':'tuesday',
            '3':'wednesday',
            '4':'thursday',
            '5':'friday',
            '6':'saturday'
        }
        const dayNumber = new Date().getDay()
        return dayDictionary[dayNumber]
    }
    const currentSchedule = (service) =>{
        const day = currentDay()
        if(service.workdays[day]== true){
            return `${service.schedule[day].opening} a ${service.schedule[day].closing}`
        }else return `Cerrado hoy`
    }
    console.log(currentServices)
    console.log(currentDay())
    if(currentServices.length > 0){
        return currentServices.map(service => (
            <div className={styles.PreviewMainContainer}>
                <div className={styles.ImageAndScoreContainer}>
                    <Image src='/celerPerfil.png' width={80} height={80}/>
                    <div>{service.rating ? `${service.rating} ${stars}`: ""}</div>
                </div>
                <div className={styles.ServiceInformation}>
                    <div className={styles.ServiceName}>{service.name}</div>
                    <div className={styles.ServiceTodaySchedule}>{currentSchedule(service)}</div>
                    <div className={styles.ServiceDescription}>{service.shortDescription}</div>
                </div>
            </div>
        ))
    }
    return (
        <div>
            SIN SERVICIOS ENCONTRADOS
        </div>
    )
}