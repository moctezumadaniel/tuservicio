import styles from '../../styles/UserServices.module.css'

function UserReservations(){
    const defaultPage = "Aún no tienes reservaciones"
    return(
        <div className={styles.UserReservationsContainer}>
            {defaultPage}
        </div>
    )
}
export default UserReservations