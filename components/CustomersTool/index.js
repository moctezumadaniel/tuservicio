import {useSelector} from 'react-redux'
import CustomerCredit from './CustomerCredit';
import CustomerPayment from './CustomerPayment';
import CustomersToolDashboard from './CustomersToolDashboard'
function CustomersTool (){
    const currentTab = useSelector(state=>state.customersTool)
    switch(currentTab){
        case 'Dashboard':
            return <CustomersToolDashboard/>;
        case 'Payment':
            return <CustomerPayment/>;
        case 'Credit':
            return <CustomerCredit/>;
        default:
            return <CustomersToolDashboard/>
            
    }
}
export default CustomersTool