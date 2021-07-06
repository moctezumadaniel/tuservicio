export const customerEditingScheduleReducer = (state = {}, action) =>{
    switch(action.type){
        case 'LOAD_CUSTOMER_EDITING_SCHEDULE':
            return action.schedule;
        default:
            return state
    }   
}