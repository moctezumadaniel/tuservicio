export const userServiceSearchTabReducer =(state = 'List', action)=>{
    switch(action.type){
        case 'CHANGE_SERVICE_SEARCH_TO_LIST':
            return 'List';
        case 'CHANGE_SERVICE_SEARCH_TO_PROFILE':
            return 'Profile';
        default:
            return state;
    }
}