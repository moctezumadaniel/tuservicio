import styles from '../../../../styles/CustomerProfileForms.module.css'
import {useDispatch} from 'react-redux'
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'

function AddService (){
    const dispatch = useDispatch()
    const addImageLabel = "Agregar Imágen"
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
                    <input type='text' className={styles.ServiceNamePriceDescriptionInput}/>
                    <input type='number' className={styles.ServiceNamePriceDescriptionInput}/>
                </div>
                <textarea className={styles.ServiceDescription} placeholder="placeholder"/>
                
            </div>
        </div>
    )
}
export default AddService