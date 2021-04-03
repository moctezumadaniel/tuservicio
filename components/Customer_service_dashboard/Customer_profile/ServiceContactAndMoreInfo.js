import styles from '../../../styles/CustomerServiceDashboard.module.css'
function ServiceContactAndMoreInfo (){
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
    return(
        
            <div className={styles.ContactAndMoreContainer}>
                <div className={styles.ContactAndMoreTitle}>{contactAndMoreTitle}</div>

                <div className={styles.ContactAndMoreContent}>
                    <div className={styles.ImageNameServiceContainer}>
                        <div className={styles.ContactAndMoreItemTitle}>{phoneNumberTitle}</div>
                        <div className={styles.PhoneNumber}>{phoneNumberDescription}</div>
                    </div>
                    <button className={styles.editItemButton}>{editItemButton}</button>
                </div>

                <div className={styles.ContactAndMoreContent}>
                    <div className={styles.ContactAndMoreItemTitle}>{addressTitle}</div>
                    <div className={styles.Address}>{addressDescription}</div>
                    <button className={styles.editItemButton}>{editItemButton}</button>
                </div>

                <div className={styles.ContactAndMoreContent}>
                     <div className={styles.ContactAndMoreItemTitle}>{moreInfoTitle}</div>
                    <div className={styles.MoreInfo}>{moreInfoReduced}</div>
                    <button className={styles.editItemButton}>{editItemButton}</button>
                </div>

                <div className={styles.ContactAndMoreContent}>
                    <div className={styles.ContactAndMoreItemTitle}>{imagesTitle}</div>
                    <div>{images}</div>
                    <button className={styles.editItemButton}>{editItemButton}</button>
                </div>
                

            </div>
    
    )
}
export default ServiceContactAndMoreInfo