import styles from '../../styles/MainTabButtons.module.css'
function MainTabButtons (){
    return(
        <div className={styles.MainTabButtonsContainer}>
            <button className={styles.MainTabButton}>Servicios</button>
            <button className={styles.MainTabButton}>Preferencias</button>
        </div>
    )
}

export default MainTabButtons