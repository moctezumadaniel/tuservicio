import { useSelector } from 'react-redux'
import styles from '../../styles/FinancesTool.module.css'
function BalanceSheet() {
    const balanceSheetTitle = 'Balance'
    const customersTitle = 'Clientes:'
    const debtorsTitle = 'Deudores Diversos:'

    const providersTitle = 'Proveedores:'
    const creditorsTitle = 'Acreedores Diversos:'

    const profitTitle = 'Utilidad:'

    const financesTool = useSelector(state => state.financesTool)

    const calculateCustomers = () =>{
        return financesTool.customersAmounths.reduce((acum, amounth)=>{
            if(amounth >=0){
                return acum + amounth
            }else return acum
        },0)
    }

    const calculateDebtors = () =>{
        return financesTool.providersAmounths.reduce((acum, amounth)=>{
            if(amounth < 0){
                return acum + Math.abs(amounth)
            }else return acum
        },0)
    }
    const calculateProviders = () =>{
        return financesTool.providersAmounths.reduce((acum, amounth)=>{
            if(amounth >=0){
                return acum + amounth
            }else return acum
        },0)
    }

    const calculateCreditors = () =>{
        return financesTool.customersAmounths.reduce((acum, amounth)=>{
            if(amounth < 0){
                return acum + Math.abs(amounth)
            }else return acum
        },0)
    }
    const Customers = calculateCustomers()
    const Debtors = calculateDebtors()
    const Providers = calculateProviders()
    const Creditors = calculateCreditors()
    const ProfitOrLost = financesTool.incomeGrandTotal - financesTool.expensesGrandTotal
    const ProfitOrLostTitle = () =>{
        if(ProfitOrLost >= 0){
            return 'Utilidad'
        }else return 'Pérdida'
    }
    
    return (
        <div className={styles.FinanceComponentContainer}>
            <div className={styles.Title}>{balanceSheetTitle}</div>
            <div className={styles.ChartContainer}>


                <div className={styles.ConceptStatementContainer}>
                    <div className={styles.ConceptDescription}>{customersTitle}</div>
                    <div className={styles.ConceptAmouth}>{`$${Customers}`}</div>
                </div>

                <div className={styles.ConceptStatementContainer}>
                    <div className={styles.ConceptDescription}>{debtorsTitle}</div>
                    <div className={styles.ConceptAmouth}>{`$${Debtors}`}</div>
                </div>

                <div className={styles.ConceptStatementContainer}>
                    <div className={styles.ConceptDescription}>{providersTitle}</div>
                    <div className={styles.ConceptAmouth}>{`$${Providers}`}</div>
                </div>

                <div className={styles.ConceptStatementContainer}>
                    <div className={styles.ConceptDescription}>{creditorsTitle}</div>
                    <div className={styles.ConceptAmouth}>{`$${Creditors}`}</div>
                </div>

                <div className={styles.ConceptStatementContainer}>
                    <div className={styles.ConceptDescription}>{ProfitOrLostTitle()}</div>
                    <div className={styles.ConceptAmouth}>{`$${Math.abs(ProfitOrLost)}`}</div>
                </div>

            </div>
        </div>
    )
}
export default BalanceSheet