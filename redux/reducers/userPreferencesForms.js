export const userPreferencesFormsReducer = (state = 'None', action)=>{
    switch(action.type){
        case 'CHANGE_USER_PREFERENCES_FORM_TO_NONE':
            return 'None'
        case 'CHANGE_USER_PREFERENCES_FORM_TO_NAME':
            return 'Name'
        case 'CHANGE_USER_PREFERENCES_FORM_TO_PHONE_NUMBER':
            return 'PhoneNumber'
        case 'CHANGE_USER_PREFERENCES_FORM_TO_EMAIL_FORM':
            return 'Email'
        case 'CHANGE_USER_PREFERENCES_FORM_TO_PASSWORD':
            return 'Password'
        default:
            return state
    }
}