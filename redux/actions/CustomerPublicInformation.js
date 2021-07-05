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

export const changeCustomerPublicInformationWorkdays = (workdays) => {
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

export const changeCustomerPublicInformationPhoneNumber = (phoneNumber) =>{
    return{
        type: 'CHANGE_CUSTOMER_PUBLIC_INFORMATION_PHONE_NUMBER',
        phoneNumber
    }
}

export const changeCustomerPublicInformationAddress = (address) =>{
    return{
        type: 'CHANGE_CUSTOMER_PUBLIC_INFORMATION_ADDRESS',
        address
    }
}

export const changeCustomerPublicInformationMoreInformation = (moreInformation) =>{
    return{
        type:'CHANGE_CUSTOMER_PUBLIC_INFORMATION_MORE_INFORMATION',
        moreInformation
    }
}

export const addServiceToCustomerPublicInformation = (services) =>{
    return{
        type: 'ADD_SERVICE_TO_CUSTOMER_PUBLIC_INFORMATION',
        services
    }
}

export const updateCustomerPublicInformationListOfReservations = (reservations) =>{
    return{
        type: 'UPDATE_CUSTOMER_PUBLIC_INFORMATION_LIST_OF_RESERVATIONS',
        reservations
    }
}

export const updateCustomerPublicInformationListOfSchedules = (schedules) =>{
    return{
        type: 'UPDATE_CUSTOMER_PUBLIC_INFORMATION_LIST_OF_SCHEDULES',
        schedules
    }
}