export const customersToolReducer =(state='Dashboard', action)=>{
    switch(action.type){
        case 'CHANGE_CUSTOMERS_TOOL_TO_DASHBOARD':
            return 'Dashboard';
        case 'CHANGE_CUSTOMERS_TOOL_TO_PAYMENT':
            return 'Payment';
        case 'CHANGE_CUSTOMERS_TOOL_TO_CREDIT':
            return 'Credit';
        case 'CUSTOMER_LOGOUT':
            return 'Dashboard';
        default:
            return state;
    }
}