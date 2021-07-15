import styles from '../../../../styles/CustomerProfileForms.module.css'
import { useDispatch, useSelector } from "react-redux";
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'
import { changeCustomerPublicInformationShortDesciption } from '../../../../redux/actions/CustomerPublicInformation';
import { useState } from 'react';
import axios from 'axios'
function ShortDescription (){
    const customerInformation = useSelector(state => state.customerPublicInformation)
    const [shortDescriptionUpdating, setShortDescriptionUpdating] = useState(false)
    const [temporalShortDescription, setTemporalShortDescription ] = useState(customerInformation.shortDescription)
    const dispatch = useDispatch()
    const shortDescriptionPlaceholder = 'Escribe una descripcion corta sobre tu negocio'
    const confirmButton = 'ACEPTAR'
    function handleCloseForm(){
        dispatch(changeCustomerProfileFormToNone())
    }
    function updateTemporalShortDescription(event){
        setTemporalShortDescription(event.target.value)
    }
    function updateCustomerShortDescription(customerId,shortDescription){
        setShortDescriptionUpdating(true)
        axios.patch(`api/customer/updateCustomerShortDescription`,{
                customerId,
                shortDescription
        })
        .then(response => {
            if(response){
                dispatch(changeCustomerPublicInformationShortDesciption(response.data.shortDescription),
                dispatch(changeCustomerProfileFormToNone()))
                console.log(response)
            }
        })
        .catch(error => console.log(error))
        setShortDescriptionUpdating(false)
    }
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}>
            </div>

            <div className={styles.ModalContainer}>
                {!shortDescriptionUpdating ?
                <>
                <div>
                    <textarea className={styles.ShortDescriptionContainer}
                    value={temporalShortDescription}
                    onChange={updateTemporalShortDescription}
                    placeholder={shortDescriptionPlaceholder}/>
                </div>
                <div className={styles.FullWidthContainer}>
                    <button onClick={handleCloseForm}
                    className={styles.ConfirmButton}
                    onClick={()=>updateCustomerShortDescription(customerInformation.customerId,temporalShortDescription)}>
                        {confirmButton}</button>
                </div>
                </>
                :""}   
            </div>

        </div>
    )
}
export default ShortDescription