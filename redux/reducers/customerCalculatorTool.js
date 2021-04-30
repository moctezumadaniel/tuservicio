const initialCalculatorState = {
    currentItem: '',
    items:[]
}

export const customerCalculatorToolReducer = (state=initialCalculatorState, action) =>{
    switch(action.date){
        case 'ADD_ITEM_TO_CUSTOMER_CALCULATOR':
            return{
                ...state,
                items:[...state.items,{id:new Date().toString()}]
            }
        case 'ADD_SIGN_TO_CUSTOMER_CALCULATOR_ITEM':
            return[
                ...state,
                items = state.items.map(
                    item => item.id === action.id ?
                    {...item,sign:action.sign}
                    :item
                )

            ]
        case 'ADD_NUMBER_TO_CUSTOMER_CALCULATOR_ITEM':
            return[
                ...state,
                items = state.items.map(
                    item => item.id === action.id ?
                    {...item,number:item.number + action.number}
                    :item
                )
            ]
        default:
            return state;     
    }
}