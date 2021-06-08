import AppUserContainer from "../App_user_container";
import {useSelector} from 'react-redux'
import AppCustomerContainer from "../App_customer_container";
import { useAuth0 } from '@auth0/auth0-react'
import connectDB from '../../middleware/mongodb'
import { useEffect, useState } from "react";
import axios from 'axios'


function AppMainContainer (){
    const [userData, setUserData] = useState(null)
    const { isAuthenticated } = useAuth0()
    const { user } = useAuth0() || ""
    const currentPlatform = useSelector(state=>state.platformType)
    useEffect(async()=>{
        if(user){
            const res = await axios.get('api/user/getCreateUserInformation',{
                method:"GET",
                params:{
                    user:user.sub
                }
            })

            const userInformation = res.json()
            setUserData(userInformation)
        }
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