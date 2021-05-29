import styles from '../../styles/Preferences.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {changePlatformToCustomer, changePlatformToUser} from '../../redux/actions/PlatformType'
import {customerLogout} from '../../redux/actions/LoginsAndLogouts'
import { useAuth0 } from '@auth0/auth0-react'
function PreferencesTab (){
    const currentGlobalTab = useSelector(state=>state.globalTab)
    const currentPlatform = useSelector(state=>state.platformType)
    const dispatch = useDispatch()
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
    const password = '*********************';
    const paswordButton = 'CAMBIAR CONTRASEÑA';
    const reviewsTitle = 'Reseñas';
    const reviewsDescription = 'Aqui estan las reseñas que has compartido';
    const reviewsButton = 'ABRIR RESEÑAS';
    const feedbackTitle = 'Problemas y comentarios';
    const feedbackDescription = 'Aqui estan los comentarios y problemas sobre Celer.mx que nos has enviado';
    const feedbackButton = 'ABRIR PROBLEMAS Y COMENTARIOS';
    const changeToCustomerDescription = 'Cambiar a proveedor de servicios';
    const changeToUserDescription = 'Cambiar a cliente de servicios'
    const LogoutDescription = "Cerrar sesión"
    const { logout } = useAuth0()
    function handleChangeToCustomerPress(){
        dispatch(changePlatformToCustomer())
    }
    function handleChangeToUserPress(){
        dispatch(changePlatformToUser(),
        dispatch(customerLogout()))
    }
    return(
        currentGlobalTab === 'Preferences' ? 
        <div className={styles.PreferencesMainContaner}>
            {
            currentPlatform === 'User'?
            <div className={styles.ChangePlatformToCustomer}
            onClick={handleChangeToCustomerPress}>
                {changeToCustomerDescription}
            </div>
            :
            <div className={styles.ChangePlatformToUser}
            onClick={handleChangeToUserPress}>
                {changeToUserDescription}
            </div>
            }
            
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

            <div className={styles.PreferenceItem}>
                <div className={styles.ItemHeader}>{reviewsTitle}</div>
                <div className={styles.ItemDescription}>{reviewsDescription}</div>
                <button className={styles.ItemButton}>{reviewsButton}</button>
            </div>

            <div className={styles.PreferenceItem}>
                <div className={styles.ItemHeader}>{feedbackTitle}</div>
                <div className={styles.ItemDescription}>{feedbackDescription}</div>
                <button className={styles.ItemButton}>{feedbackButton}</button>
            </div>

            <div className={styles.LogoutButton}
            onClick={()=>logout()}>
                {LogoutDescription}
            </div>
              
        </div>
        :""
    )
}
export default PreferencesTab