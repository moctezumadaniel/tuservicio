export const addItemToCustomerCalculator = ()=>{
    return{
        type:'ADD_ITEM_TO_CUSTOMER_CALCULATOR'
    }
}

export const addSignToCustomerCalculatorItem = (id,sign) =>{
    return{
        type: 'ADD_SIGN_TO_CUSTOMER_CALCULATOR_ITEM',
        id,
        sign
    }
}

export const addNumberToCustomerCalculatorItem = (id,number) =>{
    return{
        type:'ADD_NUMBER_TO_CUSTOMER_CALCULATOR_ITEM',
        id,
        number
    }
}