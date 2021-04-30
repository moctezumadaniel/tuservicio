const initialCalculatorState = []

export const customerCalculatorToolReducer = (state=initialCalculatorState, action) =>{
    switch(action.date){
        case 'ADD_ITEM_TO_CUSTOMER_CALCULATOR':
            return[
                ...state,
                {id:new Date().toString()}
            ]
        case 'ADD_SIGN_TO_CUSTOMER_CALCULATOR':
            return[
                state.map(
                    item => item.id === action.id ?
                    {...item,sign:action.sign}
                    :item
                )

            ]
        case 'ADD_NUMBER_TO_CUSTOMER_CALCULATOR':
            return[
                state.map(
                    item => item.id === action.id ?
                    {...item,number:item.number + action.number}
                    :item
                )
            ]
        default:
            return state;      
    }
}