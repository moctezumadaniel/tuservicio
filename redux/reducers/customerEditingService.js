export const customerEditingServiceReducer = (state = {}, action)=>{
    switch(action.type){
        case 'LOAD_CUSTOMER_EDITING_SERVICE':
            return action.service;
        default:
            return state
    }
}