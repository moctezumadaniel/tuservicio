export const customerActiveToolReducer = (state= 'None', action)=>{
    switch(action.type){
        case 'CHANGE_TOOL_TO_NONE':
            return 'None';
        case 'CHANGE_TOOL_TO_ORDERS':
            return 'Orders';
        case 'CHANGE_TOOL_TO_CALCULATOR':
            return 'Calculator';
        case 'CHANGE_TOOL_TO_RECEIPTS':
            return 'Receipts';
        case 'CHANGE_TOOL_TO_EXPENSES':
            return 'Expenses';
        case 'CHANGE_TOOL_TO_CUSTOMERS':
            return 'Customers';
        case 'CHANGE_TOOL_TO_PROVIDERS':
            return 'Providers'
        case 'CHANGE_TOOL_TO_CHARGE':
            return 'Charge';
        case 'CUSTOMER_LOGOUT':
            return 'None';
        default:
            return state;
    }
}