import styles from '../../../../styles/CustomerProfileForms.module.css'
import {useDispatch} from 'react-redux'
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'

function MoreInformation (){
    const dispatch = useDispatch()
    const moreInformationPlaceholder = "Escribe sin límite todo lo que quieras que tus clientes sepan de tu negocio"
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
                <textarea className={styles.MoreInformationInput}
                placeholder={moreInformationPlaceholder}/>
                <button className={styles.ConfirmButton}
                onClick={handleCloseForm}>{confirmButton}</button>
            </div>
        
        </div>
    )
}
export default MoreInformation