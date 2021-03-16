import styles from '../../styles/CustomerServiceDashboard.module.css'
function ServiceInformation (){
    const title = "Información"
    const serviceImageAndNameTitle = 'Imagen y nombre'
    const serviceImage = "IMAGEN DE PERFIL"
    const serviceName = "Nombre del servicio"
    const scheduleTitle = 'Horario de atención'
    const serviceSchedule = "8:00 a 16:00"
    const descriptionTitle = 'Descripción corta'
    const serviceDescription = "Descripcion corta del servicio Descripcion corta del servicio Descripcion corta del servicio Descripcion corta del servicio Descripcion corta del ServiceInformation"
    const editItemButton = 'Cambiar'
    return(
        <div className={styles.ServiceInformationContainer}>
            <div className={styles.informationTitle}>{title}</div>

            <div className={styles.InformationContainer}>
                <div className={styles.InformationItemTitle}>{serviceImageAndNameTitle}</div>
                <div className={styles.ImageInformation}>{serviceImage}</div>
                <div>{serviceName}</div>
                <button className={styles.editItemButton}>{editItemButton}</button>
            </div>

            <div className={styles.InformationContainer}>
                    <div className={styles.InformationItemTitle}>{scheduleTitle}</div>
                    <div className={styles.Schedule}>{serviceSchedule}</div>
                    <button className={styles.editItemButton}>{editItemButton}</button>
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