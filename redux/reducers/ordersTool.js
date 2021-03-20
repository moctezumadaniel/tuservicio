export const ordersToolReducer = (state = 'Dashboard', action)=>{
    switch(action.type){
        case 'CHANGE_ORDERS_TOOL_TO_DASHBOARD':
            return 'Dashboard';
        case 'CHANGE_ORDERS_TOOL_TO_ORDER':
            return 'Order';
        case 'CUSTOMER_LOGOUT':
            return 'Dashboard';
        default:
            return state;
    }
}