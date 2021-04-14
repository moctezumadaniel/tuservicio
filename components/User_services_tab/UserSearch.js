import styles from '../../styles/UserServices.module.css'
import {useDispatch} from 'react-redux'
import {changeToSearch} from '../../redux/actions/UserServicesTab'
function UserSearch(){
    const dispatch = useDispatch()
    const placeholder = "Escribe el servicio que necesites"
    const searchButton = "Buscar"
    function handleSearchButton (){
        dispatch(changeToSearch())
    }
    return(
        <div className={styles.SearchBarMainContainer}>
            <div className={styles.SearchBarContainer}>
                <input className={styles.SearchBar}type="search" placeholder={placeholder}/>
                <button className={styles.SearchButton}
                onClick={handleSearchButton}>{searchButton}</button>
            </div>
        </div>
    )
}

export default UserSearch