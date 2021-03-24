import styles from '../../../../styles/CustomerProfileForms.module.css'
import {useDispatch} from 'react-redux'
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'

function Address (){
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
                <textarea className={styles.AddresInput}/>
                <button className={styles.ConfirmButton}>{confirmButton}</button>
            </div>
        </div>
    )
}
export default Address