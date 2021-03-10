import styles from '../../styles/UserMessages.module.css'
function CustomerMessage (){
    const message = 'Este es un mensaje del proveedor del servicio Este es un mensaje del proveedor del servicio Este es un mensaje del proveedor del servicio Este es un mensaje del proveedor del servicio'
    return(
        <div className={styles.CustomerMessageContainer}>
            <div className={styles.CustomerMessageComplement}></div>
            <div className={styles.CustomerMessage}>{message}</div>
        </div>
    )
}

export default CustomerMessage