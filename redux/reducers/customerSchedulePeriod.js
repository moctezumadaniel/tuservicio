export const customerSchedulePeriodReducer = (state='Dias laborales', action) =>{
    switch(action.type){
        case 'CHANGE_CUSTOMER_SCHEDULE_PERIOD_SELECTED':
            return action.period
        default:
            return state
    }
}