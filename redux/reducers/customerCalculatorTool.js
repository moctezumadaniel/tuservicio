const initialCalculatorState = ''

export const customerCalculatorToolReducer = (state=initialCalculatorState, action) =>{
    switch(action.type){
        case 'WRITE_NUMBER_OR_SIGN_IN_CALCULATOR_TOOL_OPERATION':
            return (state + action.numberOrSign).toString()
        default:
            return state;     
    }
}