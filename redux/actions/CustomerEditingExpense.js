export const loadExpensesToolEditingFormDate = (expense) =>{
    return{
        type: 'LOAD_EXPENSES_TOOL_EDITING_FORM_DATE',
        expense
    }
}

export const changeExpensesToolEditingFormDate = (date)=>{
    return{
        type:'CHANGE_EXPENSES_TOOL_EDITING_FORM_DATE',
        date
    }
}

export const changeExpensesToolEditingFormAmounth = (amounth)=>{
    return{
        type:'CHANGE_EXPENSES_TOOL_EDITING_FORM_AMOUNTH',
        amounth
    }
}

export const changeExpensesToolEditingFormDescription = (description)=>{
    return{
        type:'CHANGE_EXPENSES_TOOL_EDITING_FORM_DESCRIPTION',
        description
    }
}

export const restartExpensesEditingToolForm = () =>{
    return{
        type:'RESTART_EXPENSES_EDITING_TOOL_FORM'
    }
}