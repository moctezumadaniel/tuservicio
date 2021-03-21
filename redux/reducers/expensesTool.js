export const expensesToolReducer = (state='Dashboard', action)=>{
    switch(action.type){
        case 'CHANGE_EXPENSE_TOOL_TO_DASHBOARD':
            return 'Dashboard';
        case 'CHANGE_EXPENSE_TOOL_TO_EXPENSE':
            return 'Expense'
        case 'CUSTOMER_LOGOUT':
            return 'Dashboard'
        default:
            return state;
    }
} 