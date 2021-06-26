import styles from '../../../../styles/CustomerProfileForms.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'
import { changeCustomerPublicInformationMoreInformation } from '../../../../redux/actions/CustomerPublicInformation'
import { useState } from 'react'
import axios from 'axios'

function MoreInformation (){
    const customerInformation = useSelector(state => state.customerPublicInformation)
    const [updatingMoreInformation, setUpdatingMoreInformation] = useState(false)
    const [temporalMoreInformation, setTemporalMoreInformation] = useState(customerInformation.moreInformation)
    const dispatch = useDispatch()
    const moreInformationPlaceholder = "Escribe sin límite todo lo que quieras que tus clientes sepan de tu negocio"
    const confirmButton = 'ACEPTAR'
    function handleCloseForm(){
        dispatch(changeCustomerProfileFormToNone())
    }
    function updateTemporalMoreInformation(event){
        setTemporalMoreInformation(event.target.value)
    }
    function updateCustomerMoreInformation(customerId,moreInformation){
        setUpdatingMoreInformation(true)
        axios.patch(`api/customer/updateCustomerMoreInformation`,{
            customerId,
            moreInformation
        })
        .then(response =>{
            if(response.data){
                dispatch(changeCustomerPublicInformationMoreInformation(response.data.moreInformation))
                console.log(response)
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
                
                <textarea className={styles.MoreInformationInput}
                placeholder={moreInformationPlaceholder}
                value={temporalMoreInformation}
                onChange={updateTemporalMoreInformation}/>

                <button className={styles.ConfirmButton}
                onClick={()=>updateCustomerMoreInformation(customerInformation.customerId, temporalMoreInformation)}>{confirmButton}</button>

            </div>
        
        </div>
    )
}
export default MoreInformation