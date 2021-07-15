import styles from '../../../styles/UserPreferencesForms.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeUserPreferencesFormToNone } from '../../../redux/actions/UserPreferencesForms'
import { useState } from 'react'
import axios from 'axios'
import { changeUserInformationEmail } from '../../../redux/actions/UserInformation'


function EmailForm(){
    const initialEmailPlaceholder = 'No has establecido tu correo'
    const emailPlaceholder = 'Escribe tu correo electrónico'
    const userInformation = useSelector(state => state.userInformation)
    const [emailUpdating, setEmailUpdating] = useState(false)
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
    function updateEmail(userId, newEmail){
        setEmailUpdating(true)
        axios.patch(`api/user/updateUserEmail`,{
               userId,
               newEmail 
        })
        .then(response => {
            if(response.data){
                dispatch(changeUserInformationEmail(response.data.email),
                dispatch(changeUserPreferencesFormToNone()))
                console.log(response)
            }
        })
        .catch(error => console.log(error))
        setEmailUpdating(false)
        console.log(userInformation)
    }
    const confirmButton = 'ACEPTAR'
    return(
        <div className={styles.MainContainer}>
            {!emailUpdating ?
            <>
            <div className={styles.ModalBackground}
            onClick={()=>closeForm()}></div>
            <div className={styles.ModalContainer}>
                <input type="text" className={styles.Email}
                placeholder={emailPlaceholder}
                value={temporalEmail}
                onChange={updateTemporalEmail}/>
                <button className={styles.ConfirmButton}
                onClick={()=>updateEmail(userInformation.userId, temporalEmail)}>{confirmButton}</button>
            </div>
            </>
            :""}    
        </div>
    )
}

export default EmailForm