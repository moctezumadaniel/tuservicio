export const userDisplayedServicesReducer = (state = [], action)=>{
    switch(action.type){
        case 'LOAD_USER_DISPLAYED_SERVICES':
            return action.services;
        case 'DELETE_USER_DISPLAYED_SERVICES':
            return []
        default:
            return state
    }
}