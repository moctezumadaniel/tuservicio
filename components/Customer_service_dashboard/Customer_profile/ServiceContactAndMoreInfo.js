import styles from '../../../styles/CustomerServiceDashboard.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {
    changeCustomerProfileFormToPhoneNumber,
    changeCustomerProfileFormToAddress,
    changeCustomerProfileFormToMoreInformation,
    changeCustomerProfileFormToServiceImages} from '../../../redux/actions/CustomerProfileForms'
function ServiceContactAndMoreInfo (){
    const dispatch = useDispatch();
    const contactAndMoreTitle = 'Contacto y más detalles'
    const phoneNumberTitle = 'Número de telefono'
    const phoneNumberDescription = '7712345678'
    const addressTitle = 'Dirección del negocio'
    const addressDescription = 'Calle 00 número 0, colonia Ejemplo, Ciudad Ejemplo, Estado de Ejemplo CP 00000'
    const moreInfoTitle = 'Mas información'
    const moreInfoReduced = 'Este es un ejemplo del inicio de una descripcion larga que detalle el negocio, este resumen se cortara despues de 140 caracteres'
    const imagesTitle = 'Imágenes'
    const images = 'IMAGENES DEL SERVICIO, QUE DEBEN SER PREFERENTEMENTE DIFERENTES A LAS DE LOS SERVICIOS'
    const editItemButton = 'Cambiar'
    const userInformation = useSelector(state => state.customerPublicInformation)
    function handlePhoneNumberPress(){
        dispatch(changeCustomerProfileFormToPhoneNumber())
    }
    function handleAddressPress(){
        dispatch(changeCustomerProfileFormToAddress())
    }
    function handleMoreInformationPress(){
        dispatch(changeCustomerProfileFormToMoreInformation())
    }
    function handleServiceImagesPress() {
        dispatch(changeCustomerProfileFormToServiceImages())
    }
    console.log(userInformation)
    return(
        
            <div className={styles.ContactAndMoreContainer}>
                <div className={styles.ContactAndMoreTitle}>{contactAndMoreTitle}</div>

                <div className={styles.ContactAndMoreContent}>
                    <div className={styles.ImageNameServiceContainer}>
                        <div className={styles.ContactAndMoreItemTitle}>{phoneNumberTitle}</div>
                        <div className={styles.PhoneNumber}>{userInformation.phoneNumber}</div>
                    </div>
                    <button className={styles.editItemButton}
                    onClick={handlePhoneNumberPress}>{editItemButton}</button>
                </div>

                <div className={styles.ContactAndMoreContent}>
                    <div className={styles.ContactAndMoreItemTitle}>{addressTitle}</div>
                    <div className={styles.Address}>{userInformation.address}</div>
                    <button className={styles.editItemButton}
                    onClick={handleAddressPress}>{editItemButton}</button>
                </div>

                <div className={styles.ContactAndMoreContent}>
                     <div className={styles.ContactAndMoreItemTitle}>{moreInfoTitle}</div>
                    <div className={styles.MoreInfo}>{userInformation.moreInformation}</div>
                    <button className={styles.editItemButton}
                    onClick={handleMoreInformationPress}>{editItemButton}</button>
                </div>

                <div className={styles.ContactAndMoreContent}>
                    <div className={styles.ContactAndMoreItemTitle}>{imagesTitle}</div>
                    <div>{userInformation.images}</div>
                    <button className={styles.editItemButton}
                    onClick={handleServiceImagesPress}>{editItemButton}</button>
                </div>
                

            </div>
    
    )
}
export default ServiceContactAndMoreInfo