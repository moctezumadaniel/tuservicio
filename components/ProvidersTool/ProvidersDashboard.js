import styles from '../../styles/ProvidersTool.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {changeProvidersToolToCredit, 
    changeProvidersToolToEditingCredit, 
    changeProvidersToolToEditingPayment, 
    changeProvidersToolToPayment, 
    loadProvidersToolEditingCreditForm,
    loadProvidersToolEditingPaymentForm} from '../../redux/actions/ProvidersTool'
import { updateCustomerInformationProviders } from '../../redux/actions/CustomerInformation';
import axios from 'axios';
function ProvidersList(){
    const grandTotalCreditDescription = 'Deuda pendiente:';
    const openAndEdit = 'Ver o editar';
    const buttonDelete = 'Eliminar'
    const customerId = useSelector(state => state.customerInformation.customerId)
    const providersList = useSelector(state => state.customerInformation.providers)
    const dispatch = useDispatch()
    const groupedProviders = {...providersList.reduce(
        function(obj, value){
            var key = value.name;
            if(obj[key] == null) obj[key] = [];
            obj[key].push(value)
            return obj
        }
    ,[])}
    const calculateGrandTotalCredit = (operations) =>{
        return operations.reduce((acumulator, i)=>{
            if(i.operation == 'credit'){
            return acumulator + i.amounth
            }
            else return acumulator - i.amounth
        },0)
    }
    function editCredit(form){
        dispatch(changeProvidersToolToEditingCredit(),
        dispatch(loadProvidersToolEditingCreditForm(form)))
    }

    function editPayment(form){
        dispatch(changeProvidersToolToEditingPayment(),
        dispatch(loadProvidersToolEditingPaymentForm(form)))
    }
    function deleteCustomerOperation(customerId, id){
        axios.delete(`api/customer/deleteProviderOperation`,{
            params:{
                customerId,
                id     
            }
        })
        .then(response =>{
            if(response.data){
                dispatch(updateCustomerInformationProviders(response.data.providers))
                console.log(response)
            }
        })
        .catch(error => console.log(error))
    }
    return(
        <div>
        {Object.keys(groupedProviders).map(provider => (
            <div key={provider}>
                <div className={styles.CustomerName}>{provider}</div>

                <div className={styles.CustomerCreditContainer}>
                    <div className={styles.CustomerCreditDescription}>{grandTotalCreditDescription}</div>
                    <div>{`${calculateGrandTotalCredit(groupedProviders[provider])}`}</div>
                </div>

                <div className={styles.CustomerItemsContainer}>
                {groupedProviders[provider].map(operation =>{
                    if(operation.operation == 'payment'){
                        return(
                        <div className={styles.CustomerPaymentItemContainer} key={operation._id}>
                            <div className={styles.ItemTitleContainer}>
                                <div>{operation.date ? operation.date.slice(0,10): ""}</div>
                                <div className={styles.PaymentAmounth}>{`$${operation.amounth || 0}`}</div>
                            </div>
                            <div>{operation.description}</div>
                            <div className={styles.OpenEditButtonContainer}>
                                <button className={styles.OpenEditButton}
                                onClick={()=>editPayment(operation)}>
                                    {openAndEdit}
                                </button>
                                <button className={styles.DeleteButton}
                                onClick={()=>deleteCustomerOperation(customerId, operation._id)}>
                                {buttonDelete}
                                </button>
                            </div>
                        </div>
                        )
                    }
                    else return(
                    <div className={styles.CustomerCreditItemContainer} key={operation._id}>
                        <div className={styles.ItemTitleContainer}>
                            <div>{operation.date ? operation.date.slice(0,10): ""}</div>
                            <div className={styles.CreditAmounth}>{`$${operation.amounth || 0}`}</div>
                        </div>
                        <div>{operation.description}</div>
                        <div className={styles.OpenEditButtonContainer}>
                            <button className={styles.OpenEditButton}
                            onClick={()=>editCredit(operation)}>
                                {openAndEdit}
                            </button>
                            <button className={styles.DeleteButton}
                            onClick={()=>deleteCustomerOperation(customerId, operation._id)}>
                                {buttonDelete}
                            </button>
                        </div>
                    </div>
                    )
                })
                    
                }
                </div>
            </div>

            
        ))

        }
        </div>
    )
}
function ProvidersDashboard(){
    const dispatch = useDispatch()
    function handleNewCreditPress(){
        dispatch(changeProvidersToolToCredit())
    }
    function handleNewPaymentPress(){
        dispatch(changeProvidersToolToPayment())
    }
    const searchProvider = 'Escribe el nombre del proveedor';
    const newPayment = '+ Pago';
    const newCredit = '+ Crédito';
    const providerName = 'Nombre Completo del Proveedor';
    const grandTotalCreditDescription = 'Deuda pendiente:';
    const grandTotalCredit = '$25,000';
    
    const paymentDate = '23 de Marzo'
    const totalPayment = '$12,500';
    const paymentDescription = 'Descripción del pago de la deuda Descripción del pago de la deuda Descripción del pago de la deuda';

    const creditDate = '21 de Marzo'
    const totalCredit = '$12,500';
    const CreditDescription = 'Descripción del pago de la deuda Descripción del pago de la deuda Descripción del pago de la deuda';


    return(
        <div className={styles.MainDashboardContainer}>
            <input type='text' placeholder={searchProvider}
            className={styles.CustomersSearch}/>

            <div className={styles.AddButtonsContainer}>

                <button className={styles.AddPaymentButton}
                onClick={handleNewPaymentPress}>{newPayment}</button>

                <button className={styles.AddCreditButton}
                onClick={handleNewCreditPress}>{newCredit}</button>
                
            </div>
{/*LIST OF CUSTOMERS OR CUSTOMER*/}
            <ProvidersList/>
        </div>
    )
}
export default ProvidersDashboard