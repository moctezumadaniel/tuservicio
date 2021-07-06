export const customerReservationsFormsReducer = (state='None', action)=>{
    switch(action.type){
        case 'CHANGE_CUSTOMER_RESERVATIONS_FORM_TO_NONE':
            return 'None';
        case 'CHANGE_CUSTOMER_RESERVATIONS_FORM_TO_ADD_RESERVATION':
            return 'AddReservation';
        case 'CHANGE_CUSTOMER_RESERVATIONS_FORM_TO_ADD_SCHEDULE':
            return 'AddSchedule';
        case 'CHANGE_CUSTOMER_RESERVATIONS_FORM_TO_EDIT_RESERVATION':
            return 'EditReservation';
        case 'CHANGE_CUSTOMER_RESERVATIONS_FORM_TO_EDIT_SCHEDULE':
            return 'EditSchedule';
        default:
            return state;
    }
}