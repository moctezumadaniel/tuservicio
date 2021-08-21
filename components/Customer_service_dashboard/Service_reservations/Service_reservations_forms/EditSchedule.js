import styles from '../../../../styles/CustomerReservationsForms.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {changeCustomerReservationsFormToNone} from '../../../../redux/actions/CustomerReservationsForms'
import { useState } from 'react'
import axios from 'axios'
import { updateCustomerPublicInformationListOfSchedules } from '../../../../redux/actions/CustomerPublicInformation'
function EditSchedule (){
    const customerInformation = useSelector(state => state.customerPublicInformation)
    const [temporalEditingSchedule, setTemporalEditingSchedule] = useState(
        useSelector(state => state.customerEditingSchedule)
    )
    const dispatch = useDispatch()
    const workdays = 'Dias laborales'; /*GET THEM FROM THE USER INFORMATION*/ 
    const monday = 'Lunes';
    const tuesday = 'Martes';
    const wednesday = 'Miércoles';
    const thursday = 'Jueves';
    const friday = 'Viernes';
    const saturday = 'Sábado';
    const sunday = 'Domingo';
    const timeTitle = "Horario de:"
    const toConnector = " a "
    const description = "Descripción"
    const confirmButton = "ACEPTAR"
    function handleCloseForm(){
        dispatch(changeCustomerReservationsFormToNone())
    }
    function handleInputUpdate (event){
       const input = event.target.name;
       const newValue = event.target.value
       if(input == 'start' && (change < temporalNewReservation.end || !temporalNewReservation.end)){
        setTemporalNewReservation({...temporalNewReservation, [input]: change})
        }
        else if(input == 'end' && (change > temporalNewReservation.start || !temporalNewReservation.start)){
            setTemporalNewReservation({...temporalNewReservation, [input]: change})
        }
        else if(input == 'start' || input == 'end'){
            return
        }
        else
       setTemporalEditingSchedule({...temporalEditingSchedule, [input]:newValue})

    }
    function updateSchedule(customerId, editSchedule){
        axios.patch(`api/customer/updateCustomerEditingSchedule`,{
            customerId,
            id:editSchedule._id,
            day:editSchedule.day,
            start:editSchedule.start,
            end:editSchedule.end,
            description:editSchedule.description
        })
        .then(response => {
            if(response.data){
                dispatch(updateCustomerPublicInformationListOfSchedules(response.data.listOfSchedules),
                dispatch(changeCustomerReservationsFormToNone()))
                console.log(response)
            }
        })
    }
    console.log(temporalEditingSchedule)
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}></div>
            <div className={styles.ModalContainer}>
                <select className={styles.ListOfDaysContainer} name="day"
                value={temporalEditingSchedule.day}
                onChange={(event)=>handleInputUpdate(event)}>
                    <option value={workdays}>{workdays}</option>
                    <option value={monday}>{monday}</option>
                    <option value={tuesday}>{tuesday}</option>
                    <option value={wednesday}>{wednesday}</option>
                    <option value={thursday}>{thursday}</option>
                    <option value={friday}>{friday}</option>
                    <option value={saturday}>{saturday}</option>
                    <option value={sunday}>{sunday}</option>
                    
                </select>
                <div className={styles.ScheduleInputContainer}>
                    <div className={styles.ScheduleTimeTitle}>{timeTitle}</div>
                    <input type="time" className={styles.ScheduleTimeInput}
                    name="start"
                    value={temporalEditingSchedule.start}
                    onChange={(event)=>handleInputUpdate(event)}/>{toConnector}
                    <input type="time" className={styles.ScheduleTimeInput}
                    name="end"
                    value={temporalEditingSchedule.end}
                    onChange={(event)=>handleInputUpdate(event)}/>
                </div>
                <div>
                    <div className={styles.ScheduleDescriptionTitle}>{description}</div>
                    <input className={styles.ScheduleDescriptionInput} type="text"
                    name="description"
                    value={temporalEditingSchedule.description}
                    onChange={(event)=>handleInputUpdate(event)}/>
                
                </div>
                <div className={styles.ConfirmScheduleContainer}>
                    <button className={styles.ConfirmButton}
                    onClick={()=>updateSchedule(customerInformation.customerId, temporalEditingSchedule)}>{confirmButton}</button>
                </div>
            </div>
        </div>
    )
}
export default EditSchedule