import styles from '../../styles/UserServices.module.css'
import {useDispatch} from 'react-redux'
import {changeToSearch} from '../../redux/actions/UserServicesTab'
import { useState } from 'react'
import axios from 'axios'
import { deleteUserDisplayedServices, 
    loadUserDisplayedServices } from '../../redux/actions/UserDisplayedServices'
import { changeUserServicesSearchToDone, changeUserServicesSearchToSearching } from '../../redux/actions/UserServicesSearch'
function UserSearch(){
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const placeholder = "Escribe el servicio que necesites"
    const searchButton = "Buscar"
    function changeSearch (event){
        setSearch(event.target.value)
    }
    function searchServices(search){
        dispatch(changeUserServicesSearchToSearching())
        dispatch(deleteUserDisplayedServices())
        dispatch(changeToSearch())
        axios.get(`api/user/searchServices`,{
            params:{
                search
            }
        })
        .then(response => {
            if(response.data){
                dispatch(loadUserDisplayedServices(response.data),
                dispatch(changeUserServicesSearchToDone()))
                console.log(response.data)
            }
        })
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