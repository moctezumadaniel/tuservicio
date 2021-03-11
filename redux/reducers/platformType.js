export const platformTypeReducer = (state='User', action)=>{
    switch(action.type){
        case 'CHANGE_PLATFORM_TO_USER':
            return 'User';
        case 'CHANGE_PLATFORM_TO_CUSTOMER':
            return 'Customer';
        default:
            return state;
    }
}