import styles from '../../styles/UserServices.module.css'
function UserSearch(){
    const placeholder = "Escribe el servicio que necesites"
    return(
        <div className={styles.SearchBarContainer}>
            <input className={styles.SearchBar}type="text" placeholder={placeholder}/>
            <button className={styles.SearchButton}>Buscar</button>
        </div>
    )
}

export default UserSearch