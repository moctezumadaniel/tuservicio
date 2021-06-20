import { useDispatch } from 'react-redux'
import styles from '../../../styles/UserPreferencesForms.module.css'
import { changeUserPreferencesFormToNone } from '../../../redux/actions/UserPreferencesForms'
function UserNameForm(){
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
                <input type="text" className={styles.UserName}/>
                <button className={styles.ConfirmButton}>{confirmButton}</button>
            </div>
        </div>
    )
}

export default UserNameForm