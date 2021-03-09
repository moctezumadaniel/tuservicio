export const userMessagesTabReducer = (state = 'List', action)=>{
    switch(action.type){
        case 'CHANGE_MESSAGES_TO_LIST':
            return 'List';
        case 'CHANGE_MESSAGES_TO_CHAT':
            return 'Chat';
        default:
            return state;
    }
}