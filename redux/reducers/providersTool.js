export const providersToolReducer = (state = 'Dashboard', action)=>{
    switch(action.type){
        case 'CHANGE_PROVIDERS_TOOL_TO_DASHBOARD':
            return 'Dashboard';
        case 'CHANGE_PROVIDERS_TOOL_TO_PAYMENT':
            return 'Payment';
        case 'CHANGE_PROVIDERS_TOOL_TO_CREDIT':
            return 'Credit';
        case 'CUSTOMER_LOGOUT':
            return 'Dashboard';
        default:
            return state;
    }
}