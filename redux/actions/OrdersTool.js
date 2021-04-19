export const changeOrdersToolToDashboard = ()=>{
    return{
        type:'CHANGE_ORDERS_TOOL_TO_DASHBOARD'
    }
}

export const changeOrdersToolToOrder = ()=>{
    return{
        type:'CHANGE_ORDERS_TOOL_TO_ORDER'
    }
}

export const changeCustomerOrderFormDate=(date)=>{
    return{
        type:'CHANGE_CUSTOMER_ORDER_FORM_DATE',
        date
    }
}

export const changeCustomerOrderFormDescription=(description)=>{
    return{
        type:'CHANGE_CUSTOMER_ORDER_FORM_DESCRIPTION',
        description
    }
}

export const changeCustomerOrderFormNewItemDescription=(description)=>{
    return{
        type:'CHANGE_CUSTOMER_ORDER_FORM_NEW_ITEM_DESCRIPTION',
        description
    }
}

export const changeCustomerOrderFormNewItemAmounth=(amounth)=>{
    return{
        type:'CHANGE_CUSTOMER_ORDER_FORM_NEW_ITEM_AMOUNTH',
        amounth
    }
}

export const addItemToCustomerOrderForm = () =>{
    return{
        type:'ADD_ITEM_TO_CUSTOMER_ORDER_FORM',
    }
}