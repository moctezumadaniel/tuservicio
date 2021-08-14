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
    updateFinancesToolReportsBetweenDates, 
    updateFinancesToolReportsEnd, 
    updateFinancesToolReportsStart} from "../../redux/actions/FinancesTool";
import { useEffect, useState } from "react";

function FinancesTool (){
    const customers = useSelector(state => state.customerInformation.customers)
    const providers = useSelector(state => state.customerInformation.providers)
    const tickets = useSelector(state => state.customerInformation.tickets)
    const expenses = useSelector(state => state.customerInformation.expenses)
    const financesTool = useSelector(state => state.financesTool)
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

    function getBetweenDates(){
        let betweenDates = []
        let start = new Date(financesTool.start)
        let end = new Date(financesTool.end)

        console.log(start + end)
        

        //  while(start <= end){
        //     betweenDates.push(start)
        //     start = new Date(
        //          start.getFullYear(),
        //          start.getMonth(),
        //          start.getDay() +1
        //      )
        // }
        console.log(betweenDates)
        return betweenDates

    }
    /*CUSTOMERS */
    const groupedCustomers = () =>{
        return customers.reduce((obj, operation) =>{
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
        return providers.reduce((obj, operation) =>{
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
        return tickets.reduce((obj, ticket)=>{
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
        return expenses.reduce((obj,expense)=>{
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
        if(financesTool.start && financesTool.end){
            dispatch(updateFinancesToolReportsBetweenDates(getBetweenDates()))
        }

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
    }
    useEffect(()=>
        setFinanceToolState(), [financesTool.start, financesTool.end]
    )
    console.log(financesTool)
    return(
        <>
        <div className={styles.DateInputsContainer}>
            <div>
                <span className={styles.DateConectors}>{initialDateTitle}</span>
                <input type='date' name="start"
                value={financesTool.start} 
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