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

export const changeCustomerPublicInformationSchedule = (schedule) =>{
    return{
        type: 'CHANGE_CUSTOMER_PUBLIC_INFORMATION_SCHEDULE',
        schedule
    }
}

export const changeCustomerPublicInformationShortDesciption = (shortDescription) =>{
    return{
        type:'CHANGE_CUSTOMER_PUBLIC_INFORMATION_SHORT_DESCRIPTION',
        shortDescription
    }
}