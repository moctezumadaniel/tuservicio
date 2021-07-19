export const customersToolReducer =(state='Dashboard', action)=>{
    switch(action.type){
        case 'CHANGE_CUSTOMERS_TOOL_TO_DASHBOARD':
            return 'Dashboard';
        case 'CHANGE_CUSTOMERS_TOOL_TO_PAYMENT':
            return 'Payment';
        case 'CHANGE_CUSTOMERS_TOOL_TO_CREDIT':
            return 'Credit';
        case 'CUSTOMER_LOGOUT':
            return 'Dashboard';
        default:
            return state;
    }
}
/*FORMS */
const initialCustomerPaymentForm = 
{
    customerName:'',
    date: '',
    amounth:'',
    description:'',
    type:'payment'
}

export const customersToolPaymentFormReducer = (state=initialCustomerPaymentForm, action) =>{
    switch(action.type){
        case 'CHANGE_CUSTOMERS_TOOL_PAYMENT_FORM_NAME':
            return{
                ...state,
                customerName:action.name
            }
        case 'CHANGE_CUSTOMERS_TOOL_PAYMENT_FORM_DATE':
            return{
                ...state,
                date:action.date
            }
        case 'CHANGE_CUSTOMERS_TOOL_PAYMENT_FORM_AMOUNTH':
            return{
                ...state,
                amounth:action.amounth
            }
        case 'CHANGE_CUSTOMERS_TOOL_PAYMENT_FORM_DESCRIPTION':
            return{
                ...state,
                description:action.description
            }
        case 'RESTART_CUSTOMERS_TOOL_PAYMENT_FORM':
            return initialCustomerPaymentForm
        default:
            return state
    }
}

const initialCustomerCreditForm = 
{
    customerName:'',
    date: '',
    amounth:'',
    description:'',
    type:'credit'
}
export const customersToolCreditFormReducer = (state=initialCustomerCreditForm, action) =>{
    switch(action.type){
        case 'CHANGE_CUSTOMERS_TOOL_CREDIT_FORM_NAME':
            return{
                ...state,
                customerName:action.name
            }
        case 'CHANGE_CUSTOMERS_TOOL_CREDIT_FORM_DATE':
            return{
                ...state,
                date:action.date
            }
        case 'CHANGE_CUSTOMERS_TOOL_CREDIT_FORM_AMOUNTH':
            return{
                ...state,
                amounth:action.amounth
            }
        case 'CHANGE_CUSTOMERS_TOOL_CREDIT_FORM_DESCRIPTION':
            return{
                ...state,
                description:action.description
            }
        case 'RESTART_CUSTOMERS_TOOL_CREDIT_FORM':
            return initialCustomerCreditForm
        default:
            return state
    }
}