import { useDispatch, useSelector } from 'react-redux'
import styles from '../../../styles/UserPreferencesForms.module.css'
import { changeUserPreferencesFormToNone } from '../../../redux/actions/UserPreferencesForms'
import { useState } from 'react'
import axios from 'axios'
import { changeUserInformationName } from '../../../redux/actions/UserInformation'
function UserNameForm(){
    const initialNamePlaceholder = 'No has establecido tu nombre'
    const userNamePlaceholder = 'Escribe tu nombre completo'
    const userInformation = useSelector(state => state.userInformation)
    const [userNameUpdating, setUserNameUpdating] = useState(false)
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
    function updateUserName(userId, newName){
        setUserNameUpdating(true)
        axios.patch(`api/user/updateUserName`,{
               userId,
               newName 
        })
        .then(response => {
            if(response.data){
                dispatch(changeUserInformationName(response.data.name))
                console.log(response)
            }
        })
        .catch(error => console.log(error))
        console.log(userId + "  " + newName)
        setUserNameUpdating(false)
        console.log(userInformation)
    }
    const confirmButton = 'ACEPTAR'
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={()=>closeForm()}></div>
            <div className={styles.ModalContainer}>
                {!userNameUpdating ?
                <>
                <input type="text" className={styles.UserName}
                placeholder={userNamePlaceholder}
                value={temporalUserName}
                onChange={updateTemporalUserName}/>
                <button className={styles.ConfirmButton}
                onClick={()=>updateUserName(userInformation.userId, temporalUserName)}>{confirmButton}</button>
                </>
                :""}
                
            </div>
        </div>
    )
}

export default UserNameForm