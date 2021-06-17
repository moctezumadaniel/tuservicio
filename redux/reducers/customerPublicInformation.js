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
        default:
            return state
    }
}