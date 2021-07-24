import CustomersReport from "./CustomersReport";
import ExpensesReport from "./ExpensesReport";
import ProvidersReport from "./ProvidersReport";
import SalesReport from "./SalesReport";
import styles from '../../styles/FinancesTool.module.css'
import { style } from "@material-ui/system";
function FinancesTool (){
    return(
        <div className={styles.FinancesContainer}>
        <SalesReport/>
        <ExpensesReport/>
        <CustomersReport/>
        <ProvidersReport/>
        </div>
    )
}
export default FinancesTool