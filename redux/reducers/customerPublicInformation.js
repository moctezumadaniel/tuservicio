export const customerPublicInformationReducer = (state={}, action)=>{
    switch(action.type){
        case 'LOAD_CUSTOMER_PUBLIC_INFORMATION':
            return action.data
        default:
            return state
    }
}