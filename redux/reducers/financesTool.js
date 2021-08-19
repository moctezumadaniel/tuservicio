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
function getBetweenDates(start, end){
    const startWithTime = start + 'T00:00'
    const endWithTime = end + 'T00:00'

    var between = new Array()
    var current = new Date(startWithTime.valueOf())
    var formatedEnd = new Date(endWithTime.valueOf())

    while(current <= formatedEnd){

        const formatedDate = current.toISOString().slice(0,10)
        between.push(formatedDate)
        current.setDate(current.getDate() + 1)

    }
    return between
}
export const  financesToolReducer = (state, action) =>{
    switch(action.type){
        case 'UPDATE_FINANCES_TOOL_REPORTS_START':
            if(state.end){
                return{
                    ...state,
                    start:action.start,
                    betweenDates:getBetweenDates(action.start, state.end)
                }
            }
            return{
                ...state,
                start:action.start
            }
        case 'UPDATE_FINANCES_TOOL_REPORTS_END':
            if(state.start){
                return{
                    ...state,
                    end:action.end,
                    betweenDates:getBetweenDates(state.start, action.end)
                }
            }
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