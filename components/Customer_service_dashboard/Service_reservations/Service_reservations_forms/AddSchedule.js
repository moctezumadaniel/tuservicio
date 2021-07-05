import styles from '../../../../styles/CustomerReservationsForms.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {changeCustomerReservationsFormToNone} from '../../../../redux/actions/CustomerReservationsForms'
import { useState } from 'react'
import axios from 'axios'
import { updateCustomerPublicInformationListOfSchedules } from '../../../../redux/actions/CustomerPublicInformation'
function AddSchedule (){
    const customerInformation = useSelector(state => state.customerPublicInformation)
    const [temporalNewSchedule, setTemporalNewSchedule] = useState({
        day:"",
        start:"",
        end:"",
        description:""

    })
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
       setTemporalNewSchedule({...temporalNewSchedule, [input]:newValue})

    }
    function addSchedule(customerId, newSchedule){
        axios.post(`api/customer/addCustomerSchedule`,{
            customerId,
            day:newSchedule.day,
            start:newSchedule.start,
            end:newSchedule.end,
            description:newSchedule.description
        })
        .then(response => {
            if(response.data){
                dispatch(updateCustomerPublicInformationListOfSchedules(response.data.listOfSchedules))
                console.log(response)
            }
        })
    }
    console.log(temporalNewSchedule)
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}></div>
            <div className={styles.ModalContainer}>
                <select className={styles.ListOfDaysContainer} name="day"
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
                    value={temporalNewSchedule.start}
                    onChange={(event)=>handleInputUpdate(event)}/>{toConnector}
                    <input type="time" className={styles.ScheduleTimeInput}
                    name="end"
                    value={temporalNewSchedule.end}
                    onChange={(event)=>handleInputUpdate(event)}/>
                </div>
                <div>
                    <div className={styles.ScheduleDescriptionTitle}>{description}</div>
                    <input className={styles.ScheduleDescriptionInput} type="text"
                    name="description"
                    value={temporalNewSchedule.description}
                    onChange={(event)=>handleInputUpdate(event)}/>
                
                </div>
                <div className={styles.ConfirmScheduleContainer}>
                    <button className={styles.ConfirmButton}
                    onClick={()=>addSchedule(customerInformation.customerId, temporalNewSchedule)}>{confirmButton}</button>
                </div>
            </div>
        </div>
    )
}
export default AddSchedule