const initialFinances = {
    start:'',
    end:'',
    betweenDates:[],

    customersGrandTotal:'',
    customersKeys:[],
    customersAmounths:[],

    providersGrandTotal:'',
    providersKeys:[],
    providersAmounths:[],
    
    incomeGrandTotal:'',
    incomeKeys:[],
    incomeAmounths:[],

    expensesGrandTotal:'',
    expensesKeys:[],
    expensesAmounths:[],
}
export const  financesToolReducer = (state, action) =>{
    switch(action.type){
        case 'UPDATE_FINANCES_TOOL_REPORTS_START':
            return{
                ...state,
                start:action.start
            }
        case 'UPDATE_FINANCES_TOOL_REPORTS_END':
            return{
                ...state,
                end:action.end
            }
        case 'UPDATE_FINANCES_TOOL_REPORTS_BETWEEN_DATES':
            return{
                ...state,
                betweenDates:action.dates
            }
        case 'UPDATE_FINANCES_TOOL_CUSTOMERS_GRAND_TOTAL':
            return{
                ...state,
                customersGrandTotal:action.grandTotal
            }
        case 'UPDATE_FINANCES_TOOL_CUSTOMERS_KEYS':
            return{
                ...state,
                customersKeys:action.keys
            }
        case 'UPDATE_FINANCES_TOOL_CUSTOMERS_AMOUNTHS':
            return{
                ...state,
                customersAmounths:action.amounths
            }

        case 'UPDATE_FINANCES_TOOL_PROVIDERS_GRAND_TOTAL':
            return{
                ...state,
                providersGrandTotal:action.grandTotal
            }
        case 'UPDATE_FINANCES_TOOL_PROVIDERS_KEYS':
            return{
                ...state,
                providersKeys:action.keys
            }
        case 'UPDATE_FINANCES_TOOL_PROVIDERS_AMOUNTHS':
            return{
                ...state,
                providersAmounths:action.amounths
            }
    
        case 'UPDATE_FINANCES_TOOL_INCOME_GRAND_TOTAL':
            return{
                ...state,
                incomeGrandTotal:action.grandTotal
            }
        case 'UPDATE_FINANCES_TOOL_INCOME_KEYS':
            return{
                ...state,
                incomeKeys:action.keys
            }
        case 'UPDATE_FINANCES_TOOL_INCOME_AMOUNTHS':
            return{
                ...state,
                incomeAmounths:action.amounths
            }

        case 'UPDATE_FINANCES_TOOL_EXPENSES_GRAND_TOTAL':
            return{
                ...state,
                expensesGrandTotal:action.grandTotal
            }
        case 'UPDATE_FINANCES_TOOL_EXPENSES_KEYS':
            return{
                ...state,
                expensesKeys:action.keys
            }
        case 'UPDATE_FINANCES_TOOL_EXPENSES_AMOUNTHS':
            return{
                ...state,
                expensesAmounths:action.amounths
            }
        default:
            return initialFinances
    }
}