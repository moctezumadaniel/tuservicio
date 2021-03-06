import styles from '../../styles/Preferences.module.css'
import {useSelector} from 'react-redux'
function PreferencesTab (){
    const currentGlobalTab = useSelector(state=>state.globalTab)
    const nameDescription = 'Nombre';
    const name = 'Nombre Completo del Usuario';
    const nameButton = 'CAMBIAR NOMBRE'
    const phoneNumberDescription = 'Telefono';
    const phoneNumber = '7712345678';
    const phoneNumberButton = 'CAMBIAR TELEFONO'
    const emailDesciption = 'Correo electrónico';
    const email = 'ejemplocorreo@ejemplo.com';
    const emailButton = 'CAMBIAR CORREO'
    const passwordDescription = 'Contraseña';
    const password = '*********************'
    const paswordButton = 'CAMBIAR CONTRASEÑA'

    return(
        currentGlobalTab === 'Preferences' ? 
        <div className={styles.PreferencesMainContaner}>

            <div className={styles.PreferenceItem}>
                <div className={styles.ItemHeader}>{nameDescription}</div>
                <div className={styles.ItemDescription}>{name}</div>
                <button className={styles.ItemButton}>{nameButton}</button>
            </div>

            <div className={styles.PreferenceItem}>
                <div className={styles.ItemHeader}>{phoneNumberDescription}</div>
                <div className={styles.ItemDescription}>{phoneNumber}</div>
                <button className={styles.ItemButton}>{phoneNumberButton}</button>
            </div>

            <div className={styles.PreferenceItem}>
                <div className={styles.ItemHeader}>{emailDesciption}</div>
                <div className={styles.ItemDescription}>{email}</div>
                <button className={styles.ItemButton}>{emailButton}</button>
            </div>

            <div className={styles.PreferenceItem}>
                <div className={styles.ItemHeader}>{passwordDescription}</div>
                <div className={styles.ItemDescription}>{password}</div>
                <button className={styles.ItemButton}>{paswordButton}</button>
            </div>

        </div>
        :""
    )
}
export default PreferencesTab