export const providersToolReducer = (state = 'Dashboard', action)=>{
    switch(action.type){
        case 'CHANGE_PROVIDERS_TOOL_TO_DASHBOARD':
            return 'Dashboard';
        case 'CHANGE_PROVIDERS_TOOL_TO_PAYMENT':
            return 'Payment';
        case 'CHANGE_PROVIDERS_TOOL_TO_CREDIT':
            return 'Credit';
        case 'CUSTOMER_LOGOUT':
            return 'Dashboard';
        default:
            return state;
    }
}

const initialProviderForm = 
{
    providerName:'',
    date: '',
    amounth:'',
    description:''
}

export const providersToolPaymentFormReducer = (state=initialProviderForm, action) =>{
    switch(action.type){
        case 'CHANGE_PROVIDERS_TOOL_PAYMENT_FORM_NAME':
            return{
                ...state,
                providerName:action.name
            }
        case 'CHANGE_PROVIDERS_TOOL_PAYMENT_FORM_DATE':
            return{
                ...state,
                date:action.date
            }
        case 'CHANGE_PROVIDERS_TOOL_PAYMENT_FORM_AMOUNTH':
            return{
                ...state,
                amounth:action.amounth
            }
        case 'CHANGE_PROVIDERS_TOOL_PAYMENT_FORM_DESCRIPTION':
            return{
                ...state,
                description:action.description
            }
        default:
            return state
    }
}

export const providersToolCreditFormReducer = (state=initialProviderForm, action) =>{
    switch(action.type){
        case 'CHANGE_PROVIDERS_TOOL_CREDIT_FORM_NAME':
            return{
                ...state,
                providerName:action.name
            }
        case 'CHANGE_PROVIDERS_TOOL_CREDIT_FORM_DATE':
            return{
                ...state,
                date:action.date
            }
        case 'CHANGE_PROVIDERS_TOOL_CREDIT_FORM_AMOUNTH':
            return{
                ...state,
                amounth:action.amounth
            }
        case 'CHANGE_PROVIDERS_TOOL_CREDIT_FORM_DESCRIPTION':
            return{
                ...state,
                description:action.description
            }
        default:
            return state
    }
}