export const CustomerServiceDashboardTabReducer = (state = 'Profile', action) =>{
    switch(action.type){
        case 'CHANGE_CUSTOMER_DASHBOARD_TO_PROFILE':
            return 'Profile';
        case 'CHANGE_CUSTOMER_DASHBOARD_TO_RESERVATIONS':
            return 'Reservations';
        case 'CHANGE_CUSTOMER_DASHBOARD_TO_TOOLS':
            return 'Tools';
        default:
            return state;
    }
}