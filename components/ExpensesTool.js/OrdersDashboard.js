import styles from '../../styles/ExpensesTool.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {changeExpenseToolToEditingExpense, changeExpenseToolToExpense} from '../../redux/actions/ExpenseTool'
import axios from 'axios'
import { updateCustomerInformationExpenses } from '../../redux/actions/CustomerInformation'
import { loadExpensesToolEditingFormDate } from '../../redux/actions/CustomerEditingExpense'

function ExpensesList(){
    const customerInformation = useSelector(state => state.customerInformation)
    const expenses = customerInformation.expenses

    const openEditItemButton = 'Ver o editar'
    const deleteButton = 'Eliminar'

    const dispatch = useDispatch()
    function editForm(expense){
        dispatch(loadExpensesToolEditingFormDate(expense),
        dispatch(changeExpenseToolToEditingExpense()))
    }
    function deleteExpense(customerId, id){
        axios.delete(`api/customer/deleteCustomerExpense`,{
            params:{
                customerId,
                id
            }
        })
        .then(response => {
            if(response.data){
                dispatch(updateCustomerInformationExpenses(response.data.expenses),
                console.log(response))
            }
        })
        .catch( error => console.log(error))
    }
    if(expenses.length > 0){
        return(
        <div className={styles.ListOfExpensesContainer}>

        {expenses.map( expense =>(

        <div className={styles.ExpenseItemContainer} key={expense._id}>
            <div className={styles.ExpenseMainInformation}>
                <div>{expense.date.slice(0,10)}</div>
                <div>{`$${expense.amounth}`}</div>
            </div>
            <div className={styles.ExpenseDescription}>{expense.description.slice(0,141)}</div>

            <div className={styles.ExpenseButtonsContainer}>
            <button className={styles.OpenEditItemButton}
            onClick={()=>editForm(expense)}>
                {openEditItemButton}
            </button>
            <button className={styles.DeleteItemButton}
            onClick={()=>deleteExpense(customerInformation.customerId, expense._id)}>
                {deleteButton}
            </button>
            </div>
        </div>
        
        ))
        }

        </div>
        )}
    else return ""
}
function OrdersDashboard (){

    const customerInformation = useSelector(state => state.customerInformation)
    const expenses = customerInformation.expenses
    const dispatch = useDispatch()
    const registerExpenseButton = '+ Registrar nuevo gasto'
    const customExpensesRange = 'Seleccionar periodo personalizado'
    const dateRangeSelected = 'Marzo 2021'
    const dateRangeTotalDescription = 'Gastos totales:'
    const dateRangeTotal = () =>{
        const total = expenses.reduce((acumulator, expense) => acumulator + (expense.amounth || 0), 0)
        return total
       
    }
    const shareReportButton = 'Descargar / Compartir reporte de gastos'
    

    function handleNewExpensePress(){
        dispatch(changeExpenseToolToExpense())
    }
    return(
        <div className={styles.ExpensesToolMainContainer}>
            <div className={styles.RegisterExpenseContainer}>
                <button className={styles.RegisterExpenseButton}
                onClick={handleNewExpensePress}>{registerExpenseButton}</button>
            </div>
            <button className={styles.CustomDateRangeButton}>{customExpensesRange}</button>
            <div className={styles.DateRangeSelected}>{dateRangeSelected}</div>
            
            <div className={styles.GrandTotalContainer}>
                <div className={styles.GrandTotalDescription}>{dateRangeTotalDescription}</div>
                <div className={styles.GrandTotal}>{`$${dateRangeTotal()}`}</div>
            </div>

            <button className={styles.ShareReportButton}>{shareReportButton}</button>
            
            <ExpensesList/>
            

        </div>
    )
}
export default OrdersDashboard