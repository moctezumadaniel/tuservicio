export const writeNumberOrSignInCalculatorToolOperation = (numberOrSign) =>{
    return{
        type:'WRITE_NUMBER_OR_SIGN_IN_CALCULATOR_TOOL_OPERATION',
        numberOrSign
    }
}

export const deleteLastCharacterInCalculatorToolOperation = () =>{
    return{
        type:'DELETE_LAST_CHARACTER_IN_CALCULATOR_TOOL_OPERATION'
    }
}

export const deleteAllCalculatorToolOperation = ()=>{
    return{
        type:'DELETE_ALL_CALCULATOR_TOOL_OPERATION'
    }
}