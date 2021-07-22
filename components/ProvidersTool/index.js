import ProvidersDashboard from "./ProvidersDashboard";
import {useSelector} from 'react-redux'
import ProviderPayment from "./ProviderPayment";
import ProviderCredit from "./ProviderCredit";
import ProviderEditingCredit from "./ProviderEditingCredit";
import ProviderEditingPayment from "./ProviderEditingPayment";
function ProvidersTool (){
    const currentTab = useSelector(state=>state.providersTool)
    switch(currentTab){
        case 'Dashboard':
            return(<ProvidersDashboard/>);
        case 'Payment':
            return (<ProviderPayment/>);
        case 'Credit':
            return (<ProviderCredit/>);
        case 'EditingCredit':
            return <ProviderEditingCredit/>
        case 'EditingPayment':
            return <ProviderEditingPayment/>
        default:
            return (<ProvidersDashboard/>);
    }
}
export default ProvidersTool