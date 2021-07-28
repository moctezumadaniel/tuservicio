import CustomersReport from "./CustomersReport";
import ExpensesReport from "./ExpensesReport";
import ProvidersReport from "./ProvidersReport";
import SalesReport from "./SalesReport";
import styles from '../../styles/FinancesTool.module.css'
import IncomeStatement from "./IncomeStatement";
import BalanceSheet from "./BalanceSheet";
function FinancesTool (){
    return(
        <div className={styles.FinancesContainer}>
        <SalesReport/>
        <ExpensesReport/>
        <CustomersReport/>
        <ProvidersReport/>
        <IncomeStatement/>
        <BalanceSheet/>
        </div>
    )
}
export default FinancesTool