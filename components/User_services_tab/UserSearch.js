import styles from '../../styles/UserServices.module.css'
import {useDispatch} from 'react-redux'
import {changeToSearch} from '../../redux/actions/UserServicesTab'
import { useState } from 'react'
import axios from 'axios'
function UserSearch(){
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const placeholder = "Escribe el servicio que necesites"
    const searchButton = "Buscar"
    function changeSearch (event){
        setSearch(event.target.value)
    }
    function searchServices(search){
        axios.get(`api/user/searchServices`,{
            params:{
                search
            }
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    return(
        <div className={styles.SearchBarMainContainer}>
            <div className={styles.SearchBarContainer}>
                <input className={styles.SearchBar}
                type="search" 
                placeholder={placeholder}
                value={search}
                onChange={(event) => changeSearch(event)}/>

                <button className={styles.SearchButton}
                onClick={()=>searchServices(search)}>{searchButton}</button>
            </div>
        </div>
    )
}

export default UserSearch