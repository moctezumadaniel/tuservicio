const initialUserInformation= {
    name:'No has establecido tu nombre',
    phoneNumber:'No has establecido tu telefono',
    email:'No has establecido tu correo',
    reviews:[],
    issuesAndComments:[],
    reservations:[],
    previousServices:[],
    favoriteServices:[],
}
export const userInformationReducer = (state=initialUserInformation, action) =>{
    switch(action.type){
        case 'CHANGE_USER_INFORMATION_NAME':
            return{
                ...state,
                name:action.name
            }
        case 'CHANGE_USER_INFORMATION_PHONE_NUMBER':
            return{
                ...state,
                phoneNumber:action.phoneNumber
            }
        case 'CHANGE_USER_INFORMATION_EMAIL':
            return{
                ...state,
                email:action.email
            }
        case 'LOAD_ALL_USER_INFORMATION':
            return action.data
        default:
            return state;
        
    }
}