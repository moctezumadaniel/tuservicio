import styles from '../../styles/CustomersTool.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {changeCustomersToolToCredit, changeCustomersToolToPayment} from '../../redux/actions/CustomersTool'
function CustomersList(){
    const grandTotalCreditDescription = 'Cobros pendientes:';
    const grandTotalCredit = '$25,000';
    const openAndEdit = 'VER O EDITAR';
    const customersList = useSelector(state => state.customerInformation.customers)
    const calculateGrandTotalCredit = (operations) =>{
        console.log(operations)
        return operations.reduce((acumulator, i)=>{
            if(i.operation == 'credit'){
            return acumulator + i.amounth
            }
            else return acumulator - i.amounth
        },0)
    }
    const groupedCustomers = {...customersList.reduce(
        function(obj, value){
            var key = value.name;
            if(obj[key] == null) obj[key] = [];
            obj[key].push(value)
            return obj
        }
    ,[])}
    console.log(groupedCustomers)
    return(
        <div>
        {Object.keys(groupedCustomers).map(customer => (
            <>
            <div className={styles.CustomerName}>{customer || 'Sin Nombre'}</div>

            <div className={styles.CustomerCreditContainer}>
                <div className={styles.CustomerCreditDescription}>{grandTotalCreditDescription}</div>
                <div>{`${calculateGrandTotalCredit(groupedCustomers[customer])}`}</div>
            </div>
            <div className={styles.CustomerItemsContainer}>
            {groupedCustomers[customer].map(operation =>{
                if(operation.operation == 'payment'){
                    return(
                    <div className={styles.CustomerItemsContainer}>
                        <div className={styles.CustomerPaymentItemContainer}>
                            <div className={styles.ItemTitleContainer}>
                                <div>{operation.date ? operation.date.slice(0,10): ""}</div>
                                <div className={styles.PaymentAmounth}>{`$${operation.amounth || 0}`}</div>
                            </div>
                            <div>{operation.description}</div>
                            <div className={styles.OpenEditButtonContainer}>
                                <button className={styles.OpenEditButton}>{openAndEdit}</button>
                            </div>
                        </div>
                    </div>
                    )
                }
                else return (
                    <div className={styles.CustomerCreditItemContainer}>
                        <div className={styles.ItemTitleContainer}>
                            <div>{operation.date ? operation.date.slice(0,10): ""}</div>
                            <div className={styles.CreditAmounth}>{`$${operation.amounth || 0}`}</div>
                        </div>
                        <div>{operation.description}</div>
                        <div className={styles.OpenEditButtonContainer}>
                            <button className={styles.OpenEditButton}>{openAndEdit}</button>
                        </div>
                    </div>
                )
            })
            
            }
            </div>

            </>
            
        ))
            
        }
        </div>
    )
}
function CustomersToolDashboard (){
    const dispatch = useDispatch()
    function handleAddPaymentPress(){
        dispatch(changeCustomersToolToPayment())
    }
    function handleAddCreditPress(){
        dispatch(changeCustomersToolToCredit())
    }
    const searchCustomer = 'Escribe el nombre del cliente';
    const newPayment = '+ Cobro';
    const newCredit = '+ Crédito';
    return(
        <div className={styles.MainDashboardContainer}>
            <input type='text' placeholder={searchCustomer}
            className={styles.CustomersSearch}/>

            <div className={styles.AddButtonsContainer}>

                <button className={styles.AddPaymentButton}
                onClick={handleAddPaymentPress}>{newPayment}</button>

                <button className={styles.AddCreditButton}
                onClick={handleAddCreditPress}>{newCredit}</button>
                
            </div>
{/*LIST OF CUSTOMERS OR CUSTOMER*/}
<CustomersList/>
            
        </div>
    )
}
export default CustomersToolDashboard