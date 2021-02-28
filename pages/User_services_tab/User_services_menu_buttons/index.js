import styles from '../../../styles/UserServices.module.css'
function UserServicesMenuButtons(){
    return(
        <div className={styles.TabButtonsContainer}>
            <button className={styles.TabButtons}>Reservaciones</button>
            <button className={styles.TabButtons}>Anteriores</button>
            <button className={styles.TabButtons}>Favoritos</button>
        </div>
    );
}

export default UserServicesMenuButtons
