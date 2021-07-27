import { useSelector } from 'react-redux'
import styles from '../../styles/FinancesTool.module.css'
function IncomeStatement() {
    const incomeStatementTitle = 'Resultados'
    const totalSalesTitle = 'Ventas:'
    const totalExpensesTitle = 'Gastos:'
    const totalProfitTitle = 'Utilidad:'
    const totalLostTitle = 'Pérdida:'
    const profitPorcentageTitle = ' Porcentaje de Utilidad:'

    const tickets = useSelector(state => state.customerInformation.tickets)
    const expenses = useSelector(state => state.customerInformation.expenses)

    const ticketsGrupedPerDay = () => {
        return tickets.reduce((obj, ticket)=>{
            const key = ticket.date.slice(0,10)
            if(obj[key]== null) obj[key] = [];
            obj[key].push(ticket)
            return obj
        },{})
    }
    function getTicketGrandTotal(ticket){
        return ticket.items.reduce((acum, item) => 
        acum + (item.amounth || 0), 0
        )
        
    }
    function totalSalesPerDay(){
        const keys = Object.keys(ticketsGrupedPerDay())
        return keys.map(key => {
            return ticketsGrupedPerDay()[key].reduce((acum, ticket) =>
            acum + getTicketGrandTotal(ticket),0
            )
        })
    }

    function totalSales(){
        return totalSalesPerDay().reduce((acum, dayTotal)=>
        acum + dayTotal, 0
        )
    }

    const groupedExpenses = () =>{
        return expenses.reduce((obj,expense)=>{
            const key = expense.date.slice(0,10)
            if(obj[key] == null) obj[key] = [];
            obj[key].push(expense)
            return obj
        },{})
    }
    const totalExpensesPerDay = () =>{
        const keys = Object.keys(groupedExpenses())
        return keys.map(key => {
            return groupedExpenses()[key].reduce((acum, expense) =>
            acum + (expense.amounth || 0), 0
            )
        })
    }

    const totalExpenses = () =>{
        return totalExpensesPerDay().reduce((acum, dayTotal) =>
            acum + dayTotal, 0
        )
    }

    const calculateProfit = () =>{
        return totalSales() - totalExpenses()
    }
    const Sales = totalSales()
    const Expenses = totalExpenses()
    const ProfitOrLost = Sales - Expenses
    const ProfitPorcentage = `${Math.abs((ProfitOrLost/Sales)*100).toFixed(2)}%`
    return (
        <div className={styles.FinanceComponentContainer}>
            <div className={styles.Title}>{incomeStatementTitle}</div>
            <div className={styles.ChartContainer}>

                <div className={styles.ConceptStatementContainer}>
                    <div className={styles.ConceptDescription}>{totalSalesTitle}</div>
                    <div className={styles.ConceptAmouth}>{`$${Sales}`}</div>
                </div>

                <div className={styles.ConceptStatementContainer}>
                    <div className={styles.ConceptDescription}>{totalExpensesTitle}</div>
                    <div className={styles.ConceptAmouth}>{`$${Expenses}`}</div>
                </div>

                <div className={styles.ConceptStatementContainer}>
                    <div className={styles.ConceptDescription}>
                        {ProfitOrLost >= 0 ? totalProfitTitle : totalLostTitle}
                    </div>
                    <div className={styles.ConceptAmouth}>{`$${Math.abs(ProfitOrLost)}`}</div>
                </div>

                <div className={styles.ConceptStatementContainer}>
                    <div className={styles.ConceptDescription}>{profitPorcentageTitle}</div>
                    <div className={styles.ConceptAmouth}>{ProfitPorcentage}</div>
                </div>

            </div>
        </div>
    )
}
export default IncomeStatement