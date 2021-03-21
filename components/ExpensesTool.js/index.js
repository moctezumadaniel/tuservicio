import ExpenseForm from "./ExpenseForm";
import OrdersDashboard from "./OrdersDashboard";
import {useSelector} from 'react-redux';
function ExpensesTool (){
    const currentTab = useSelector(state=>state.expensesTool)
        switch(currentTab){
            case 'Dashboard':
                return <OrdersDashboard/>
            case 'Expense':
                return <ExpenseForm/>;
            default:
                return<OrdersDashboard/>
        }
        
}
export default ExpensesTool