import styles from '../../styles/ProvidersTool.module.css'
import { useDispatch, useSelector } from 'react-redux';
import{
    changeProvidersToolToDashboard,
    changeProvidersToolEditingPaymentFormName,
    changeProvidersToolEditingPaymentFormDate,
    changeProvidersToolEditingPaymentFormAmounth,
    changeProvidersToolEditingPaymentFormDescription,
    restartProvidersToolEditingPaymentForm
}from '../../redux/actions/ProvidersTool'
import axios from 'axios';
import { updateCustomerInformationProviders } from '../../redux/actions/CustomerInformation';
function ProviderEditingPayment (){
    const nameInput = 'Escribe el nombre del proveedor';
    const amounthInput = 'Escribe el monto del pago'
    const save = 'GUARDAR PAGO';
    const share = 'COMPARTIR / GUARDAR'
/*FORM STATE */
    const customerId = useSelector(state => state.customerInformation.customerId)
    const formState = useSelector(state=>state.providersToolEditingPaymentForm)
    const dispatch = useDispatch();
    const handleProviderNameChange = event =>{
        dispatch(changeProvidersToolEditingPaymentFormName(event.target.value))
    }
    const handleDateChange = event =>{
        dispatch(changeProvidersToolEditingPaymentFormDate(event.target.value))
    }
    const handleAmounthChange = event =>{
        dispatch(changeProvidersToolEditingPaymentFormAmounth(event.target.value))
    }
    const handleDescriptionChange = event =>{
        dispatch(changeProvidersToolEditingPaymentFormDescription(event.target.value))
    }
    function addPayment(customerId, newPayment){
        axios.post(`api/customer/addProviderOperation`,{
            customerId,
            name:newPayment.name,
            date:newPayment.date,
            amounth:newPayment.amounth,
            description: newPayment.description,
            operation:newPayment.operation
        })
        .then(response => {
            if(response.data){
                dispatch(updateCustomerInformationProviders(response.data.providers),
                dispatch(restartProvidersToolEditingPaymentForm(),
                dispatch(changeProvidersToolToDashboard())))
                console.log(response)
            }
        })
        .catch(error => console.log(error))
    }
    console.log(formState)
    return(
        <div className={styles.CreditFormContainer}>
            <input type='text' className={styles.CustomerNameInput}
            placeholder={nameInput}
            value={formState.name}
            onChange={handleProviderNameChange}/>
            <div className={styles.SecondaryInputsContainer}>
                <input type='date' className={styles.DateInput}
                value={formState.date ? formState.date.slice(0,10):""}
                onChange={handleDateChange}/>
                <input type='number' className={styles.AmounthInput}
                placeholder={amounthInput}
                value={formState.amounth}
                onChange={handleAmounthChange}/>
            </div>
            <div className={styles.SecondaryButtonsContainer}>
                <button className={styles.SavePaymentButton}
                onClick={()=>addPayment(customerId, formState)}>
                    {save}
                </button>
                <button className={styles.ShareButton}>{share}</button>
            </div>
            <textarea className={styles.TextAreaForm}
            value={formState.description}
            onChange={handleDescriptionChange}/>
        </div>
    )
}
export default ProviderEditingPayment