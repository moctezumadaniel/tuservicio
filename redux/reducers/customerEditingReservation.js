export const customerEditingReservationReducer = (state = {}, action) =>{
    switch(action.type){
        case 'LOAD_CUSTOMER_EDITING_RESERVATION':
            return action.reservation;
        default:
            return state
    }   
}