import styles from '../../../styles/CustomerServiceDashboard.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {changeCustomerProfileFormToAddService} from '../../../redux/actions/CustomerProfileForms'

function ListOfServices(){
    const customerPublicServices = useSelector(state => state.customerPublicInformation.listOfServices)
    const image = "Imagen del servicio";{/*imagen del servicio en caso de que no se establezca una para el servicio */}
    const price = "Precio del servicio";
    const title = "Titulo del servicio";
    const description = "Este es un ejemplo de la descripcion corta de un servicio que no deberá exedor de 140 caracteres"
    const deleteButton = "ELIMINAR"
    const editButton = "EDITAR"
    console.log(customerPublicServices)
    return(
        <div className={styles.ServicesMainContainer}>
        {/*SERICE ITEM */}
            {customerPublicServices.map(service => (
            <div className={styles.ServiceItemContainer} key={service._id}>
                <div className={styles.ServiceMainInfo}>
                    <image>{service.image}</image>
                    <div>{service.price}</div>
                </div>
                <div className={styles.ServiceComplementInfo}>
                    <div className={styles.ServiceTitle}>{service.title}</div>
                    <div>{service.description}</div>
                </div>
                <div className={styles.ServiceButtonsContainer}>
                    <button className={styles.EditServiceButton}>{editButton}</button>
                    <button className={styles.DeleteServiceButton}>{deleteButton}</button>
                </div>
            </div>
            ))
            }
        </div>
    )
}
function ServicesList(){
    const dispatch = useDispatch()
    const servicesTitle = "Servicios";
    const addServiceButton = "AÑADIR SERVICIO"
    
    function handleAddServicePress(){
        dispatch(changeCustomerProfileFormToAddService())
    }
    return(
        <div className={styles.ListOfServicesContainer}>
            
{/*TITLE AND ADD BUTTON */}
            <div className={styles.ServicesTitle}>{servicesTitle}</div>
            <button className={styles.AddServiceButton}
            onClick={handleAddServicePress}>{addServiceButton}</button>
            <ListOfServices/>
            
            
        </div>
    )
}

export default ServicesList