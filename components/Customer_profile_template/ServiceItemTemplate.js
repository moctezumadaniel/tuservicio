import styles from '../../styles/CustomerProfileTemplate.module.css'

function ServiceItemTemplate (){
    const image = "Imagen del servicio";{/*imagen del servicio en caso de que no se establezca una para el servicio */}
    const price = "Precio del servicio";
    const title = "Titulo del servicio";
    const description = "Descripcion del servicio";
    return(
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
    )
}

export default ServiceItemTemplate