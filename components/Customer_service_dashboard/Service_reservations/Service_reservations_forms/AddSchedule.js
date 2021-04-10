import styles from '../../../../styles/CustomerReservationsForms.module.css'
import {useDispatch} from 'react-redux'
import {changeCustomerReservationsFormToNone} from '../../../../redux/actions/CustomerReservationsForms'
function AddSchedule (){
    const dispatch = useDispatch()
    const workdays = 'Dias laborales'; /*GET THEM FROM THE USER INFORMATION*/ 
    const monday = 'Lunes';
    const tuesday = 'Martes';
    const wednesday = 'Miercoles';
    const thursday = 'Jueves';
    const friday = 'Viernes';
    const saturday = 'Sabado';
    const sunday = 'Domingo';
    const timeTitle = "Horario de:"
    const toConnector = " a "
    const confirmButton = "ACEPTAR"
    function handleCloseForm(){
        dispatch(changeCustomerReservationsFormToNone())
    }
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}></div>
            <div className={styles.ModalContainer}>
                <select className={styles.ListOfDaysContainer}>
                    <option value={workdays}>{workdays}</option>
                    <option value={monday}>{monday}</option>
                    <option value={tuesday}>{tuesday}</option>
                    <option value={wednesday}>{wednesday}</option>
                    <option value={thursday}>{thursday}</option>
                    <option value={friday}>{friday}</option>
                    <option value={saturday}>{saturday}</option>
                    <option value={sunday}>{sunday}</option>
                    
                </select>
                <div>
                    <div className={styles.ScheduleTimeTitle}>{timeTitle}</div>
                    <input type="time" className={styles.ScheduleTimeInput}/>{toConnector}
                    <input type="time" className={styles.ScheduleTimeInput}/>
                </div>
                <div className={styles.ConfirmScheduleContainer}>
                    <button className={styles.ConfirmButton}>{confirmButton}</button>
                </div>
            </div>
        </div>
    )
}
export default AddSchedule