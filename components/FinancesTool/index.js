import CustomersReport from "./CustomersReport";
import ExpensesReport from "./ExpensesReport";
import ProvidersReport from "./ProvidersReport";
import SalesReport from "./SalesReport";

function FinancesTool (){
    return(
        <>
        FINANZAS
        <SalesReport/>
        <ExpensesReport/>
        <CustomersReport/>
        <ProvidersReport/>
        </>
    )
}
export default FinancesTool