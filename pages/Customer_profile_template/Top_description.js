import styles from '../../styles/CustomerProfileTemplate.module.css'

function TopBar(){
    const sendMessageDescription = "ENVIAR MENSAJE"
    const profileImage = "IMAGEN DE PERFIL"
    const phoneCallDescription = "LLAMAR 7712624988"
    const CustomerName = "Nombre del usuario SA de CV"
    return(
        <div>
            <div className={styles.TopBarContainer}>
                <button className={styles.MessageButton}>{sendMessageDescription}</button>
                <image className={styles.ProfileImage}>{profileImage}</image>
                <button className={styles.PhoneCallButton}>{phoneCallDescription}</button>
            </div>
            <div className={styles.CustomerName}>{CustomerName}</div>
        </div>
    )
}
export default TopBar