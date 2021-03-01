import styles from '../../styles/CustomerProfileTemplate.module.css'

function TopBar(){
    const sendMessageDescription = "ENVIAR MENSAJE"
    const profileImage = "IMAGEN DE PERFIL"
    const phoneCallDescription = "LLAMAR 7712624988"
    return(
        <div className={styles.TopBarContainer}>
            <button className={styles.MessageButton}>{sendMessageDescription}</button>
            <image>{profileImage}</image>
            <button className={styles.PhoneCallButton}>{phoneCallDescription}</button>
        </div>
    )
}
export default TopBar