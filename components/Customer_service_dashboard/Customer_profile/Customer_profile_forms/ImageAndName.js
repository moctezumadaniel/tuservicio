import styles from '../../../../styles/CustomerProfileForms.module.css'
import {useDispatch} from 'react-redux'
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'
function ImageAndName (){
    const profileImage = 'IMAGEN DE PERFIL';
    const changeImageButton = 'Cambiar imágen'
    const serviceName = 'Escribe el nombre de tu servicio'
    const confirmButton = 'ACEPTAR'
    const dispatch = useDispatch()

    function handleCloseForm(){
        dispatch(changeCustomerProfileFormToNone())
    }
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}>
            </div>
            <div className={styles.ModalContainer}>
                <div className={styles.ProfileImageFormContainer}>
                    <div className={styles.ProfileImage}></div>
                    <div className={styles.ProfileImageButtonContainer}>
                        <button className={styles.ProfileImageButton}>{changeImageButton}</button>
                    </div>
                </div>
                <div className={styles.ProfileNameContainer}>
                    <input type='text' className={styles.ProfileName} placeholder={serviceName}/>
                </div>
                <div className={styles.ConformButtonContainer}>
                    <button className={styles.ConfirmButton}>{confirmButton}</button>
                </div>
            </div>
        </div>
    )
}
export default ImageAndName