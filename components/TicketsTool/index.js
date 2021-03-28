import TicketForm from "./TicketsForm";
import {useSelector} from 'react-redux'
import TicketsDashboard from "./TicketsDashboard";
function TicketsTool (){
    const currentTab = useSelector(state=>state.ticketsTool)
    switch(currentTab){
        case 'Dashboard':
            return <TicketsDashboard/>;
        case 'Ticket':
            return <TicketForm/>
    }   
    
}
export default TicketsTool