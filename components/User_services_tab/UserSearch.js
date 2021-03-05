import styles from '../../styles/UserServices.module.css'
import {useDispatch} from 'react-redux'
import {changeToSearch} from '../../redux/actions/UserServicesTab'
function UserSearch(){
    const dispatch = useDispatch()
    const placeholder = "Escribe el servicio que necesites"
    function handleSearchButton (){
        dispatch(changeToSearch())
    }
    return(
        <div className={styles.SearchBarContainer}>
            <input className={styles.SearchBar}type="text" placeholder={placeholder}/>
            
            <button className={styles.SearchButton}
            onClick={handleSearchButton}>
                Buscar
            </button>
        </div>
    )
}

export default UserSearch