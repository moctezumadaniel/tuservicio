import ExpenseForm from "./ExpenseForm";
import OrdersDashboard from "./OrdersDashboard";
import {useSelector} from 'react-redux';
import EditingExpense from "./EditingExpense";
function ExpensesTool (){
    const currentTab = useSelector(state=>state.expensesTool)
        switch(currentTab){
            case 'Dashboard':
                return <OrdersDashboard/>
            case 'Expense':
                return <ExpenseForm/>;
            case 'EditingExpense':
                return <EditingExpense/>;
            default:
                return<OrdersDashboard/>;
        }
        
}
export default ExpensesTool