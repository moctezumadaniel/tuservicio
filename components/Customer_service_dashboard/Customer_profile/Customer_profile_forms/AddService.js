import styles from '../../../../styles/CustomerProfileForms.module.css'
import {useDispatch} from 'react-redux'
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'

function AddService (){
    const dispatch = useDispatch()
    const addImageLabel = "Agregar Imágen"
    const namePlaceholder = "Escribe nombre del servicio"
    const pricePlaceholder = "Escribe el precio del servicio"
    const descriptionPlaceholder = "Escribe una descripcion corta del servicio"
    const confirmButton = "ACEPTAR"
    function handleCloseForm(){
        dispatch(changeCustomerProfileFormToNone())
    }
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}>
            </div>

            <div className={styles.ModalContainer}>
                
                {/*IMAGE INPUT */}
                <input type='file' accept='image/*' 
                name="serviceImage"
                id="serviceImage"
                className={styles.ServiceImageInput} /*HIDDENT TO AVOID DEFAULT UGLY LABELS */
                />
                <label for="serviceImage"
                className={styles.ServiceImage}>
                    <div className={styles.ServiceImageLabel}>{addImageLabel}</div>
                </label>
                {/*NAME AND PRICE INPUTS */}
                <div className={styles.ServiceNamePriceDescription}>
                    <input type='text' className={styles.ServiceNamePriceDescriptionInput}
                    placeholder={namePlaceholder}/>
                    <input type='number' className={styles.ServiceNamePriceDescriptionInput}
                    placeholder={pricePlaceholder}/>
                </div>
                <textarea className={styles.ServiceDescription}
                placeholder={descriptionPlaceholder}/>
                <div className={styles.ServiceFormContainer}>
                    <button className={styles.ConfirmButton}
                    onClick={handleCloseForm}>{confirmButton}</button>
                </div>
                
            </div>
        </div>
    )
}
export default AddService