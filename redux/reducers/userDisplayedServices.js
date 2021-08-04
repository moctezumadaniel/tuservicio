export const userDisplayedServicesReducer = (state = [], action)=>{
    switch(action.type){
        case 'LOAD_USER_DISPLAYED_SERVICES':
            return action.services
        default:
            return state
    }
}