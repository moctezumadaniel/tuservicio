export const loadCustomerPublicInformation = (data) =>{
    return{
        type:'LOAD_CUSTOMER_PUBLIC_INFORMATION',
        data
    }
}

export const changeCustomerPublicInformationName = (name) =>{
    return{
        type:'CHANGE_CUSTOMER_PUBLIC_INFORMATION_NAME',
        name
    }
}

export const changeCustomerPublicInformationWorkdays = (workdays) =>{
    return{
        type:'CHANGE_CUSTOMER_PUBLIC_INFORMATION_WORKDAYS',
        workdays
    }
}