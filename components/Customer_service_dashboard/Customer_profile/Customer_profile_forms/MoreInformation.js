import styles from '../../../../styles/CustomerProfileForms.module.css'
import {useDispatch} from 'react-redux'
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'

function MoreInformation (){
    const dispatch = useDispatch()
    const confirmButton = 'ACEPTAR'
    function handleCloseForm(){
        dispatch(changeCustomerProfileFormToNone())
    }
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}>
            </div>

            <div className={styles.ModalContainer}>
                <textarea className={styles.MoreInformationInput}/>
                <button className={styles.ConfirmButton}
                onClick={handleCloseForm}>{confirmButton}</button>
            </div>
        
        </div>
    )
}
export default MoreInformation