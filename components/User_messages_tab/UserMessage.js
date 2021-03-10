import styles from '../../styles/UserMessages.module.css'
function UserMessage (){
    const message = 'Este es un mensaje del proveedor del servicio Este es un mensaje del proveedor del servicio Este es un mensaje del proveedor del servicio Este es un mensaje del proveedor del servicio'
    return(
        <div className={styles.UserMessageContainer}>
            <div className={styles.UserMessageComplement}></div>
            <div className={styles.UserMessage}>{message}</div>
        </div>
    )
}

export default UserMessage