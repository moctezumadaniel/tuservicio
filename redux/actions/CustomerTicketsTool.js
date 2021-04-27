export const changeCustomerTicketFormDate = (date)=>{
    return{
        type:'CHANGE_CUSTOMER_TICKET_FORM_DATE',
        date
    }
}

export const changeCustomerTicketFormName = (name)=>{
    return{
        type:'CHANGE_CUSTOMER_TICKET_FORM_NAME',
        name
    }
}

export const changeCustomerTicketFormNewItemDescription = (description)=>{
    return{
        type:'CHANGE_CUSTOMER_TICKET_FORM_NEW_ITEM_DESCRIPTION',
        description
    }
}

export const changeCustomerTicketFormNewItemAmounth = (amounth)=>{
    return{
        type:'CHANGE_CUSTOMER_TICKET_FORM_NEW_ITEM_AMOUNTH',
        amounth
    }
}

export const addItemToCustomerTicketForm = ()=>{
    return{
        type:'ADD_ITEM_TO_CUSTOMER_TICKET_FORM',
        date: new Date().toString()
    }
}

export const removeItemFromTicketForm = (id)=>{
    return{
        type:'REMOVE_ITEM_FROM_CUSTOMER_TICKET_FORM',
        id
    }
}
export const changeTicketItemDescription = (id, description)=>{
    return{
        type:'CHANGE_TICKET_FORM_ITEM_DESCRIPTION',
        id,
        description
    }
}
export const changeTicketItemAmounth = (id, amounth)=>{
    return{
        type:'CHANGE_TICKET_FORM_ITEM_AMOUNTH',
        id,
        amounth
    }
}