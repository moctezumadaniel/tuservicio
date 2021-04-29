export const changeProvidersToolToDashboard=()=>{
    return{
        type: 'CHANGE_PROVIDERS_TOOL_TO_DASHBOARD'
    }
}

export const changeProvidersToolToPayment=()=>{
    return{
        type: 'CHANGE_PROVIDERS_TOOL_TO_PAYMENT'
    }
}

export const changeProvidersToolToCredit=()=>{
    return{
        type: 'CHANGE_PROVIDERS_TOOL_TO_CREDIT'
    }
}
/*PAYMENT FORM */
export const changeProvidersToolPaymentFormName = (name) =>{
    return{
        type:'CHANGE_PROVIDERS_TOOL_PAYMENT_FORM_NAME',
        name
    }
}

export const changeProvidersToolPaymentFormDate = (date) =>{
    return{
        type:'CHANGE_PROVIDERS_TOOL_PAYMENT_FORM_DATE',
        date
    }
}

export const changeProvidersToolPaymentFormAmounth = (amounth) =>{
    return{
        type:'CHANGE_PROVIDERS_TOOL_PAYMENT_FORM_AMOUNTH',
        amounth
    }
}

export const changeProvidersToolPaymentFormDescription = (description) =>{
    return{
        type:'CHANGE_PROVIDERS_TOOL_PAYMENT_FORM_DESCRIPTION',
        description
    }
}
/*CREDIT FORM */
export const changeProvidersToolCreditFormName = (name) =>{
    return{
        type:'CHANGE_PROVIDERS_TOOL_CREDIT_FORM_NAME',
        name
    }
}

export const changeProvidersToolCreditFormDate = (date) =>{
    return{
        type:'CHANGE_PROVIDERS_TOOL_CREDIT_FORM_DATE',
        date
    }
}

export const changeProvidersToolCreditFormAmounth = (amounth) =>{
    return{
        type:'CHANGE_PROVIDERS_TOOL_CREDIT_FORM_AMOUNTH',
        amounth
    }
}

export const changeProvidersToolCreditFormDescription = (description) =>{
    return{
        type:'CHANGE_PROVIDERS_TOOL_CREDIT_FORM_DESCRIPTION',
        description
    }
}