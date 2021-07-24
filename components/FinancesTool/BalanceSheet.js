import styles from '../../styles/FinancesTool.module.css'
function BalanceSheet() {
    const balanceSheetTitle = 'Balance'
    
    return (
        <div className={styles.FinanceComponentContainer}>
            <div className={styles.Title}>{balanceSheetTitle}</div>
            <div className={styles.ChartContainer}>
                
            </div>
        </div>
    )
}
export default BalanceSheet