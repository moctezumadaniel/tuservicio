import styles from '../../styles/ExpensesTool.module.css'
function ExpensesTool (){
    const registerExpenseButton = '+ Registrar nuevo gasto'
    const customExpensesRange = 'Seleccionar periodo personalizado'
    const dateRangeSelected = 'Marzo 2021'
    const dateRangeTotalDescription = 'Gastos totales'
    const dateRangeTotal = '$25,000'
    const expenseItemDate = '23 de Marzo'
    const expenseItemAmounth = '$12,500'
    const expenseItemDescription = 'Ejemplo de descripcion del servicio Ejemplo de descripcion del servicio Ejemplo de descripcion del servicio'
    const openEditItemButton = 'VER O EDITAR'
    return(
        <div className={styles.ExpensesToolMainContainer}>
            <button className={styles.RegisterExpenseButton}>{registerExpenseButton}</button>
            <button className={styles.CustomDateRangeButton}>{customExpensesRange}</button>
            <div className={styles.DateRangeSelected}>{dateRangeSelected}</div>
            <div className={styles.GrandTotalContainer}>
                <div>{dateRangeTotalDescription}</div>
                <div>{dateRangeTotal}</div>
            </div>

            <div className={styles.ExpenseItemContainer}>
                <div className={styles.ExpenseMainInformation}>
                    <div>{expenseItemDate}</div>
                    <div>{expenseItemAmounth}</div>
                </div>
                <div>{expenseItemDescription}</div>
                <button>{openEditItemButton}</button>
            </div>
        </div>
    )
}
export default ExpensesTool