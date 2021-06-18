import styles from '../../../../styles/CustomerProfileForms.module.css'
import { useDispatch, useSelector} from 'react-redux'
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'
import { changeCustomerPublicInformationPhoneNumber } from '../../../../redux/actions/CustomerPublicInformation'
import axios from 'axios'
import { useState } from 'react'
function PhoneNumber(){
    const customerInformation = useSelector(state => state.CustomerPublicInformation)
    const [temporalPhoneNumber, setTemporalPhoneNumber] = useState(customerInformation.phoneNumber)
    const dispatch = useDispatch();
    const phoneNumberPlaceholder = 'Escribe el teléfono de tu negocio'
    const confirmButton = 'ACEPTAR';
    function handleCloseForm (){
        dispatch(changeCustomerProfileFormToNone())
    }

    function updateCustomerPhoneNumber(phoneNumber){
        axios.patch(`api/customer/updateCustomerPhoneNumber`,{
            params:{
                customerId:customerInformation.customerId,
                phoneNumber
            }
        })
        .then(response => {
            if(response.success){
                dispatch(changeCustomerPublicInformationPhoneNumber(temporalPhoneNumber))
            }
        })
        .catch(error => console.log(error))
    }
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}></div>

            <div className={styles.ModalContainer}>
                
                    <input type="tel" className={styles.PhoneNumberInput}
                    placeholder={phoneNumberPlaceholder}/>
               
                
                    <button className={styles.ConfirmButton}>{confirmButton}</button>
            
            </div>
        </div>
    )
}export default PhoneNumber