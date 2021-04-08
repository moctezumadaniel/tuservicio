export const customerReservationsFormsReducer = (state='None', action)=>{
    switch(action.type){
        case 'CHANGE_CUSTOMER_RESERVATIONS_FORM_TO_NONE':
            return 'None';
        case 'CHANGE_CUSTOMER_RESERVATIONS_FORM_TO_ADD_RESERVATION':
            return 'AddReservation';
        case 'CHANGE_CUSTOMER_RESERVATIONS_FORM_TO_ADD_SCHEDULE':
            return 'AddSchedule';
        default:
            return state;
    }
}