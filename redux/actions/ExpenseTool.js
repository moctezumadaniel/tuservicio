export const changeExpenseToolToDashboard = ()=>{
    return{
        type:'CHANGE_EXPENSE_TOOL_TO_DASHBOARD'
    }
}

export const changeExpenseToolToExpense = ()=>{
    return{
        type:'CHANGE_EXPENSE_TOOL_TO_EXPENSE'
    }
}

/*EXPENSE FORM*/
export const changeExpensesToolFormDate = (date)=>{
    return{
        type:'CHANGE_EXPENSES_TOOL_FORM_DATE',
        date
    }
}

export const changeExpensesToolFormAmounth = (amounth)=>{
    return{
        type:'CHANGE_EXPENSES_TOOL_FORM_AMOUNTH',
        amounth
    }
}

export const changeExpensesToolFormDescription = (description)=>{
    return{
        type:'CHANGE_EXPENSES_TOOL_FORM_DESCRIPTION',
        description
    }
}