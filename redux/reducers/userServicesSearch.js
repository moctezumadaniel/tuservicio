export const userServiceSearchReducer = (state = '', action) =>{
    switch(action.type){
        case 'CHANGE_USER_SERVICES_SEARCH_TO_SEARCHING':
            return 'Searching';
        case 'CHANGE_USER_SERVICES_SEARCH_TO_DONE':
            return 'Done'
        default:
            return state
    }
}