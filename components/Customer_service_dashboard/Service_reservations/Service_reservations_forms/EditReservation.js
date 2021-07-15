import styles from '../../../../styles/CustomerReservationsForms.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {changeCustomerReservationsFormToNone} from '../../../../redux/actions/CustomerReservationsForms'
import { useState } from 'react'
import axios from 'axios'
import { updateCustomerPublicInformationListOfReservations } from '../../../../redux/actions/CustomerPublicInformation'
function EditReservation (){
    const customerId = useSelector(state => state.customerPublicInformation.customerId)
    const [temporalEditingReservation, setTemporalEditingReservation] = useState(
        useSelector(state => state.customerEditingReservation) 
    )
    const dispatch = useDispatch()
    const dateTitle = "Fecha"
    const scheduleTitle = "Reservación de:"
    const scheduleTo = " a "
    const customerName = "Nombre del cliente"
    const addDescription = "Descripción del servicio"
    const confirmButton = "ACEPTAR"
    function handleCloseForm(){
        dispatch(changeCustomerReservationsFormToNone())
    }
    function handleInputChange(event){
        const input = event.target.name
        const change = event.target.value
        setTemporalEditingReservation({...temporalEditingReservation, [input]: change})
    }
    function restartNewReservation (){
        setTemporalEditingReservation({
            date:"",
            start:"",
            end:"",
            name:"",
            description:""
        })
    }
    function addReservation (customerId, reservation){
        axios.patch(`api/customer/updateCustomerEditingReservation`,{
            customerId,
            id: reservation._id,
            date:reservation.date,
            start:reservation.start,
            end:reservation.end,
            name:reservation.name,
            description:reservation.description
        })
        .then(response =>{
            if(response.data){
                dispatch(updateCustomerPublicInformationListOfReservations(response.data.listOfReservations),
                restartNewReservation(),
                dispatch(changeCustomerReservationsFormToNone()))
                console.log(response)
            }
        })
        .catch(error => console.log(error))
    }
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}></div> 

            <div className={styles.ModalContainer}>
                <div className={styles.ReservationInputContainer}>
                    <div className={styles.AddReservationsTitle}>{dateTitle}</div>
                    <input type="date" className={styles.ReservationDateInput}
                    name="date"
                    value={temporalEditingReservation.date.slice(0,10)}
                    onChange={(event)=>handleInputChange(event)}/>
                </div>

                <div className={styles.ReservationInputContainer}>
                    <div className={styles.AddReservationsTitle}>{scheduleTitle}</div>
                    <input type="time" className={styles.ReservationScheduleInput}
                    name="start"
                    value={temporalEditingReservation.start}
                    onChange={(event)=>handleInputChange(event)}/>{scheduleTo}

                    <input type="time" className={styles.ReservationScheduleInput}
                    name="end"
                    value={temporalEditingReservation.end}
                    onChange={(event)=>handleInputChange(event)}/>
                </div>

                <div className={styles.ReservationInputContainer}>
                    <div className={styles.AddReservationsTitle}>{customerName}</div>
                    <input type="text" className={styles.ReservationNameInput}
                    name="name"
                    value={temporalEditingReservation.name}
                    onChange={(event)=>handleInputChange(event)}/>
                </div>

                <div className={styles.ReservationInputContainer}>
                    <div className={styles.AddReservationsTitle}>{addDescription}</div>
                    <input type="text" className={styles.ReservationNameInput}
                    name="description"
                    value={temporalEditingReservation.description}
                    onChange={(event)=>handleInputChange(event)}/>
                </div>

                <div className={styles.ConfirmReservationContainer}>
                    <button className={styles.ConfirmButton}
                    onClick={()=>addReservation(customerId, temporalEditingReservation)}>{confirmButton}</button>
                </div>
            </div>

        </div>
    )
}
export default EditReservation