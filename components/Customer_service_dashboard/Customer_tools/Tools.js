import OrdersTool from "../../OrdersTool";
import {useSelector} from 'react-redux'
import ExpensesTool from "../../ExpensesTool.js";
function Tools (){
    const currentTool = useSelector(state=>state.customerActiveTool)
    switch(currentTool){
        case 'Orders':
            return(<OrdersTool/>);
        case 'Expenses':
            return(<ExpensesTool/>);
        default:
            return ""
        
    }
}
export default Tools