export const customerInformationReducer = (state={}, action) =>{
    switch(action.type){
        case 'LOAD_CUSTOMER_INFORMATION':
            return action.data
        default:
            return state
    }
}