import styles from '../../styles/FinancesTool.module.css'
function IncomeStatement() {
    const incomeStatementTitle = 'Resultados'
    const totalSalesTitle = 'Ventas:'
    const totalExpensesTitle = 'Gastos:'
    const totalProfitTitle = 'Utilidad:'
    const profitPorcentageTitle = ' Porcentaje de Utilidad:'
    return (
        <div className={styles.FinanceComponentContainer}>
            <div className={styles.Title}>{incomeStatementTitle}</div>
            <div className={styles.ChartContainer}>

                <div className={styles.ConceptStatementContainer}>
                    <div className={styles.ConceptDescription}>{totalSalesTitle}</div>
                    <div className={styles.ConceptAmouth}>$31212121</div>
                </div>

                <div className={styles.ConceptStatementContainer}>
                    <div className={styles.ConceptDescription}>{totalExpensesTitle}</div>
                    <div className={styles.ConceptAmouth}>$31212121</div>
                </div>

                <div className={styles.ConceptStatementContainer}>
                    <div className={styles.ConceptDescription}>{totalProfitTitle}</div>
                    <div className={styles.ConceptAmouth}>$31212121</div>
                </div>

                <div className={styles.ConceptStatementContainer}>
                    <div className={styles.ConceptDescription}>{profitPorcentageTitle}</div>
                    <div className={styles.ConceptAmouth}>31.24%</div>
                </div>
                
            </div>
        </div>
    )
}
export default IncomeStatement