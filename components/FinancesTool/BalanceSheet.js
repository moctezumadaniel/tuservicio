import styles from '../../styles/FinancesTool.module.css'
function BalanceSheet() {
    const balanceSheetTitle = 'Balance'
    const customersTitle = 'Clientes:'
    const debtorsTitle = 'Deudores Diversos:'

    const providersTitle = 'Proveedores:'
    const creditorsTitle = 'Acreedores Diversos:'

    const profitTitle = 'Utilidad:'
    
    return (
        <div className={styles.FinanceComponentContainer}>
            <div className={styles.Title}>{balanceSheetTitle}</div>
            <div className={styles.ChartContainer}>


                <div className={styles.ConceptStatementContainer}>
                    <div className={styles.ConceptDescription}>{customersTitle}</div>
                    <div className={styles.ConceptAmouth}>$31212121</div>
                </div>

                <div className={styles.ConceptStatementContainer}>
                    <div className={styles.ConceptDescription}>{debtorsTitle}</div>
                    <div className={styles.ConceptAmouth}>$31212121</div>
                </div>

                <div className={styles.ConceptStatementContainer}>
                    <div className={styles.ConceptDescription}>{providersTitle}</div>
                    <div className={styles.ConceptAmouth}>$31212121</div>
                </div>

                <div className={styles.ConceptStatementContainer}>
                    <div className={styles.ConceptDescription}>{creditorsTitle}</div>
                    <div className={styles.ConceptAmouth}>$31212121</div>
                </div>

                <div className={styles.ConceptStatementContainer}>
                    <div className={styles.ConceptDescription}>{profitTitle}</div>
                    <div className={styles.ConceptAmouth}>$31212121</div>
                </div>

            </div>
        </div>
    )
}
export default BalanceSheet