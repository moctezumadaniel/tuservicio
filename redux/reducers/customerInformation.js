export const customerInformationReducer = (state={}, action) =>{
    switch(action.type){
        case 'LOAD_CUSTOMER_INFORMATION':
            return action.data
        case 'UPDATE_CUSTOMER_INFORMATION_ORDERS':
            return {
                ...state,
                orders:action.orders
            }
        case 'UPDATE_CUSTOMER_INFORMATION_TICKETS':
            return{
                ...state,
                tickets:action.tickets
            }
        case 'UPDATE_CUSTOMER_INFORMATION_EXPENSES':
            return{
                ...state,
                expenses:action.expenses
            }
        default:
            return state
    }
}