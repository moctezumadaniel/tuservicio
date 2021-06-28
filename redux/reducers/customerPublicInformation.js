export const customerPublicInformationReducer = (state="", action)=>{
    switch(action.type){
        case 'LOAD_CUSTOMER_PUBLIC_INFORMATION':
            return action.data
        case 'CHANGE_CUSTOMER_PUBLIC_INFORMATION_NAME':
            return {
                ...state,
                name:action.name
            }
        case 'CHANGE_CUSTOMER_PUBLIC_INFORMATION_WORKDAYS':
            return{
                ...state,
                workdays:action.workdays
            }
        case 'CHANGE_CUSTOMER_PUBLIC_INFORMATION_SCHEDULE':
            return{
                ...state,
                schedule:action.schedule
            }
        case 'CHANGE_CUSTOMER_PUBLIC_INFORMATION_SHORT_DESCRIPTION':
            return{
                ...state,
                shortDescription:action.shortDescription
            }
        case 'CHANGE_CUSTOMER_PUBLIC_INFORMATION_PHONE_NUMBER':
            return{
                ...state,
                phoneNumber:action.phoneNumber
            }
        case 'CHANGE_CUSTOMER_PUBLIC_INFORMATION_ADDRESS':
            return{
                ...state,
                address:action.address
            }
        case 'CHANGE_CUSTOMER_PUBLIC_INFORMATION_MORE_INFORMATION':
            return{
                ...state,
                moreInformation:action.moreInformation
            }
        case 'CHANGE_CUSTOMER_PUBLIC_INFORMATION_WORKDAYS':
            return{
                ...state,
                workdays:
                    Object.defineProperty(...state.workdays, action.day, {value:action.checked})    
                
            }
        default:
            return state
    }
}