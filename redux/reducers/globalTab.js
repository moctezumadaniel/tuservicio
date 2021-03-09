export const globalTabReducer = (state = 'Services', action)=>{
    switch (action.type){
        case 'CHANGE_GLOBAL_TO_PREFERENCES':
            return 'Preferences';
        case 'CHANGE_GLOBAL_TO_MESSAGES':
            return 'Messages';
        case 'CHANGE_GLOBAL_TO_SERVICES':
            return 'Services';
        default:
            return state;
    }
    
}

export default globalTabReducer