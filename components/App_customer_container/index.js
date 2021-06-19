import CustomerServiceDashboard from "../Customer_service_dashboard";
import PreferencesTab from "../Preferences_tab";
import UserMessagesTab from "../User_messages_tab";

import { useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { loadCustomerPublicInformation } from '../../redux/actions/CustomerPublicInformation'
import { loadCustomerInformation } from "../../redux/actions/CustomerInformation";
function AppCustomerContainer(){
    const dispatch = useDispatch()
    const customerData = useSelector(state => state.customerPublicInformation)
    const customerInformation = useSelector(state => state.customerInformation)
    const {isAuthenticated, isLoading, user } = useAuth0()
    function setCustomerPublicInformation (data){
        dispatch(loadCustomerPublicInformation(data))
    }
    function setCustomerInformation (data){
        dispatch(loadCustomerInformation(data))
    }
    useEffect(()=>{ 
        if(isAuthenticated && !isLoading){
            axios.get(`api/customer/getCreateCustomerPublicInformation`,{
                params:{
                    user:user.sub
                }
            })
            .then(response => setCustomerPublicInformation(response.data))
            .catch(error => console.log(error))
            
            axios.get(`api/customer/getCreateCustomerInformation`,{
                params:{
                    user:user.sub
                }
            })
            .then(response => setCustomerInformation(response.data))
            .catch(error => console.log(error))
        }
    },[])
    console.log(customerData)
    console.log(customerInformation)
    if(customerData){
        return(
        <div>
            <CustomerServiceDashboard/>
            <UserMessagesTab/>
            <PreferencesTab/>
        </div>
    )}else{
        return(
            <div>
                CARGANDO
            </div>
        )
    }
}
export default AppCustomerContainer