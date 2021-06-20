import styles from '../../../styles/UserPreferencesForms.module.css'
import { useDispatch } from 'react-redux'
import { changeUserPreferencesFormToNone } from '../../../redux/actions/UserPreferencesForms'


function EmailForm(){
    const emailPlaceholder = 'Escribe tu correo electrónico'
    const dispatch = useDispatch()
    function closeForm (){
        dispatch(changeUserPreferencesFormToNone())
    }
    const confirmButton = 'ACEPTAR'
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={()=>closeForm()}></div>
            <div className={styles.ModalContainer}>
                <input type="text" className={styles.Email}
                placeholder={emailPlaceholder}/>
                <button className={styles.ConfirmButton}>{confirmButton}</button>
            </div>
        </div>
    )
}

export default EmailForm