import styles from '../../styles/CustomerServiceDashboard.module.css'
function ServiceInformation (){
    const title = "Información"
    const serviceImage = "IMAGEN DE PERFIL"
    const serviceName = "Nombre del servicio"
    const serviceSchedule = "8:00 a 16:00"
    const serviceDescription = "Descripcion corta del servicio Descripcion corta del servicio Descripcion corta del servicio Descripcion corta del servicio Descripcion corta del ServiceInformation"
    return(
        <div className={styles.ServiceInformationTabContainer}>
            <div className={styles.ServiceInformationContainer}>
                <div className={styles.informationTitle}>{title}</div>
                <div className={styles.InformationContainer}>
                    <div className={styles.ImageInformation}>{serviceImage}</div>
                    <div className={styles.Information}>
                        <div className={styles.ServiceName}>{serviceName}</div>
                        <div className={styles.Schedule}>{serviceSchedule}</div>
                        <div>{serviceDescription}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ServiceInformation