import CustomersReport from "./CustomersReport";
import ExpensesReport from "./ExpensesReport";
import ProvidersReport from "./ProvidersReport";
import SalesReport from "./SalesReport";
import styles from '../../styles/FinancesTool.module.css'
import IncomeStatement from "./IncomeStatement";
import BalanceSheet from "./BalanceSheet";
import { useDispatch, useSelector } from "react-redux";
import { updateFinancesToolCustomersAmounths, 
    updateFinancesToolCustomersGrandTotal, 
    updateFinancesToolCustomersKeys, 
    updateFinancesToolExpensesAmounths, 
    updateFinancesToolExpensesGrandTotal, 
    updateFinancesToolExpensesKeys, 
    updateFinancesToolIncomeAmounths, 
    updateFinancesToolIncomeGrandTotal, 
    updateFinancesToolIncomeKeys, 
    updateFinancesToolProvidersAmounths, 
    updateFinancesToolProvidersGrandTotal, 
    updateFinancesToolProvidersKeys, 
    updateFinancesToolReportsEnd, 
    updateFinancesToolReportsStart} from "../../redux/actions/FinancesTool";
import { useEffect } from "react";

function FinancesTool (){
    const financesTool = useSelector(state => state.financesTool)
    const betweenDates = financesTool.betweenDates
    const customers = useSelector(state => state.customerInformation.customers)
    const providers = useSelector(state => state.customerInformation.providers)
    const tickets = useSelector(state => state.customerInformation.tickets)
    const expenses = useSelector(state => state.customerInformation.expenses)
    const initialDateTitle = 'Fecha inicial de los reportes'
    const endDateTitle = 'Fecha final de los reportes'
    const dispatch = useDispatch()


    /*DATE */

    function changeDate(event){
        const type = event.target.name
        const value = event.target.value
        let { start } = financesTool
        let { end } = financesTool
        if(type === 'start' && (value < end || !end)){
            dispatch(updateFinancesToolReportsStart(event.target.value))
            
        }
        else if(type === 'end' && (value > start || !start)){
            dispatch(updateFinancesToolReportsEnd(event.target.value))
        }
        
    }

    function filterOperationsByDate(operations){ 
        const result =  operations.filter(
            operation => financesTool.betweenDates.includes(operation.date.slice(0,10))
        )
        console.log(result)
        return result
    }

    /*CUSTOMERS */
    const groupedCustomers = () =>{
        const filteredCustomers = 
            betweenDates.length > 1 ?
            filterOperationsByDate(customers)
            :customers
        return filteredCustomers.reduce((obj, operation) =>{
            const key = operation.name
            if(obj[key] == null) obj[key] = [];
            obj[key].push(operation)
            return obj
        },{})
    }
    function getOperationDebt(operation){
        if(operation.operation == 'payment'){
            return -operation.amounth
        }else return operation.amounth
    }
    const totalDebtPerCustomer = () =>{
        const keys = Object.keys(groupedCustomers())
        return keys.map(key => {
            return groupedCustomers()[key].reduce((acum, operation) => 
            acum + getOperationDebt(operation), 0
            )
        })
        
    }
    const grandTotalCustomersDebt = () =>{
        return totalDebtPerCustomer().reduce((acum, amounth) =>
        acum + amounth, 0
        )
    }
    /*PROVIDERS */
    const groupedProviders = () =>{
        const filterdProviders = 
            betweenDates.length > 1 ?
            filterOperationsByDate(providers)
            :providers
        return filterdProviders.reduce((obj, operation) =>{
            const key = operation.name
            if(obj[key] == null) obj[key] = [];
            obj[key].push(operation)
            return obj
        },{})
    }
    function getOperationDebt(operation){
        if(operation.operation == 'payment'){
            return -operation.amounth
        }else return operation.amounth
    }
    const totalDebtPerProvider = () =>{
        const keys = Object.keys(groupedProviders())
        return keys.map(key => {
            return groupedProviders()[key].reduce((acum, operation) => 
            acum + getOperationDebt(operation), 0
            )
        })
        
    }
    const getProvidersGrandTotal = () =>{
        return totalDebtPerProvider().reduce((acum, amounth) =>
        acum + amounth, 0
        )
    }
    /*TICKETS */
    
    const ticketsGrupedPerDay = () => {
        const filteredTickets = 
            betweenDates.length > 1 ?
            filterOperationsByDate(tickets)
            :tickets
        return filteredTickets.reduce((obj, ticket)=>{
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
    /*EXPENSES */
    const groupedExpenses = () =>{
        const filteredExpenses = 
            betweenDates.length > 1 ?
            filterOperationsByDate(expenses)
            :expenses
        return filteredExpenses.reduce((obj,expense)=>{
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
    /*SET FINANCE TOOL STATE */
    

    function setFinanceToolState(){

        dispatch(updateFinancesToolCustomersGrandTotal(grandTotalCustomersDebt()))
        dispatch(updateFinancesToolCustomersKeys(Object.keys(groupedCustomers())))
        dispatch(updateFinancesToolCustomersAmounths(totalDebtPerCustomer()))

        dispatch(updateFinancesToolProvidersGrandTotal(getProvidersGrandTotal()))
        dispatch(updateFinancesToolProvidersKeys(Object.keys(groupedProviders())))
        dispatch(updateFinancesToolProvidersAmounths(totalDebtPerProvider()))

        dispatch(updateFinancesToolIncomeGrandTotal(totalSales()))
        dispatch(updateFinancesToolIncomeKeys(Object.keys(ticketsGrupedPerDay())))
        dispatch(updateFinancesToolIncomeAmounths(totalSalesPerDay()))

        dispatch(updateFinancesToolExpensesGrandTotal(totalExpenses()))
        dispatch(updateFinancesToolExpensesKeys(Object.keys(groupedExpenses())))
        dispatch(updateFinancesToolExpensesAmounths(totalExpensesPerDay()))

        console.log(financesTool)

    }
    useEffect(()=>
        setFinanceToolState(), [financesTool.start, financesTool.end]
    )
    return(
        <>
        <div className={styles.DateInputsContainer}>
            <div>
                <span className={styles.DateConectors}>{initialDateTitle}</span>
                <input type='date' name="start"
                value={financesTool.start.slice(0,10)} 
                onChange={(e)=>changeDate(e)}
                className={styles.Datenput}/>
            </div>

            <div>
                <span className={styles.DateConectors}>{endDateTitle}</span>
                <input type='date' name="end" 
                value={financesTool.end}
                onChange={(e)=>changeDate(e)}
                className={styles.Datenput}/>
            </div>
        </div>

        <div className={styles.FinancesContainer}>
            <SalesReport/>
            <ExpensesReport/>
            <CustomersReport/>
            <ProvidersReport/>
            <IncomeStatement/>
            <BalanceSheet/>
        </div>
        </>
    )
}
export default FinancesTool