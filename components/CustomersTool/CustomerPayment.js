import styles from '../../styles/CustomersTool.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
    changeCustomersToolPaymentFormName,
    changeCustomersToolPaymentFormDate,
    changeCustomersToolPaymentFormAmounth,
    changeCustomersToolPaymentFormDescription
} from '../../redux/actions/CustomersTool'
function CustomerPayment (){
    const nameInput = 'Escribe el nombre del cliente';
    const amounthInput = 'Escribe el monto del crédito'
    const save = 'GUARDAR CRÉDITO';
    const share = 'COMPARTIR / GUARDAR'
/*COMPONENT STATE */
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
    console.log(formState)
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
                <button className={styles.SavePaymentButton}>{save}</button>
                <button className={styles.ShareButton}>{share}</button>
            </div>
            <textarea className={styles.TextAreaForm}
            value={formState.description}
            onChange={handleDescriptionChange}/>
        </div>
    )
}
export default CustomerPayment