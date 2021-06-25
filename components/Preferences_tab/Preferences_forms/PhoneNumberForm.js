import styles from '../../../styles/UserPreferencesForms.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeUserPreferencesFormToNone } from '../../../redux/actions/UserPreferencesForms'
import { useState } from 'react'
import { changeUserInformationPhoneNumber } from '../../../redux/actions/UserInformation'
import axios from 'axios'

function PhoneNumberForm(){
    const initialPhonePlaceholder = 'No has establecido tu telefono'
    const phoneNumberPlaceholder = 'Escribe tu número de teléfono'
    const userInformation = useSelector(state => state.userInformation)
    const [phoneNumberUpdating, setPhoneNumberUpdating] = useState(false)
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
    function updatePhoneNumber(userId, newPhone){
        setPhoneNumberUpdating(true)
        axios.patch(`api/user/updateUserPhone`,{
               userId,
               newPhone 
        })
        .then(response => {
            if(response.data){
                dispatch(changeUserInformationPhoneNumber(response.data.phoneNumber))
                console.log(response)
            }
        })
        .catch(error => console.log(error))
        setPhoneNumberUpdating(false)
        console.log(userInformation)
    }
    const confirmButton = 'ACEPTAR'
    return(
        <div className={styles.MainContainer}>
        
            {!phoneNumberUpdating?
            <>
            <div className={styles.ModalBackground}
            onClick={()=>closeForm()}></div>
            <div className={styles.ModalContainer}>
                <input type="tel" className={styles.PhoneNumber}
                placeholder={phoneNumberPlaceholder}
                value={temporalPhoneNumber}
                onChange={updateTemporalPhoneNumber}/>
                <button className={styles.ConfirmButton}
                onClick={()=>updatePhoneNumber(userInformation.userId,temporalPhoneNumber)}>{confirmButton}</button>
            </div>
            </>
            :""}
        </div>
    )
}

export default PhoneNumberForm