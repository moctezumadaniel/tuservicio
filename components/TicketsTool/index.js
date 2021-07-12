import TicketForm from "./TicketsForm";
import {useSelector} from 'react-redux'
import TicketsDashboard from "./TicketsDashboard";
import EditingTicket from './EditingTicket'
function TicketsTool (){
    const currentTab = useSelector(state=>state.ticketsTool)
    switch(currentTab){
        case 'Dashboard':
            return <TicketsDashboard/>;
        case 'Ticket':
            return <TicketForm/>;
        case 'EditingTicket':
            return <EditingTicket/>
        default:
            return <TicketsDashboard/>;
    }   
    
}
export default TicketsTool