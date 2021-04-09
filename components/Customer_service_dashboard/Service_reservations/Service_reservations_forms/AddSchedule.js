import styles from '../../../../styles/CustomerReservationsForms.module.css'
import {useDispatch} from 'react-redux'
import {changeCustomerReservationsFormToNone} from '../../../../redux/actions/CustomerReservationsForms'
function AddSchedule (){
    const dispatch = useDispatch()
    function handleCloseForm(){
        dispatch(changeCustomerReservationsFormToNone())
    }
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}></div>
            <div className={styles.ModalContainer}>

            </div>
        </div>
    )
}
export default AddSchedule