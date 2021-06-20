import styles from '../../../styles/UserPreferencesForms.module.css'
import { useDispatch } from 'react-redux'
import { changeUserPreferencesFormToNone } from '../../../redux/actions/UserPreferencesForms'


function PhoneNumberForm(){
    const phoneNumberPlaceholder = 'Escribe tu número de teléfono'
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
                <input type="text" className={styles.PhoneNumber}
                placeholder={phoneNumberPlaceholder}/>
                <button className={styles.ConfirmButton}>{confirmButton}</button>
            </div>
        </div>
    )
}

export default PhoneNumberForm