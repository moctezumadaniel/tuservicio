import styles from '../../../../styles/CustomerProfileForms.module.css'
import { useDispatch, useSelector } from "react-redux";
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'
import { changeCustomerPublicInformationShortDesciption } from '../../../../redux/actions/CustomerPublicInformation';
import { useState } from 'react';
import axios from 'axios'
function ShortDescription (){
    const customerInformation = useSelector(state => state.CustomerPublicInformation)
    const [temporalShortDescription, setTemporalShortDescription ] = useState(customerInformation.shortDescription)
    const dispatch = useDispatch()
    const shortDescriptionPlaceholder = 'Escribe una descripcion corta sobre tu negocio'
    const confirmButton = 'ACEPTAR'
    function handleCloseForm(){
        dispatch(changeCustomerProfileFormToNone())
    }

    function updateCustomerShortDescription(shortDescription){
        axios.patch(`api/customer/updateCustomerShortDescription`,{
            params:{
                userId:customerInformation.userId,
                shortDescription
            }
        })
        .then(response => {
            if(response.success){
                dispatch(changeCustomerPublicInformationShortDesciption(temporalShortDescription))
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
                <div>
                    <textarea className={styles.ShortDescriptionContainer}
                    placeholder={shortDescriptionPlaceholder}/>
                </div>
                <div className={styles.FullWidthContainer}>
                    <button onClick={handleCloseForm}
                    className={styles.ConfirmButton}>{confirmButton}</button>
                </div>
            </div>

        </div>
    )
}
export default ShortDescription