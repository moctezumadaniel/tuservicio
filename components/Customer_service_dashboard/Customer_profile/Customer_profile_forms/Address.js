import styles from '../../../../styles/CustomerProfileForms.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'
import { changeCustomerPublicInformationAddress } from '../../../../redux/actions/CustomerPublicInformation'
import { useState } from 'react'
import axios from 'axios'
function Address (){
    const customerInformation = useSelector(state => state.CustomerPublicInformation)
    const [temporalAddress, setTemporalAddress] = useState(customerInformation.address)
    const dispatch = useDispatch()
    const addressPlaceholder = "Escribe la dirección de tu negocio"
    const confirmButton = 'ACEPTAR'
    function handleCloseForm(){
        dispatch(changeCustomerProfileFormToNone())
    }

    function updateCustomerAddress(address){
        axios.patch(`api/customer/updateCustomerAddress`,{
            params:{
                customerId:customerInformation.customerId,
                address
            }
        })
        .then(response =>{
            if(response.success){
                dispatch(changeCustomerPublicInformationAddress(temporalAddress))
            }
        })
        .catch(error => console.log(error))
    }
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}>
            </div>
            
            <div className={styles.ModalContainer}>
                <textarea className={styles.AddresInput}
                placeholder={addressPlaceholder}/>
                <button className={styles.ConfirmButton}>{confirmButton}</button>
            </div>
        </div>
    )
}
export default Address