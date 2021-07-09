export const ordersToolReducer = (state = 'Dashboard', action)=>{
    switch(action.type){
        case 'CHANGE_ORDERS_TOOL_TO_DASHBOARD':
            return 'Dashboard';
        case 'CHANGE_ORDERS_TOOL_TO_ORDER':
            return 'Order';
        case 'CHANGE_ORDERS_TOOL_TO_EDITING_ORDER':
            return 'EditingOrder';
        case 'CUSTOMER_LOGOUT':
            return 'Dashboard';
        default:
            return state;
    }
}