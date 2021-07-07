export const customerInformationReducer = (state={}, action) =>{
    switch(action.type){
        case 'LOAD_CUSTOMER_INFORMATION':
            return action.data
        case 'UPDATE_CUSTOMER_INFORMATION_ORDERS':
            return {
                ...state,
                orders:action.orders
            }
        default:
            return state
    }
}