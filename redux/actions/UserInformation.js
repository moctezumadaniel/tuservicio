export const changeUserInformationName = (name) =>{
    return{
        type:'CHANGE_USER_INFORMATION_NAME',
        name
    }
}

export const changeUserInformationPhoneNumber = (phoneNumber) =>{
    return{
        type:'CHANGE_USER_INFORMATION_PHONE_NUMBER',
        phoneNumber
    }
}

export const changeUserInformationEmail = (email) =>{
    return{
        type:'CHANGE_USER_INFORMATION_EMAIL',
        email
    }
}

export const loadAllUserInformation = (data) =>{
    return{
        type:'LOAD_ALL_USER_INFORMATION',
        data
    }
}