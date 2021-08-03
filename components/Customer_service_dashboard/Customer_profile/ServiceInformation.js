import styles from '../../../styles/CustomerServiceDashboard.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {
    changeCustomerProfileFormToImageAndName, 
    changeCustomerProfileFormToWorkdays,
    changeCustomerProfileFormToSchedule,
    changeCustomerProfileFormToShortDescription} from '../../../redux/actions/CustomerProfileForms'

    function ServiceInformation (){
    const dispatch = useDispatch()
    const title = "Información"
    const serviceImageAndNameTitle = 'Imagen y nombre'
    const serviceImage = "IMAGEN DE PERFIL"
    const serviceName = "Nombre del servicio"
    const scheduleTitle = 'Horarios de atención'
    const serviceSchedule = "8:00 a 16:00"
    const descriptionTitle = 'Descripción corta'
    const serviceDescription = "Descripcion corta del servicio Descripcion corta del servicio Descripcion corta del servicio Descripcion corta del servicio Descripcion corta del ServiceInformation"
    const workdaysTitle = "Dias de atención"
    const workdays = (workdays) =>{
        const keys = Object.keys(workdays)
        const result = keys.reduce((result, day)=>{
            if(workdays[day]==true){
                return result + `${day}, `
            }
            return result
        },"")
        return result.slice(0, result.length- 2) || 'No has establecido ningún día de atención'
    }

    const currentSchedule = (schedule, workdays) => {
        const keys = Object.keys(schedule)
        const result = keys.reduce((string, day) =>{
            if(schedule[day].opening && schedule[day].closing && workdays[day]){
            return string + `${day} de ${schedule[day].opening} a ${schedule[day].closing}, `
            }
            return string
        },"")
        console.log(result)
        return result.slice(0, result.length- 2)
    } 
    const editItemButton = 'Cambiar'
    const userInformation = useSelector(state => state.customerPublicInformation)
    function handleOpenNameAndImageForm(){
        dispatch(changeCustomerProfileFormToImageAndName())
    }

    function handleOpenWorkdaysForm(){
        dispatch(changeCustomerProfileFormToWorkdays())
    }

    function handleOpenScheduleForm(){
        dispatch(changeCustomerProfileFormToSchedule())
    }
    function handleOpenShortDescriptionForm(){
        dispatch(changeCustomerProfileFormToShortDescription())
    }
    
    
    
    return(
        <div className={styles.ServiceInformationContainer}>
            <div className={styles.informationTitle}>{title}</div>

            <div className={styles.InformationContainer}>
                <div className={styles.InformationItemTitle}>{serviceImageAndNameTitle}</div>
                <div className={styles.ImageInformation}>{userInformation.image}</div>
                <div>{userInformation.name}</div>
                <button className={styles.editItemButton}
                onClick={handleOpenNameAndImageForm}>{editItemButton}</button>
            </div>

            <div className={styles.InformationContainer}>
                    <div className={styles.InformationItemTitle}>{workdaysTitle}</div>
                    <div>{workdays(userInformation.workdays)}</div>
                    <button className={styles.editItemButton}
                    onClick={handleOpenWorkdaysForm}>{editItemButton}</button>
            </div>
            
            <div className={styles.InformationContainer}>
                    <div className={styles.InformationItemTitle}>{scheduleTitle}</div>
                    <div className={styles.Schedule}>{currentSchedule(userInformation.schedule, userInformation.workdays)}</div>
                    <button className={styles.editItemButton}
                    onClick={handleOpenScheduleForm}>{editItemButton}</button>
            </div>

            <div className={styles.InformationContainer}>
                    <div className={styles.InformationItemTitle}>{descriptionTitle}</div>
                    <div>{userInformation.shortDescription}</div>
                    <button className={styles.editItemButton}
                    onClick={handleOpenShortDescriptionForm}>{editItemButton}</button>
            </div>
            
        </div>
        

    )
}
export default ServiceInformation