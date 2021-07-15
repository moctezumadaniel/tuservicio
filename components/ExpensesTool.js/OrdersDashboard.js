import styles from '../../styles/ExpensesTool.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {changeExpenseToolToExpense} from '../../redux/actions/ExpenseTool'

function ExpensesList(){
    const customerInformation = useSelector(state => state.customerInformation)
    const expenses = customerInformation.expenses

    const openEditItemButton = 'VER O EDITAR'
    if(expenses.length > 0){
        return(
        <div className={styles.ListOfExpensesContainer}>

        {expenses.map( expense =>(

        <div className={styles.ExpenseItemContainer}>
            <div className={styles.ExpenseMainInformation}>
                <div>{expense.date.slice(0,10)}</div>
                <div>{`$${expense.amounth}`}</div>
            </div>
            <div className={styles.ExpenseDescription}>{expense.description.slice(0,141)}</div>
            <button className={styles.OpenEditItemButton}>{openEditItemButton}</button>
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
        console.log(total)
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