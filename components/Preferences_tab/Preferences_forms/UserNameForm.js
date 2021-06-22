import { useDispatch, useSelector } from 'react-redux'
import styles from '../../../styles/UserPreferencesForms.module.css'
import { changeUserPreferencesFormToNone } from '../../../redux/actions/UserPreferencesForms'
import { useState } from 'react'
function UserNameForm(){
    const initialNamePlaceholder = 'No has establecido tu nombre'
    const userNamePlaceholder = 'Escribe tu nombre completo'
    const userInformation = useSelector(state => state.userInformation)
    const [temporalUserName, setTemporalUserName] = useState(
        userInformation.name !== initialNamePlaceholder ?
        userInformation.name:
        ""
    )
    const dispatch = useDispatch()
    function closeForm (){
        dispatch(changeUserPreferencesFormToNone())
    }
    function updateTemporalUserName(event){
        setTemporalUserName(event.target.value)
    }
    const confirmButton = 'ACEPTAR'
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={()=>closeForm()}></div>
            <div className={styles.ModalContainer}>
                <input type="text" className={styles.UserName}
                placeholder={userNamePlaceholder}
                value={temporalUserName}
                onChange={updateTemporalUserName}/>
                <button className={styles.ConfirmButton}>{confirmButton}</button>
            </div>
        </div>
    )
}

export default UserNameForm