const initialExpenseForm = {
    date:'',
    amounth:'',
    description:''
}
export const expensesToolEditingFormReducer = (state=initialExpenseForm, action) =>{
    switch(action.type){
        case 'LOAD_EXPENSES_TOOL_EDITING_FORM_DATE':
            return action.expense
        case 'CHANGE_EXPENSES_TOOL_EDITING_FORM_DATE':
            return{
                ...state,
                date:action.date
            }
        case 'CHANGE_EXPENSES_TOOL_EDITING_FORM_AMOUNTH':
            return{
                ...state,
                amounth:action.amounth
            }
        case 'CHANGE_EXPENSES_TOOL_EDITING_FORM_DESCRIPTION':
            return{
                ...state,
                description:action.description
            }
        case 'RESTART_EXPENSES_EDITING_TOOL_FORM':
            return initialExpenseForm;
        default:
            return state;
    }
}