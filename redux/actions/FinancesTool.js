/*DATES */
export const updateFinancesToolReportsStart = (start) =>{
    return{
        type:'UPDATE_FINANCES_TOOL_REPORTS_START',
        start
    }
}

export const updateFinancesToolReportsEnd = (end) =>{
    return{
        type:'UPDATE_FINANCES_TOOL_REPORTS_END',
        end
    }
}

export const updateFinancesToolReportsBetweenDates = (dates) =>{
    return{
        type:'UPDATE_FINANCES_TOOL_REPORTS_BETWEEN_DATES',
        dates
    }
}

/*INFORMATION */
export const updateFinancesToolCustomersGrandTotal = (grandTotal) =>{
    return{
        type:'UPDATE_FINANCES_TOOL_CUSTOMERS_GRAND_TOTAL',
        grandTotal
    }
}

export const updateFinancesToolCustomersKeys = (keys) =>{
    return{
        type:'UPDATE_FINANCES_TOOL_CUSTOMERS_KEYS',
        keys
    }
}

export const updateFinancesToolCustomersAmounths = (amounths) =>{
    return{
        type:'UPDATE_FINANCES_TOOL_CUSTOMERS_AMOUNTHS',
        amounths
    }
}

export const updateFinancesToolProvidersGrandTotal = (grandTotal) =>{
    return{
        type:'UPDATE_FINANCES_TOOL_PROVIDERS_GRAND_TOTAL',
        grandTotal
    }
}

export const updateFinancesToolProvidersKeys = (keys) =>{
    return{
        type:'UPDATE_FINANCES_TOOL_PROVIDERS_KEYS',
        keys
    }
}

export const updateFinancesToolProvidersAmounths = (amounths) =>{
    return{
        type:'UPDATE_FINANCES_TOOL_PROVIDERS_AMOUNTHS',
        amounths
    }
}

export const updateFinancesToolIncomeGrandTotal = (grandTotal) =>{
    return{
        type:'UPDATE_FINANCES_TOOL_INCOME_GRAND_TOTAL',
        grandTotal
    }
}

export const updateFinancesToolIncomeKeys = (keys) =>{
    return{
        type:'UPDATE_FINANCES_TOOL_INCOME_KEYS',
        keys
    }
}

export const updateFinancesToolIncomeAmounths = (amounths) =>{
    return{
        type:'UPDATE_FINANCES_TOOL_INCOME_AMOUNTHS',
        amounths
    }
}

export const updateFinancesToolExpensesGrandTotal = (grandTotal) =>{
    return{
        type:'UPDATE_FINANCES_TOOL_EXPENSES_GRAND_TOTAL',
        grandTotal
    }
}

export const updateFinancesToolExpensesKeys = (keys) =>{
    return{
        type:'UPDATE_FINANCES_TOOL_EXPENSES_KEYS',
        keys
    }
}

export const updateFinancesToolExpensesAmounths = (amounths) =>{
    return{
        type:'UPDATE_FINANCES_TOOL_EXPENSES_AMOUNTHS',
        amounths
    }
}