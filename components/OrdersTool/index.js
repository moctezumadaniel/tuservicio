import OrdersDashboard from "./Dashboard"
import EditingOrder from './EditingOrder'
import {useSelector} from 'react-redux'
import Order from "./Order"
function OrdersTool (){
    const currentTab = useSelector(state=>state.ordersTool)
    switch(currentTab){
        case 'Order':
            return <Order/>;
        case 'EditingOrder':
            return <EditingOrder/>;
        case 'Dashboard':
            return <OrdersDashboard/>;
        default:
            return <OrdersDashboard/>;

    }
}
export default OrdersTool