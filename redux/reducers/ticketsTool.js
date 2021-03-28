export const ticketsToolReducer = (state = 'Dashboard', action)=>{
    switch(action.type){
        case 'CHANGE_TICKETS_TOOL_TO_DASHBOARD':
            return 'Dashboard';
        case 'CHANGE_TICKETS_TOOL_TO_TICKET':
            return 'Ticket';
        case 'CUSTOMER_LOGOUT':
            return 'Dashboard';
        default:
            return state;
    }
}