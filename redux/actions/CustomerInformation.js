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