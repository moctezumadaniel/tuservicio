import PreferencesTab from "../Preferences_tab";
import UserMessagesTab from "../User_messages_tab";
import UserServicesTab from "../User_services_tab";

import { useSelector, useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from "react";
import { loadAllUserInformation } from '../../redux/actions/UserInformation'
import axios from 'axios'

function AppUserContainer (){
    const userInformation = useSelector(state=>state.userInformation)

    const dispatch = useDispatch()
    const { isAuthenticated, isLoading, user } = useAuth0()
    function setUserInformationState(data){
        dispatch(loadAllUserInformation(data))
    }
    useEffect(()=>{ 
        if(isAuthenticated && !isLoading){
            axios.get(`api/user/getCreateUserInformation`,{
                params:{
                    user:user.sub
                }
            })
            .then(response => setUserInformationState(response.data))
            .catch(error => console.log(error))
            
        }
    },[])
    console.log(user.sub)
    console.log(userInformation)
    return(
        <div>
            <UserServicesTab/>
            <PreferencesTab/>
            <UserMessagesTab/>
        </div>
    )
}
export default AppUserContainer



