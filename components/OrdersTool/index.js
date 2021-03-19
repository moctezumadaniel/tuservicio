import OrdersDashboard from "./Dashboard"
import {useSelector} from 'react-redux'
import Order from "./Order"
function OrdersTool (){
    const currentTab = useSelector(state=>state.ordersTool)
    return(
        currentTab === 'Order' ?
        <Order/>
        
        :<OrdersDashboard/>
    )
}
export default OrdersTool