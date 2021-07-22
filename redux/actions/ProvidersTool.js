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

export const changeProvidersToolToEditingCredit = () =>{
    return{
        type:'CHANGE_PROVIDERS_TOOL_TO_EDITING_CREDIT'
    }
}

export const changeProvidersToolToEditingPayment = () =>{
    return{
        type:'CHANGE_PROVIDERS_TOOL_TO_EDITING_PAYMENT'
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

export const restartProvidersToolPaymentForm = () =>{
    return {
        type: 'RESTART_PROVIDERS_TOOL_PAYMENT_FORM'
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

export const restartProvidersToolCreditForm = () =>{
    return {
        type: 'RESTART_PROVIDERS_TOOL_CREDIT_FORM'
    }
}

/*PROVIDER EDITING PAYMENT FORM */
export const loadProvidersToolEditingPaymentForm = (form) =>{
    return{
        type:'LOAD_PROVIDERS_TOOL_EDITING_PAYMENT_FORM',
        form
    }
}

export const changeProvidersToolEditingPaymentFormName = (name) =>{
    return{
        type:'CHANGE_PROVIDERS_TOOL_EDITING_PAYMENT_FORM_NAME',
        name
    }
}

export const changeProvidersToolEditingPaymentFormDate = (date) =>{
    return{
        type:'CHANGE_PROVIDERS_TOOL_EDITING_PAYMENT_FORM_DATE',
        date
    }
}

export const changeProvidersToolEditingPaymentFormAmounth = (amounth) =>{
    return{
        type:'CHANGE_PROVIDERS_TOOL_EDITING_PAYMENT_FORM_AMOUNTH',
        amounth
    }
}

export const changeProvidersToolEditingPaymentFormDescription = (description) =>{
    return{
        type:'CHANGE_PROVIDERS_TOOL_EDITING_PAYMENT_FORM_DESCRIPTION',
        description
    }
}

export const restartProvidersToolEditingPaymentForm = () =>{
    return {
        type: 'RESTART_PROVIDERS_TOOL_EDITING_PAYMENT_FORM'
    }
}
/*PROVIDER EDITING CREDIT FORM */
export const loadProvidersToolEditingCreditForm = (form) =>{
    return{
        type:'LOAD_PROVIDERS_TOOL_EDITING_CREDIT_FORM',
        form
    }
}
export const changeProvidersToolEditingCreditFormName = (name) =>{
    return{
        type:'CHANGE_PROVIDERS_TOOL_EDITING_CREDIT_FORM_NAME',
        name
    }
}

export const changeProvidersToolEditingCreditFormDate = (date) =>{
    return{
        type:'CHANGE_PROVIDERS_TOOL_EDITING_CREDIT_FORM_DATE',
        date
    }
}

export const changeProvidersToolEditingCreditFormAmounth = (amounth) =>{
    return{
        type:'CHANGE_PROVIDERS_TOOL_EDITING_CREDIT_FORM_AMOUNTH',
        amounth
    }
}

export const changeProvidersToolEditingCreditFormDescription = (description) =>{
    return{
        type:'CHANGE_PROVIDERS_TOOL_EDITING_CREDIT_FORM_DESCRIPTION',
        description
    }
}

export const restartProvidersToolEditingCreditForm = () =>{
    return {
        type: 'RESTART_PROVIDERS_TOOL_EDITING_CREDIT_FORM'
    }
}