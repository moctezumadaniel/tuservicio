export const customerEditingTicketReducer = (state={}, action) =>{
    switch(action.type){
        case 'LOAD_CUSTOMER_EDITING_TICKET':
            return action.ticket;
        default:
            return state
    }
}