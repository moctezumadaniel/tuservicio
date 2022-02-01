export const expensesToolReducer = (state = "Dashboard", action) => {
  switch (action.type) {
    case "CHANGE_EXPENSE_TOOL_TO_DASHBOARD":
      return "Dashboard";
    case "CHANGE_EXPENSE_TOOL_TO_EXPENSE":
      return "Expense";
    case "CHANGE_EXPENSE_TOOL_TO_EDITING_EXPENSE":
      return "EditingExpense";
    case "CUSTOMER_LOGOUT":
      return "Dashboard";
    default:
      return state;
  }
};

/*EXPENSES FORM */
const initialExpenseForm = {
  date: new Date().toISOString().slice(0, 10),
  amounth: "",
  description: "",
};
export const expensesToolFormReducer = (state = initialExpenseForm, action) => {
  switch (action.type) {
    case "CHANGE_EXPENSES_TOOL_FORM_DATE":
      return {
        ...state,
        date: action.date,
      };
    case "CHANGE_EXPENSES_TOOL_FORM_AMOUNTH":
      return {
        ...state,
        amounth: action.amounth,
      };
    case "CHANGE_EXPENSES_TOOL_FORM_DESCRIPTION":
      return {
        ...state,
        description: action.description,
      };
    case "RESTART_EXPENSES_TOOL_FORM":
      return initialExpenseForm;
    default:
      return state;
  }
};
