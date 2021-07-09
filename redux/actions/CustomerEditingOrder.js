export const loadCustomerEditingOrder = (order) =>{
    return{
        type: 'LOAD_CUSTOMER_EDITING_ORDER',
        order
    }
}
export const changeCustomerEditingOrderFormDate=(date)=>{
    return{
        type:'CHANGE_CUSTOMER_EDITING_ORDER_FORM_DATE',
        date
    }
}

export const changeCustomerEditingOrderFormDescription=(description)=>{
    return{
        type:'CHANGE_CUSTOMER_EDITING_ORDER_FORM_DESCRIPTION',
        description
    }
}

export const changeCustomerEditingOrderFormNewItemDescription=(description)=>{
    return{
        type:'CHANGE_CUSTOMER_EDITING_ORDER_FORM_NEW_ITEM_DESCRIPTION',
        description
    }
}

export const changeCustomerEditingOrderFormNewItemAmounth=(amounth)=>{
    return{
        type:'CHANGE_CUSTOMER_EDITING_ORDER_FORM_NEW_ITEM_AMOUNTH',
        amounth
    }
}

export const addItemToCustomerEditingOrderForm = () =>{
    return{
        type:'ADD_ITEM_TO_CUSTOMER_EDITING_ORDER_FORM',
        date: new Date().toString()
    }
}

export const removeItemFromEditingOrderForm = (id)=>{
    return{
        type:'REMOVE_ITEM_FROM_CUSTOMER_EDITING_ORDER_FORM',
        id
    }
}
export const changeCustomerEditingOrderFormItemAmounth = (id,amounth)=>{
    return{
        type:'CHANGE_CUSTOMER_EDITING_ORDER_FORM_ITEM_AMOUNTH',
        id,
        amounth
    }
}
export const changeCustomerEditingOrderFormItemDescription = (id,description)=>{
    return{
        type:'CHANGE_CUSTOMER_EDITING_ORDER_FORM_ITEM_DESCRIPTION',
        id,
        description
    }
}

export const restartCustomerEditingOrderForm = () =>{
    return{
        type: 'RESTART_CUSTOMER_EDITING_ORDER_FORM'
    }
}
export const changeCustomerEditingOrderFormNumber = (number) =>{
    return{
        type:'CHANGE_CUSTOMER_EDITING_ORDER_FORM_NUMBER',
        number
    }
}