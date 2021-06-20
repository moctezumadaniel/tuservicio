import styles from '../../../styles/UserPreferencesForms.module.css'
import { useDispatch } from 'react-redux'
import { changeUserPreferencesFormToNone } from '../../../redux/actions/UserPreferencesForms'


function PasswordForm(){
    const oldPasswordPlaceholder = 'Escribe tu antigua contraseña'
    const newPasswordPlaceholder = 'Escribe tu nueva contraseña'
    const confirmNewPasswordPlaceholder = 'Confirma tu nueva contraseña'

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
                <div className={styles.PasswordsContainer}>
                    <input type="password" className={styles.Password}
                    placeholder={oldPasswordPlaceholder}/>
                    <input type="password" className={styles.Password}
                    placeholder={newPasswordPlaceholder}/>
                    <input type="password" className={styles.Password}
                    placeholder={confirmNewPasswordPlaceholder}/>
                    <button className={styles.ConfirmButton}>{confirmButton}</button>
                </div>
            </div>
        </div>
    )
}

export default PasswordForm