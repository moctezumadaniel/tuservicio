const initialCalculatorState = ''

export const customerCalculatorToolReducer = (state=initialCalculatorState, action) =>{
    switch(action.type){
        case 'WRITE_NUMBER_OR_SIGN_IN_CALCULATOR_TOOL_OPERATION':
            return (state + action.numberOrSign).toString()
        case 'DELETE_LAST_CHARACTER_IN_CALCULATOR_TOOL_OPERATION':
            return (state.substring(0,state.length - 1)).toString()
        case 'DELETE_ALL_CALCULATOR_TOOL_OPERATION':
            return ''
        default:
            return state;  
    }
}