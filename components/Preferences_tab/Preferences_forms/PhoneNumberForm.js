import styles from '../../../styles/UserPreferencesForms.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeUserPreferencesFormToNone } from '../../../redux/actions/UserPreferencesForms'
import { useState } from 'react'


function PhoneNumberForm(){
    const initialPhonePlaceholder = 'No has establecido tu telefono'
    const phoneNumberPlaceholder = 'Escribe tu número de teléfono'
    const userInformation = useSelector(state => state.userInformation)
    const [temporalPhoneNumber, setTemporalPhoneNumber] = useState(
        userInformation.phoneNumber !== initialPhonePlaceholder ?
        userInformation.phoneNumber
        :""
    )
    const dispatch = useDispatch()
    function closeForm (){
        dispatch(changeUserPreferencesFormToNone())
    }
    function updateTemporalPhoneNumber(event){
        setTemporalPhoneNumber(event.target.value)
    }
    const confirmButton = 'ACEPTAR'
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={()=>closeForm()}></div>
            <div className={styles.ModalContainer}>
                <input type="text" className={styles.PhoneNumber}
                placeholder={phoneNumberPlaceholder}
                value={temporalPhoneNumber}
                onChange={updateTemporalPhoneNumber}/>
                <button className={styles.ConfirmButton}>{confirmButton}</button>
            </div>
        </div>
    )
}

export default PhoneNumberForm