import AppUserContainer from "../App_user_container";
import {useSelector, useDispatch} from 'react-redux'
import AppCustomerContainer from "../App_customer_container";
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from "react";
import { loadAllUserInformation } from '../../redux/actions/UserInformation'
import axios from 'axios'


function AppMainContainer (){
    const dispatch = useDispatch()
    const { isAuthenticated, isLoading,user } = useAuth0()
    const currentPlatform = useSelector(state=>state.platformType)
    const userInformation = useSelector(state => state.userInformation)
    function setUserInformationState(data){
        dispatch(loadAllUserInformation(data))
    }
    useEffect(()=>{
            axios.get(`api/user/getCreateUserInformation`,{
                params:{
                    user:user
                }
            })
            .then(response => setUserInformationState(response.data))
            .catch(error => console.log(error))
    },[])
    console.log(userInformation)
    return(
        currentPlatform === 'Customer'&& isAuthenticated?
        <AppCustomerContainer/>
        : <AppUserContainer/>
            
        
    )
}
export default AppMainContainer