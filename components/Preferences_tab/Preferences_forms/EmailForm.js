import styles from '../../../styles/UserPreferencesForms.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeUserPreferencesFormToNone } from '../../../redux/actions/UserPreferencesForms'
import { useState } from 'react'


function EmailForm(){
    const initialEmailPlaceholder = 'No has establecido tu correo'
    const emailPlaceholder = 'Escribe tu correo electrónico'
    const userInformation = useSelector(state => state.userInformation)
    const [temporalEmail, setTemporalEmail] = useState(
        userInformation.email !== initialEmailPlaceholder ?
        userInformation.email
        :""
    )
    const dispatch = useDispatch()
    function closeForm (){
        dispatch(changeUserPreferencesFormToNone())
    }
    function updateTemporalEmail(event){
        setTemporalEmail(event.target.value)
    }
    const confirmButton = 'ACEPTAR'
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={()=>closeForm()}></div>
            <div className={styles.ModalContainer}>
                <input type="text" className={styles.Email}
                placeholder={emailPlaceholder}
                value={temporalEmail}
                onChange={updateTemporalEmail}/>
                <button className={styles.ConfirmButton}>{confirmButton}</button>
            </div>
        </div>
    )
}

export default EmailForm