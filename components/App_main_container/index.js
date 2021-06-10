import AppUserContainer from "../App_user_container";
import {useSelector} from 'react-redux'
import AppCustomerContainer from "../App_customer_container";
import { useAuth0 } from '@auth0/auth0-react'
import connectDB from '../../middleware/mongodb'
import { useEffect, useState } from "react";
import axios from 'axios'


function AppMainContainer (){
    const [userData, setUserData] = useState(null)
    const { isAuthenticated, isLoading,user } = useAuth0()
    const currentPlatform = useSelector(state=>state.platformType)
    useEffect(()=>{
            axios.get(`api/user/getCreateUserInformation`,{
                params:{
                    user:user
                }
            })
            .then(response => setUserData(response))
            .catch(error => console.log(error))
    },[])
    console.log(user)
    console.log(userData)
    return(
        currentPlatform === 'Customer'&& isAuthenticated?
        <AppCustomerContainer/>
        : <AppUserContainer/>
            
        
    )
}
export default AppMainContainer