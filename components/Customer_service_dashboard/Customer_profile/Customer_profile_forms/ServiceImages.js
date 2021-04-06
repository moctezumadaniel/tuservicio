import styles from '../../../../styles/CustomerProfileForms.module.css'
import {useDispatch} from 'react-redux'
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'

function ServiceImages () {
    const dispatch = useDispatch()
    function handleCloseForm (){
        dispatch(changeCustomerProfileFormToNone())
    }
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground} 
            onClick={handleCloseForm}>
            </div>

            <div className={styles.ModalContainer}>
                FORMULARIO PARA CAMBIAR IMAGENES PENDIENTE
            </div>

        </div>
    )
}export default ServiceImages