import styles from '../../styles/UserServices.module.css'
function UserServicesTabButtons(){
    return(
        <div className={styles.TabButtonsContainer}>
            <button className={styles.TabButtonActive}>Reservaciones</button>
            <button className={styles.TabButtons}>Anteriores</button>
            <button className={styles.TabButtons}>Favoritos</button>
        </div>
    );
}

export default UserServicesTabButtons