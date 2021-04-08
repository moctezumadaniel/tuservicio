import styles from '../../../styles/CustomerServiceDashboard.module.css'
import {useDispatch} from 'react-redux'
import {changeCustomerProfileFormToAddService} from '../../../redux/actions/CustomerProfileForms'
function ServicesList(){
    const dispatch = useDispatch()
    const servicesTitle = "Servicios";
    const addServiceButton = "AÑADIR SERVICIO"
    const image = "Imagen del servicio";{/*imagen del servicio en caso de que no se establezca una para el servicio */}
    const price = "Precio del servicio";
    const title = "Titulo del servicio";
    const description = "Este es un ejemplo de la descripcion corta de un servicio que no deberá exedor de 140 caracteres"
    
    function handleAddServicePress(){
        dispatch(changeCustomerProfileFormToAddService())
    }
    return(
        <div className={styles.ListOfServicesContainer}>
            
{/*TITLE AND ADD BUTTON */}
            <div className={styles.ServicesTitle}>{servicesTitle}</div>
            <button className={styles.AddServiceButton}
            onClick={handleAddServicePress}>{addServiceButton}</button>

{/*LIST OF SERVICES */}
            <div className={styles.ServicesMainContainer}>
            {/*SERICE ITEM */}
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