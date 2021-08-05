import styles from '../../../styles/UserReservations.module.css'
import {UserLogin} from '../../User_login'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'

function UserReservations(){
    const {isAuthenticated, isLoading} = useAuth0()
    return(
        <>
        {!isAuthenticated && !isLoading?
        <UserLogin/>:
        <ListOfReservations/>
        }
        </>
    )
}

export default UserReservations

function ListOfReservations (){
    const userReservations = useSelector(state => state.customerInformation.reservations)

    const configureButton = 'CANCELAR'
    const contactButton = 'CONTACTAR'

    console.log(userReservations)
    if(userReservations.length > 0){
        return (
            <div className={styles.ListOfReservationsContainer}>
                {userReservations.map(reservation => (
                <div className={styles.ReservationItem}>
                
                    <div className={styles.ItemSchedule}>{reservation.schedule}</div>
                    <div className={styles.ItemCustomerName}>{reservation.customer}</div>
                    <div className={styles.ItemDescription}>{reservation.description}</div>
    
                    <div className={styles.ReservationItemButtonsContainer}>
                        <button className={styles.EditReservationButton}>{configureButton}</button>
                        <button className={styles.AttendedReservationButton}>{contactButton}</button>
                    </div>

                </div>
                ))

                }
            </div>
        )
    }
}