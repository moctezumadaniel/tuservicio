const initialForm = 
{
date:'',
name:'',
newItemDescription:'',
newItemAmounth:'',
items:[]
}
export const customerTicketsToolFormReducer = (state = initialForm, action)=>{
    switch(action.type){
        case 'CHANGE_CUSTOMER_TICKET_FORM_DATE':
            return {...state,date:action.date}
        case 'CHANGE_CUSTOMER_TICKET_FORM_NAME':
            return {...state,name:action.name}
        case 'CHANGE_CUSTOMER_TICKET_FORM_NEW_ITEM_DESCRIPTION':
            return {...state,newItemDescription:action.description};
        case 'CHANGE_CUSTOMER_TICKET_FORM_NEW_ITEM_AMOUNTH':
            return {...state,newItemAmounth:action.amounth};
        case 'ADD_ITEM_TO_CUSTOMER_TICKET_FORM':{
            const newItem = {
                id:action.date,
                description:state.newItemDescription,
                amounth:state.newItemAmounth}
            return {
                ...state,
                items:[...state.items,newItem],
                newItemDescription:'',
                newItemAmounth:''
            }
        }
        case 'CHANGE_TICKET_FORM_ITEM_DESCRIPTION':
            return{
                ...state,
                items: state.items.map(
                    item => item.id === action.id ? 
                    {...item, description:action.description} 
                    : item
                )
            }
        case 'REMOVE_ITEM_FROM_CUSTOMER_TICKET_FORM':
            return{
                ...state,
                items:[
                    ...state.items
                    .filter(item=>item.id!==action.id)
                ]
            }
        default:
            return state;
    }
}