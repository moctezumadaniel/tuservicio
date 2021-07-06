import styles from '../../../styles/CustomerReservationsSchedule.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {changeCustomerReservationsFormToAddSchedule, changeCustomerReservationsFormToEditSchedule} from '../../../redux/actions/CustomerReservationsForms'
import { changeCustomerSchedulePeriodSelected } from '../../../redux/actions/CustomerSchedulePeriod'
import axios from 'axios'
import { updateCustomerPublicInformationListOfSchedules } from '../../../redux/actions/CustomerPublicInformation'
import { loadCustomerEditingSchedule } from '../../../redux/actions/CustomerEditingSchedule'

function ScheduleList (){
    const customerId = useSelector(state => state.customerPublicInformation.customerId)
    const currentPeriod = useSelector(state => state.customerSchedulePeriod)
    const customerSchedules = useSelector(state => state.customerPublicInformation.listOfSchedules)
    const dispatch = useDispatch()
    const editItem = 'EDITAR';
    const deleteItem = 'ELIMINAR'
    function editSchedule (schedule){
        dispatch(loadCustomerEditingSchedule(schedule),
        dispatch(changeCustomerReservationsFormToEditSchedule()))
        
    }
    function deleteSchedule(customerId, id){
        axios.delete(`api/customer/deleteCustomerSchedule`,{
            params:{
                customerId,
                id
            }
        })
        .then(response => {
            if(response.data){
                dispatch(updateCustomerPublicInformationListOfSchedules(response.data.listOfSchedules))
                console.log(response)
            }
        })
        .catch(error => console.log(error))
    }
    return(
        <div className={styles.ScheduleListContainer}>
        {
        customerSchedules && currentPeriod === 'Dias laborales'?
        customerSchedules.map(schedule => (
            <div className={styles.ScheduleItem} key={schedule._id}>
                    <div className={styles.ScheduleTimeContainer}>{`${schedule.start} a ${schedule.end}`}</div>
                    <div className={styles.ScheduleDescription}>{schedule.description}</div>
                    
                    <div className={styles.ScheduleButtonsContainer}>
                        <button className={styles.EditItemSchedule}
                        onClick={()=>editSchedule(schedule)}>
                            {editItem}
                        </button>

                        <button className={styles.DeleteSchedule}
                        onClick={()=>deleteSchedule(customerId,schedule._id)}>
                            {deleteItem}
                        </button>
                    </div>

                </div>
        ))
        :customerSchedules && currentPeriod !== 'Dias laborales' ?
        customerSchedules.map(schedule => {
            if(schedule.day === currentPeriod || schedule.day === 'Dias laborales'){
                return(
                <div className={styles.ScheduleItem} key={schedule._id}>
                        <div className={styles.ScheduleTimeContainer}>{`${schedule.start} a ${schedule.end}`}</div>
                        <div className={styles.ScheduleDescription}>{schedule.description}</div>
                        
                        <div className={styles.ScheduleButtonsContainer}>
                            <button className={styles.EditItemSchedule}
                            onClick={()=>editSchedule(schedule)}>
                                {editItem}
                            </button>
                            <button className={styles.DeleteSchedule}
                            onClick={()=>deleteSchedule(customerId,schedule._id)}>
                                {deleteItem}
                            </button>
                        </div>

                    </div>
                )}
            })
        :""}
        </div>
    )
}

function ReservationsSchedule (){
    const dispatch = useDispatch()
    const title = 'Lista de horarios';
    const addSchedule = 'AGREGAR HORARIO'
    const workdays = 'Dias laborales'; /*GET THEM FROM THE USER INFORMATION*/ 
    const monday = 'Lunes';
    const tuesday = 'Martes';
    const wednesday = 'Miércoles';
    const thursday = 'Jueves';
    const friday = 'Viernes';
    const saturday = 'Sábado';
    const sunday = 'Domingo';
    const schedule = '16:00 a 16:30'
    const description = 'Descripcion corta del motivo de la reservacion';
    function handleAddAchedule(){
        dispatch(changeCustomerReservationsFormToAddSchedule())
    }
    function handlePeriodChange(event){
        const period = event.target.value
        dispatch(changeCustomerSchedulePeriodSelected(period))
    }
    return(
        <div className={styles.MainContainer}>
{/*SCHEDULE TITLE */}
            <div className={styles.TitleContainer}>{title}</div>
            <div className={styles.AddScheduleContainer}>
                <button className={styles.AddScheduleButton}
                onClick={handleAddAchedule}>{addSchedule}</button>
            </div>

{/*DAY/S SELECTION */}
            <div className={styles.DaysSelectionContainer}>
                <select className={styles.DaysSelection}
                onClick={(event)=>handlePeriodChange(event)}>
                    <option value={workdays}>{workdays}</option>
                    <option value={monday}>{monday}</option>
                    <option value={tuesday}>{tuesday}</option>
                    <option value={wednesday}>{wednesday}</option>
                    <option value={thursday}>{thursday}</option>
                    <option value={friday}>{friday}</option>
                    <option value={saturday}>{saturday}</option>
                    <option value={sunday}>{sunday}</option>
                    
                </select>
            </div>

{/*SCHEDULE LIST */}
            <ScheduleList/>
        </div>
    )
}
export default ReservationsSchedule