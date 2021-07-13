export const loadCustomerEditingTicket = (ticket) =>{
    return{
        type:'LOAD_CUSTOMER_EDITING_TICKET',
        ticket
    }
}

export const changeCustomerEditingTicketFormDate = (date)=>{
    return{
        type:'CHANGE_CUSTOMER_EDITING_TICKET_FORM_DATE',
        date
    }
}

export const changeCustomerEditingTicketFormNumber = (number) =>{
    return{
        type:'CHANGE_CUSTOMER_EDITING_TICKET_FORM_NUMBER',
        number
    }
}

export const changeCustomerEditingTicketFormName = (name)=>{
    return{
        type:'CHANGE_CUSTOMER_EDITING_TICKET_FORM_NAME',
        name
    }
}

export const changeCustomerEditingTicketFormNewItemDescription = (description)=>{
    return{
        type:'CHANGE_CUSTOMER_EDITING_TICKET_FORM_NEW_ITEM_DESCRIPTION',
        description
    }
}

export const changeCustomerEditingTicketFormNewItemAmounth = (amounth)=>{
    return{
        type:'CHANGE_CUSTOMER_EDITING_TICKET_FORM_NEW_ITEM_AMOUNTH',
        amounth
    }
}

export const addItemToCustomerEditingTicketForm = ()=>{
    return{
        type:'ADD_ITEM_TO_CUSTOMER_EDITING_TICKET_FORM',
        date: new Date().toString()
    }
}

export const removeItemFromEditingTicketForm = (id)=>{
    return{
        type:'REMOVE_ITEM_FROM_CUSTOMER_EDITING_TICKET_FORM',
        id
    }
}
export const changeEditingTicketItemDescription = (id, description)=>{
    return{
        type:'CHANGE_EDITING_TICKET_FORM_ITEM_DESCRIPTION',
        id,
        description
    }
}
export const changeEditingTicketItemAmounth = (id, amounth)=>{
    return{
        type:'CHANGE_EDITING_TICKET_FORM_ITEM_AMOUNTH',
        id,
        amounth
    }
}