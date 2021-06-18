import styles from '../../../../styles/CustomerProfileForms.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'
import { changeCustomerPublicInformationMoreInformation } from '../../../../redux/actions/CustomerPublicInformation'
import { useState } from 'react'
import axios from 'axios'

function MoreInformation (){
    const customerInformation = useSelector(state => state.CustomerPublicInformation)
    const [temporalMoreInformation, setTemporalMoreInformation] = useState(customerInformation.moreInformation)
    const dispatch = useDispatch()
    const moreInformationPlaceholder = "Escribe sin límite todo lo que quieras que tus clientes sepan de tu negocio"
    const confirmButton = 'ACEPTAR'
    function handleCloseForm(){
        dispatch(changeCustomerProfileFormToNone())
    }
    function updateCustomerMoreInformation(moreInformation){
        axios.patch(`api/customer/updateCustomerMoreInformation`,{
            params:{
                customerId:customerInformation.customerId,
                moreInformation
            }
        })
        .then(response =>{
            if(response.success){
                dispatch(changeCustomerPublicInformationMoreInformation(temporalMoreInformation))
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
                placeholder={moreInformationPlaceholder}/>
                <button className={styles.ConfirmButton}
                onClick={handleCloseForm}>{confirmButton}</button>
            </div>
        
        </div>
    )
}
export default MoreInformation