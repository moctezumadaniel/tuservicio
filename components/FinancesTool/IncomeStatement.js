import { useSelector } from 'react-redux'
import styles from '../../styles/FinancesTool.module.css'
function IncomeStatement() {
    const incomeStatementTitle = 'Resultados'
    const totalSalesTitle = 'Ventas:'
    const totalExpensesTitle = 'Gastos:'
    const totalProfitTitle = 'Utilidad:'
    const totalLostTitle = 'Pérdida:'
    const profitPorcentageTitle = ' Porcentaje de Utilidad:'

    const financesTool = useSelector(state => state.financesTool)
    
    const Sales = financesTool.incomeGrandTotal
    const Expenses = financesTool.expensesGrandTotal
    const ProfitOrLost = Sales - Expenses
    const ProfitPorcentage = 
        ProfitOrLost ?
        `${Math.abs((ProfitOrLost/Sales)*100).toFixed(2)}%`
        :`NA`

    return (
        <div className={styles.FinanceComponentContainer}>
            <div className={styles.Title}>{incomeStatementTitle}</div>
            <div className={styles.ReportContainer}>

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