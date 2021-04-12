import styles from '../../styles/UserServices.module.css'
import {useDispatch} from 'react-redux'
import {changeToSearch} from '../../redux/actions/UserServicesTab'
function UserSearch(){
    const dispatch = useDispatch()
    const placeholder = "Escribe el servicio que necesites"
    const serachButton = "Buscar"
    function handleSearchButton (){
        dispatch(changeToSearch())
    }
    return(
        <div className={styles.SearchBarContainer}>
            <input className={styles.SearchBar}type="search" placeholder={placeholder}/>
            <button className={styles.SearchButton}
            onClick={handleSearchButton}>{serachButton}</button>
        </div>
    )
}

export default UserSearch