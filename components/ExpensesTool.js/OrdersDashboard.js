import styles from '../../styles/ExpensesTool.module.css'
import {useDispatch} from 'react-redux'
import {changeExpenseToolToExpense} from '../../redux/actions/ExpenseTool'
function OrdersDashboard (){
    const dispatch = useDispatch()
    const registerExpenseButton = '+ Registrar nuevo gasto'
    const customExpensesRange = 'Seleccionar periodo personalizado'
    const dateRangeSelected = 'Marzo 2021'
    const dateRangeTotalDescription = 'Gastos totales:'
    const dateRangeTotal = '$25,000'
    const shareReportButton = 'Descargar / Compartir reporte de gastos'
    const expenseItemDate = '23 de Marzo'
    const expenseItemAmounth = '$12,500'
    const expenseItemDescription = 'Ejemplo de descripcion del servicio Ejemplo de descripcion del servicio Ejemplo de descripcion del servicio'
    const openEditItemButton = 'VER O EDITAR'

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
                <div className={styles.GrandTotal}>{dateRangeTotal}</div>
            </div>

            <button className={styles.ShareReportButton}>{shareReportButton}</button>
            
{/*LIST OF EXPENSES*/}
            <div className={styles.ListOfExpensesContainer}>
              
                <div className={styles.ExpenseItemContainer}>
                    <div className={styles.ExpenseMainInformation}>
                        <div>{expenseItemDate}</div>
                        <div>{expenseItemAmounth}</div>
                    </div>
                    <div className={styles.ExpenseDescription}>{expenseItemDescription}</div>
                    <button className={styles.OpenEditItemButton}>{openEditItemButton}</button>
                </div>

                <div className={styles.ExpenseItemContainer}>
                    <div className={styles.ExpenseMainInformation}>
                        <div>{expenseItemDate}</div>
                        <div>{expenseItemAmounth}</div>
                    </div>
                    <div className={styles.ExpenseDescription}>{expenseItemDescription}</div>
                    <button className={styles.OpenEditItemButton}>{openEditItemButton}</button>
                </div>

                <div className={styles.ExpenseItemContainer}>
                    <div className={styles.ExpenseMainInformation}>
                        <div>{expenseItemDate}</div>
                        <div>{expenseItemAmounth}</div>
                    </div>
                    <div className={styles.ExpenseDescription}>{expenseItemDescription}</div>
                    <button className={styles.OpenEditItemButton}>{openEditItemButton}</button>
                </div>

                <div className={styles.ExpenseItemContainer}>
                    <div className={styles.ExpenseMainInformation}>
                        <div>{expenseItemDate}</div>
                        <div>{expenseItemAmounth}</div>
                    </div>
                    <div className={styles.ExpenseDescription}>{expenseItemDescription}</div>
                    <button className={styles.OpenEditItemButton}>{openEditItemButton}</button>
                </div>

                <div className={styles.ExpenseItemContainer}>
                    <div className={styles.ExpenseMainInformation}>
                        <div>{expenseItemDate}</div>
                        <div>{expenseItemAmounth}</div>
                    </div>
                    <div className={styles.ExpenseDescription}>{expenseItemDescription}</div>
                    <button className={styles.OpenEditItemButton}>{openEditItemButton}</button>
                </div>

                
                
            </div>
            

        </div>
    )
}
export default OrdersDashboard