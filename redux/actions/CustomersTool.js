export const changeCustomersToolToDashboard = () => {
    return{
        type:'CHANGE_CUSTOMERS_TOOL_TO_DASHBOARD'
    }
}

export const changeCustomersToolToPayment = () => {
    return{
        type:'CHANGE_CUSTOMERS_TOOL_TO_PAYMENT'
    }
}

export const changeCustomersToolToCredit = () => {
    return{
        type:'CHANGE_CUSTOMERS_TOOL_TO_CREDIT'
    }
}
/*PAYMENT FORM */
export const changeCustomersToolPaymentFormName = (name) =>{
    return{
        type:'CHANGE_CUSTOMERS_TOOL_PAYMENT_FORM_NAME',
        name
    }
}

export const changeCustomersToolPaymentFormDate = (date) =>{
    return{
        type:'CHANGE_CUSTOMERS_TOOL_PAYMENT_FORM_DATE',
        date
    }
}

export const changeCustomersToolPaymentFormAmounth = (amounth) =>{
    return{
        type:'CHANGE_CUSTOMERS_TOOL_PAYMENT_FORM_AMOUNTH',
        amounth
    }
}

export const changeCustomersToolPaymentFormDescription = (description) =>{
    return{
        type:'CHANGE_CUSTOMERS_TOOL_PAYMENT_FORM_DESCRIPTION',
        description
    }
}

export const restartCustomersToolPaymentForm = () =>{
    return{
        type:'RESTART_CUSTOMERS_TOOL_PAYMENT_FORM'
    }
}

/*CREDIT FORM */
export const changeCustomersToolCreditFormName = (name) =>{
    return{
        type:'CHANGE_CUSTOMERS_TOOL_CREDIT_FORM_NAME',
        name
    }
}

export const changeCustomersToolCreditFormDate = (date) =>{
    return{
        type:'CHANGE_CUSTOMERS_TOOL_CREDIT_FORM_DATE',
        date
    }
}

export const changeCustomersToolCreditFormAmounth = (amounth) =>{
    return{
        type:'CHANGE_CUSTOMERS_TOOL_CREDIT_FORM_AMOUNTH',
        amounth
    }
}

export const changeCustomersToolCreditFormDescription = (description) =>{
    return{
        type:'CHANGE_CUSTOMERS_TOOL_CREDIT_FORM_DESCRIPTION',
        description
    }
}

export const restartCustomersToolCreditForm = () =>{
    return{
        type:'RESTART_CUSTOMERS_TOOL_CREDIT_FORM'
    }
}