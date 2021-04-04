import styles from '../../../styles/CustomerServiceDashboard.module.css'
import {useDispatch} from 'react-redux';
import {
    changeCustomerProfileFormToImageAndName, 
    changeCustomerProfileFormToWorkdays,
    changeCustomerProfileFormToSchedule} from '../../../redux/actions/CustomerProfileForms'

    function ServiceInformation (){
    const dispatch = useDispatch()
    const title = "Información"
    const serviceImageAndNameTitle = 'Imagen y nombre'
    const serviceImage = "IMAGEN DE PERFIL"
    const serviceName = "Nombre del servicio"
    const scheduleTitle = 'Horario de atención'
    const serviceSchedule = "8:00 a 16:00"
    const descriptionTitle = 'Descripción corta'
    const serviceDescription = "Descripcion corta del servicio Descripcion corta del servicio Descripcion corta del servicio Descripcion corta del servicio Descripcion corta del ServiceInformation"
    const workdaysTitle = "Dias de atención"
    const workdays = "Lunes, Martes, Miercoles, Viernes, Sabado"
    const editItemButton = 'Cambiar'

    function handleOpenNameAndImageForm(){
        dispatch(changeCustomerProfileFormToImageAndName())
    }

    function handleOpenWorkdaysForm(){
        dispatch(changeCustomerProfileFormToWorkdays())
    }

    function handleOpenScheduleForm(){
        dispatch(changeCustomerProfileFormToSchedule())
    }
    return(
        <div className={styles.ServiceInformationContainer}>
            <div className={styles.informationTitle}>{title}</div>

            <div className={styles.InformationContainer}>
                <div className={styles.InformationItemTitle}>{serviceImageAndNameTitle}</div>
                <div className={styles.ImageInformation}>{serviceImage}</div>
                <div>{serviceName}</div>
                <button className={styles.editItemButton}
                onClick={handleOpenNameAndImageForm}>{editItemButton}</button>
            </div>

            <div className={styles.InformationContainer}>
                    <div className={styles.InformationItemTitle}>{workdaysTitle}</div>
                    <div>{workdays}</div>
                    <button className={styles.editItemButton}
                    onClick={handleOpenWorkdaysForm}>{editItemButton}</button>
            </div>
            
            <div className={styles.InformationContainer}>
                    <div className={styles.InformationItemTitle}>{scheduleTitle}</div>
                    <div className={styles.Schedule}>{serviceSchedule}</div>
                    <button className={styles.editItemButton}
                    onClick={handleOpenScheduleForm}>{editItemButton}</button>
            </div>

            <div className={styles.InformationContainer}>
                    <div className={styles.InformationItemTitle}>{descriptionTitle}</div>
                    <div>{serviceDescription}</div>
                    <button className={styles.editItemButton}>{editItemButton}</button>
            </div>
            
        </div>
        

    )
}
export default ServiceInformation