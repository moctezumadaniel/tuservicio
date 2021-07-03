import styles from '../../../styles/CustomerPendingReservations.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {changeCustomerReservationsFormToAddReservation} from '../../../redux/actions/CustomerReservationsForms'
import axios from 'axios'
import { updateCustomerPublicInformationListOfReservations } from '../../../redux/actions/CustomerPublicInformation'
function ListOfReservations(){
    const listOfReservations = useSelector(state => state.customerPublicInformation.listOfReservations)
    const customerId = useSelector(state => state.customerPublicInformation.customerId)
    const dispatch = useDispatch()
    const configureButton = 'EDITAR'
    const doneButton = 'ATENDIDA'
    console.log(useSelector(state => state.customerPublicInformation.listOfReservations))
    
    function deleteReservation(customerId, id){
        axios.delete(`api/customer/deleteCustomerReservation`,{
            params:{
                customerId,
                id
            }
        })
        .then(response =>{
            if(response.data){
                dispatch(updateCustomerPublicInformationListOfReservations(response.data.listOfReservations))
                console.log(response)
            }
        })
        .catch(error => console.log(error))

    }
    return(
        <div className={styles.ListOfReservationsContainer}>
        {
        listOfReservations.map(reservation =>(
            <div className={styles.ReservationItem} key={reservation._id}>

                <div className={styles.ItemSchedule}>
                    {`${reservation.date} de ${reservation.start} a ${reservation.end}`}
                </div>
                <div className={styles.ItemCustomerName}>{reservation.name}</div>
                <div className={styles.ItemDescription}>{reservation.description}</div>

                <div className={styles.ReservationItemButtonsContainer}>
                    <button className={styles.EditReservationButton}>{configureButton}</button>
                    <button className={styles.AttendedReservationButton}
                    onClick={()=>deleteReservation(customerId, reservation._id)}>{doneButton}</button>
                </div>

            </div>
        ))
        }
        </div>
    )
}


function CurrentReservations(){
    const dispatch = useDispatch()
    const title = 'Por atender';
    const addReservation = 'AGREGAR RESERVACIÓN'
    const schedule = '21 de Marzo de 8:00am a 8:30am';
    const customer = 'Nombre Completo del Cliente'
    const description = 'Descripcion corta del motivo de la reservacion';
    function handleAddReservationPress(){
        dispatch(changeCustomerReservationsFormToAddReservation())
    }
    return(
        <div className={styles.MainContainer}>
{/*TITLE AND BUTTON TO ADD MANUAL RESERVATION */}
            <div className={styles.TitleContainer}>{title}</div>

            <div className={styles.AddReservationContainer}>
                <button className={styles.AddReservationButton}
                onClick={handleAddReservationPress}>{addReservation}</button>
            </div>

{/*LIST OF PENDING RESERVATIONS */}
            <ListOfReservations/>
        </div>
    )
}
export default CurrentReservations