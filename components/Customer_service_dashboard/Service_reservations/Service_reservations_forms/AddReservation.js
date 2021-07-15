import styles from '../../../../styles/CustomerReservationsForms.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {changeCustomerReservationsFormToNone} from '../../../../redux/actions/CustomerReservationsForms'
import { useState } from 'react'
import axios from 'axios'
import { updateCustomerPublicInformationListOfReservations } from '../../../../redux/actions/CustomerPublicInformation'
function AddReservation (){
    const customerId = useSelector(state => state.customerPublicInformation.customerId)
    const [temporalNewReservation, setTemporalNewReservation] = useState({
        date:"",
        start:"",
        end:"",
        name:"",
        description:""
    })
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
        setTemporalNewReservation({...temporalNewReservation, [input]: change})
    }
    function restartNewReservation (){
        setTemporalNewReservation({
            date:"",
            start:"",
            end:"",
            name:"",
            description:""
        })
    }
    function addReservation (customerId, newReservation){
        axios.post(`api/customer/addCustomerReservation`,{
            customerId,
            date:newReservation.date,
            start:newReservation.start,
            end:newReservation.end,
            name:newReservation.name,
            description:newReservation.description
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
                    value={temporalNewReservation.date}
                    onChange={(event)=>handleInputChange(event)}/>
                </div>

                <div className={styles.ReservationInputContainer}>
                    <div className={styles.AddReservationsTitle}>{scheduleTitle}</div>
                    <input type="time" className={styles.ReservationScheduleInput}
                    name="start"
                    value={temporalNewReservation.start}
                    onChange={(event)=>handleInputChange(event)}/>{scheduleTo}

                    <input type="time" className={styles.ReservationScheduleInput}
                    name="end"
                    value={temporalNewReservation.end}
                    onChange={(event)=>handleInputChange(event)}/>
                </div>

                <div className={styles.ReservationInputContainer}>
                    <div className={styles.AddReservationsTitle}>{customerName}</div>
                    <input type="text" className={styles.ReservationNameInput}
                    name="name"
                    value={temporalNewReservation.name}
                    onChange={(event)=>handleInputChange(event)}/>
                </div>

                <div className={styles.ReservationInputContainer}>
                    <div className={styles.AddReservationsTitle}>{addDescription}</div>
                    <input type="text" className={styles.ReservationNameInput}
                    name="description"
                    value={temporalNewReservation.description}
                    onChange={(event)=>handleInputChange(event)}/>
                </div>

                <div className={styles.ConfirmReservationContainer}>
                    <button className={styles.ConfirmButton}
                    onClick={()=>addReservation(customerId, temporalNewReservation)}>{confirmButton}</button>
                </div>
            </div>

        </div>
    )
}
export default AddReservation