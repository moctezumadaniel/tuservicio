import styles from '../../styles/CustomerServiceDashboard.module.css'
function ServiceContactAndMoreInfo (){
    const contactAndMoreTitle = 'Contacto y mas detalles'
    const phoneNumberDescription = '7712345678'
    const addressDescription = 'Calle 00 número 0, colonia Ejemplo, Ciudad Ejemplo, Estado de Ejemplo CP 00000'
    const moreInfoReduced = 'Este es un ejemplo del inicio de una descripcion larga que detalle el negocio, este resumen se cortara despues de 140 caracteres'
    const images = 'IMAGENES DEL SERVICIO, QUE DEBEN SER PREFERENTEMENTE DIFERENTES A LAS DE LOS SERVICIOS'
    return(
        
            <div className={styles.ContactAndMoreContainer}>
                <div className={styles.ContactAndMoreTitle}>{contactAndMoreTitle}</div>

                <div className={styles.ContactAndMoreContent}>
                    <div className={styles.PhoneNumber}>{phoneNumberDescription}</div>
                    <div className={styles.Address}>{addressDescription}</div>
                    <div className={styles.MoreInfo}>{moreInfoReduced}</div>
                    <div>{images}</div>
                </div>

            </div>
    
    )
}
export default ServiceContactAndMoreInfo