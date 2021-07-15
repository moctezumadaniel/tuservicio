import styles from '../../../../styles/CustomerProfileForms.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'
import { changeCustomerPublicInformationAddress } from '../../../../redux/actions/CustomerPublicInformation'
import { useState } from 'react'
import axios from 'axios'
function Address (){
    const customerInformation = useSelector(state => state.customerPublicInformation)
    const [updatingAddress, setUpdatingAddress] = useState(false)
    const [temporalAddress, setTemporalAddress] = useState(customerInformation.address)
    const dispatch = useDispatch()
    const addressPlaceholder = "Escribe la dirección de tu negocio"
    const confirmButton = 'ACEPTAR'
    function handleCloseForm(){
        dispatch(changeCustomerProfileFormToNone())
    }
    function updateTemporalAdress(event){
        setTemporalAddress(event.target.value)
    }
    function updateCustomerAddress(customerId,address){
        setUpdatingAddress(true)
        axios.patch(`api/customer/updateCustomerAddress`,{
            customerId,
            address
        })
        .then(response =>{
            if(response.data){
                dispatch(changeCustomerPublicInformationAddress(response.data.address),
                dispatch(changeCustomerProfileFormToNone()))
                console.log(response)
            }
        })
        .catch(error => console.log(error))
        setUpdatingAddress(false)
    }
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}>
            </div>
            
            <div className={styles.ModalContainer}>

                <textarea className={styles.AddresInput}
                placeholder={addressPlaceholder}
                value={temporalAddress}
                onChange={updateTemporalAdress}/>

                <button className={styles.ConfirmButton}
                onClick={()=>updateCustomerAddress(customerInformation.customerId, temporalAddress)}>
                    {confirmButton}
                </button>

            </div>
        </div>
    )
}
export default Address