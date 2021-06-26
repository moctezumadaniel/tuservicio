import styles from '../../../../styles/CustomerProfileForms.module.css'
import { useDispatch, useSelector} from 'react-redux'
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'
import { changeCustomerPublicInformationPhoneNumber } from '../../../../redux/actions/CustomerPublicInformation'
import axios from 'axios'
import { useState } from 'react'
function PhoneNumber(){
    const customerInformation = useSelector(state => state.customerPublicInformation)
    const [updatingPhoneNumber, setUpdatingPhoneNUmber] = useState(false)
    const [temporalPhoneNumber, setTemporalPhoneNumber] = useState(customerInformation.phoneNumber)
    const dispatch = useDispatch();
    const phoneNumberPlaceholder = 'Escribe el teléfono de tu negocio'
    const confirmButton = 'ACEPTAR';
    function handleCloseForm (){
        dispatch(changeCustomerProfileFormToNone())
    }
    function updateTemporalPhoneNumber(event){
        setTemporalPhoneNumber(event.target.value)
    }
    function updateCustomerPhoneNumber(customerId,phoneNumber){
        setUpdatingPhoneNUmber(true)
        axios.patch(`api/customer/updateCustomerPhoneNumber`,{
            customerId,
            phoneNumber
        })
        .then(response => {
            if(response.data){
                dispatch(changeCustomerPublicInformationPhoneNumber(response.data.phoneNumber))
                console.log(response)
            }
        })
        .catch(error => console.log(error))
        setUpdatingPhoneNUmber(false)
    }
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}></div>

            <div className={styles.ModalContainer}>

                {!updatingPhoneNumber ?
                <>
                <input type="tel" className={styles.PhoneNumberInput}
                placeholder={phoneNumberPlaceholder}
                value={temporalPhoneNumber}
                onChange={updateTemporalPhoneNumber}/>
        
            
                <button className={styles.ConfirmButton}
                onClick={()=>updateCustomerPhoneNumber(customerInformation.customerId, temporalPhoneNumber)}>
                    {confirmButton}
                </button>
                </>
                :""}
            </div>
        </div>
    )
}export default PhoneNumber