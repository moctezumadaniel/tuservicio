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

export const addItemToCustomerTicketForm = (amounth)=>{
    return{
        type:'ADD_ITEM_TO_CUSTOMER_TICKET_FORM'
    }
}
