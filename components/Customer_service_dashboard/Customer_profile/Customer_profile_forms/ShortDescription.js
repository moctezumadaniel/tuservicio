import styles from '../../../../styles/CustomerProfileForms.module.css'
import { useDispatch } from "react-redux";
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'
function ShortDescription (){
    const dispatch = useDispatch()
    const shortDescriptionPlaceholder = 'Escribe una descripcion corta sobre tu negocio'
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
                <div>
                    <textarea className={styles.ShortDescriptionContainer}
                    placeholder={shortDescriptionPlaceholder}/>
                </div>
                <div className={styles.FullWidthContainer}>
                    <button onClick={handleCloseForm}
                    className={styles.ConfirmButton}>{confirmButton}</button>
                </div>
            </div>

        </div>
    )
}
export default ShortDescription