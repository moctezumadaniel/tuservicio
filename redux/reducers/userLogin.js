export const userLoginReducer = (state = false, action)=>{
    switch (action.type){
        case "USER_LOGGED":
            return true;
        default:
            return state;
    }
}
