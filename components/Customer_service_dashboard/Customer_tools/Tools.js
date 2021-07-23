import OrdersTool from "../../OrdersTool";
import {useSelector} from 'react-redux'
import ExpensesTool from "../../ExpensesTool.js";
import CustomersTool from "../../CustomersTool";
import ProvidersTool from "../../ProvidersTool";
import CalculatorTool from "../../CalculatorTool";
import TicketsTool from "../../TicketsTool";
import FinancesTool from "../../FinancesTool";
function Tools (){
    const currentTool = useSelector(state=>state.customerActiveTool)
    switch(currentTool){
        case 'Orders':
            return(<OrdersTool/>);
        case 'Expenses':
            return(<ExpensesTool/>);
        case 'Customers':
            return(<CustomersTool/>);
        case 'Providers':
            return(<ProvidersTool/>);
        case 'Calculator':
            return(<CalculatorTool/>);
        case 'Receipts':
            return (<TicketsTool/>);
        case 'Finances':
            return <FinancesTool/>
        default:
            return ""
        
    }
}
export default Tools