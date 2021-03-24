import OrdersTool from "../../OrdersTool";
import {useSelector} from 'react-redux'
import ExpensesTool from "../../ExpensesTool.js";
import CustomersTool from "../../CustomersTool";
import ProvidersTool from "../../ProvidersTool";
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
        default:
            return ""
        
    }
}
export default Tools