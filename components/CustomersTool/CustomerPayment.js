import styles from '../../styles/CustomersTool.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
    changeCustomersToolPaymentFormName,
    changeCustomersToolPaymentFormDate,
    changeCustomersToolPaymentFormAmounth,
    changeCustomersToolPaymentFormDescription,
    restartCustomersToolPaymentForm,
    changeCustomersToolToDashboard
} from '../../redux/actions/CustomersTool'
import axios from 'axios';
import { updateCustomerInformationCustomers } from '../../redux/actions/CustomerInformation';
function CustomerPayment (){
    const nameInput = 'Escribe el nombre del cliente';
    const amounthInput = 'Escribe el monto del cobro'
    const save = 'GUARDAR COBRO';
    const share = 'COMPARTIR / GUARDAR'
/*COMPONENT STATE */
    const customerId = useSelector(state => state.customerInformation.customerId)
    const formState = useSelector(state=>state.customersToolPaymentForm)
    const dispatch = useDispatch()
    const handleCustomerNameChange = (event) =>{
        dispatch(changeCustomersToolPaymentFormName(event.target.value))
    }
    const handleDateChange = (event) =>{
        dispatch(changeCustomersToolPaymentFormDate(event.target.value))
    }
    const handleAmounthChange = (event) =>{
        dispatch(changeCustomersToolPaymentFormAmounth(event.target.value))
    }
    const handleDescriptionChange = (event) =>{
        dispatch(changeCustomersToolPaymentFormDescription(event.target.value))
    }
    function saveCustomerPayment(customerId, newCredit){
        axios.post(`api/customer/addCustomerOperation`,{
            customerId,
            name:newCredit.customerName,
            date: newCredit.date,
            amounth: newCredit.amounth,
            description: newCredit.description,
            operation:newCredit.type
        })
        .then(response => {
            if(response.data){
                dispatch(updateCustomerInformationCustomers(response.data.customers),
                dispatch(restartCustomersToolPaymentForm()),
                dispatch(changeCustomersToolToDashboard()))
                console.log(response)
            }
        })
        .catch(error => console.log(error))
    }
    return(
        <div className={styles.CreditFormContainer}>
            <input type='text' className={styles.CustomerNameInput}
            placeholder={nameInput}
            value={formState.customerName}
            onChange={handleCustomerNameChange}/>

            <div className={styles.SecondaryInputsContainer}>
                <input type='date' className={styles.DateInput}
                value={formState.date}
                onChange={handleDateChange}/>
                <input type='number' className={styles.AmounthInput}
                placeholder={amounthInput}
                value={formState.amounth}
                onChange={handleAmounthChange}/>
            </div>

            <div className={styles.SecondaryButtonsContainer}>
                <button className={styles.SavePaymentButton}
                onClick={()=>saveCustomerPayment(customerId, formState)}>
                    {save}
                </button>
                <button className={styles.ShareButton}>
                    {share}
                </button>
            </div>

            <textarea className={styles.TextAreaForm}
            value={formState.description}
            onChange={handleDescriptionChange}/>
        </div>
    )
}
export default CustomerPayment