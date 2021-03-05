export const servicesTabSelectedReducer = (state = 'Search', action)=>{
    switch (action.type){
        case 'CHANGE_TO_RESERVATIONS':
            return 'Reservations';
        case 'CHANGE_TO_PREVIOUS':
            return 'Previous';
        case 'CHANGE_TO_FAVOURITES':
            return 'Favourites';
        case 'CHANGE_TO_SEARCH':
            return 'Search';
        default:
            return state;
    }
}
