import styles from '../../styles/CustomerServiceDashboard.module.css'
function ServicesList(){
    const servicesTitle = "Servicios";
    const addServiceButton = "AÑADIR SERVICIO"
    const image = "Imagen del servicio";{/*imagen del servicio en caso de que no se establezca una para el servicio */}
    const price = "Precio del servicio";
    const title = "Titulo del servicio";
    const description = "Este es un ejemplo de la descripcion corta de un servicio que no deberá exedor de 140 caracteres"
    
    return(
        <div className={styles.ListOfServicesContainer}>
            <div className={styles.ServicesTitle}>{servicesTitle}</div>
            <button className={styles.AddServiceButton}>{addServiceButton}</button>
            <div className={styles.ServicesMainContainer}>
            <div className={styles.ServiceItemContainer}>
                    <div className={styles.ServiceMainInfo}>
                        <image>{image}</image>
                            <div>{price}</div>
                        </div>
                            <div className={styles.ServiceComplementInfo}>
                            <div className={styles.ServiceTitle}>{title}</div>
                            <div>{description}</div>
                        </div>
            </div>
            <div className={styles.ServiceItemContainer}>
                    <div className={styles.ServiceMainInfo}>
                        <image>{image}</image>
                            <div>{price}</div>
                        </div>
                            <div className={styles.ServiceComplementInfo}>
                            <div>{title}</div>
                            <div>{description}</div>
                        </div>
            </div>
            <div className={styles.ServiceItemContainer}>
                    <div className={styles.ServiceMainInfo}>
                        <image>{image}</image>
                            <div>{price}</div>
                        </div>
                            <div className={styles.ServiceComplementInfo}>
                            <div>{title}</div>
                            <div>{description}</div>
                        </div>
            </div>
            <div className={styles.ServiceItemContainer}>
                    <div className={styles.ServiceMainInfo}>
                        <image>{image}</image>
                            <div>{price}</div>
                        </div>
                            <div className={styles.ServiceComplementInfo}>
                            <div>{title}</div>
                            <div>{description}</div>
                        </div>
            </div>
            </div>
            
            
        </div>
    )
}

export default ServicesList