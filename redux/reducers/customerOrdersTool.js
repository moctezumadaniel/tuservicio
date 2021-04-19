const initialForm = 
{
date:'',
description:'',
newItemDescription:'',
newItemAmounth:'',
items:{}
}
export const customerOrderToolFormReducer = (state = initialForm, action)=>{
    switch(action.type){
        case 'CHANGE_CUSTOMER_ORDER_FORM_DATE':
            return {...state,date:action.date}
        case 'CHANGE_CUSTOMER_ORDER_FORM_DESCRIPTION':
            return {...state,description:action.description}
        case 'CHANGE_CUSTOMER_ORDER_FORM_NEW_ITEM_DESCRIPTION':
            return {...state,newItemDescription:action.description};
        case 'CHANGE_CUSTOMER_ORDER_FORM_NEW_ITEM_AMOUNTH':
            return {...state,newItemAmounth:action.amounth};
        case 'ADD_ITEM_TO_CUSTOMER_ORDER_FORM':{
            const newItem = {
                description:state.newItemDescription,
                amounth:state.newItemAmounth}
            return {
                ...state,
                items:{...state.items,[new Date()]:newItem},
                newItemDescription:'',
                newItemAmounth:''
            }
        }
        default:
            return state;
    }
}