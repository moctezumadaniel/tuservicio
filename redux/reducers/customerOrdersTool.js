const initialForm = 
{
'date':'',
'description':'',
'items':{},
'newItem':{
    'description':'',
    'amounth':''
    }
}
export const customerOrderToolFormReducer = (state = initialForm, action)=>{
    switch(action.type){
        case 'CHANGE_CUSTOMER_ORDER_FORM_DATE':
            state.date = action.date;
            return state;
        case 'CHANGE_CUSTOMER_ORDER_FORM_DESCRIPTION':
            state.description = action.description;
            return state;
        case 'CHANGE_CUSTOMER_ORDER_FORM_NEW_ITEM_DESCRIPTION':
            state.newItem.description = action.description;
            return state;
        case 'CHANGE_CUSTOMER_ORDER_FORM_NEW_ITEM_AMOUNTH':
            state.newItem.amounth = action.amounth;
            return state;
        case 'ADD_ITEM_TO_CUSTOMER_ORDER_FORM':
            state.items.push(state.newItem);
            state.newItem = {};
        default:
            return state;
    }
}