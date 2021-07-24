import styles from '../../styles/FinancesTool.module.css'
function IncomeStatement() {
    const incomeStatementTitle = 'Resultados'
    
    return (
        <div className={styles.FinanceComponentContainer}>
            <div className={styles.Title}>{incomeStatementTitle}</div>
            <div className={styles.ChartContainer}>
                
            </div>
        </div>
    )
}
export default IncomeStatement