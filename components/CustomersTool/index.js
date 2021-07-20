import {useSelector} from 'react-redux'
import CustomerCredit from './CustomerCredit';
import CustomerEditingCredit from './CustomerEditingCredit';
import CustomerEditingPayment from './CustomerEditingPayment';
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
        case 'EditingPayment':
            return <CustomerEditingPayment/>
        case 'EditingCredit':
            return <CustomerEditingCredit/>
        default:
            return <CustomersToolDashboard/>
            
    }
}
export default CustomersTool