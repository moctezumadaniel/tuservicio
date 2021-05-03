const initialCalculatorState = ''

export const customerCalculatorToolReducer = (state = initialCalculatorState, action) => {
    switch (action.type) {
        case 'WRITE_NUMBER_OR_SIGN_IN_CALCULATOR_TOOL_OPERATION': 
            if(
                (state + action.numberOrSign).toString().length > 1 && 
                isNaN((state + action.numberOrSign)[(state + action.numberOrSign).length - 1]) && 
                isNaN((state + action.numberOrSign)[(state + action.numberOrSign).length - 2]) &&
                (state + action.numberOrSign)[(state + action.numberOrSign).length - 1] ===
                (state + action.numberOrSign)[(state + action.numberOrSign).length - 2])
                {
                return state
                }
            else if(
                (state + action.numberOrSign).toString().length > 1 && 
                action.numberOrSign === '.'&& 
                isNaN((state + action.numberOrSign)[(state + action.numberOrSign).length - 2]) &&
                (state + action.numberOrSign)[(state + action.numberOrSign).length - 1] !==
                (state + action.numberOrSign)[(state + action.numberOrSign).length - 2])
                {
                return state
                }
            else if(
                (state + action.numberOrSign).toString().length > 1 && 
                isNaN((state + action.numberOrSign)[(state + action.numberOrSign).length - 1]) && 
                isNaN((state + action.numberOrSign)[(state + action.numberOrSign).length - 2]) &&
                (state + action.numberOrSign)[(state + action.numberOrSign).length - 1] !==
                (state + action.numberOrSign)[(state + action.numberOrSign).length - 2])
                {
                return (state.substring(0, state.length - 1) + action.numberOrSign).toString()
                }
            else{
                return (state + action.numberOrSign).toString()
            }
        case 'DELETE_LAST_CHARACTER_IN_CALCULATOR_TOOL_OPERATION':
            return (state.substring(0, state.length - 1)).toString()
        case 'DELETE_ALL_CALCULATOR_TOOL_OPERATION':
            return ''
        default:
            return state;
    }
}