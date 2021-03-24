import ProvidersDashboard from "./ProvidersDashboard";
import {useSelector} from 'react-redux'
import ProviderPayment from "./ProviderPayment";
import ProviderCredit from "./ProviderCredit";
function ProvidersTool (){
    const currentTab = useSelector(state=>state.providersTool)
    switch(currentTab){
        case 'Dashboard':
            return(<ProvidersDashboard/>);
        case 'Payment':
            return (<ProviderPayment/>);
        case 'Credit':
            return (<ProviderCredit/>);
        default:
            return (<ProvidersDashboard/>);
    }
}
export default ProvidersTool