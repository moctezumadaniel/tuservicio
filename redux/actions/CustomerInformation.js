export const loadCustomerInformation = (data) =>{
    return{
        type: 'LOAD_CUSTOMER_INFORMATION',
        data
    }
}

export const updateCustomerInformationOrders = (orders) =>{
    return{
        type:'UPDATE_CUSTOMER_INFORMATION_ORDERS',
        orders
    }
}

export const updateCustomerInformationTickets = (tickets) =>{
    return{
        type:'UPDATE_CUSTOMER_INFORMATION_TICKETS',
        tickets
    }
}

export const updateCustomerInformationExpenses = (expenses) =>{
    return{
        type: 'UPDATE_CUSTOMER_INFORMATION_EXPENSES',
        expenses
    }
}

export const updateCustomerInformationCustomers = (customers) =>{
    return{
        type: 'UPDATE_CUSTOMER_INFORMATION_CUSTOMERS',
        customers
    }
}

export const updateCustomerInformationProviders = (providers) =>{
    return{
        type: 'UPDATE_CUSTOMER_INFORMATION_PROVIDERS',
        providers
    }
}