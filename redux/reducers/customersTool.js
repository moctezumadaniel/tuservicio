export const customersToolReducer = (state = "Dashboard", action) => {
  switch (action.type) {
    case "CHANGE_CUSTOMERS_TOOL_TO_DASHBOARD":
      return "Dashboard";
    case "CHANGE_CUSTOMERS_TOOL_TO_PAYMENT":
      return "Payment";
    case "CHANGE_CUSTOMERS_TOOL_TO_CREDIT":
      return "Credit";
    case "CHANGE_CUSTOMERS_TOOL_TO_EDITING_CREDIT":
      return "EditingCredit";
    case "CHANGE_CUSTOMERS_TOOL_TO_EDITING_PAYMENT":
      return "EditingPayment";
    case "CUSTOMER_LOGOUT":
      return "Dashboard";
    default:
      return state;
  }
};
/*FORMS */
const initialCustomerPaymentForm = {
  customerName: "",
  date: new Date().toISOString().slice(0, 10),
  amounth: "",
  description: "",
  type: "payment",
};

export const customersToolPaymentFormReducer = (
  state = initialCustomerPaymentForm,
  action
) => {
  switch (action.type) {
    case "CHANGE_CUSTOMERS_TOOL_PAYMENT_FORM_NAME":
      return {
        ...state,
        customerName: action.name,
      };
    case "CHANGE_CUSTOMERS_TOOL_PAYMENT_FORM_DATE":
      return {
        ...state,
        date: action.date,
      };
    case "CHANGE_CUSTOMERS_TOOL_PAYMENT_FORM_AMOUNTH":
      return {
        ...state,
        amounth: action.amounth,
      };
    case "CHANGE_CUSTOMERS_TOOL_PAYMENT_FORM_DESCRIPTION":
      return {
        ...state,
        description: action.description,
      };
    case "RESTART_CUSTOMERS_TOOL_PAYMENT_FORM":
      return initialCustomerPaymentForm;
    default:
      return state;
  }
};

const initialCustomerCreditForm = {
  customerName: "",
  date: new Date().toISOString().slice(0, 10),
  amounth: "",
  description: "",
  type: "credit",
};
export const customersToolCreditFormReducer = (
  state = initialCustomerCreditForm,
  action
) => {
  switch (action.type) {
    case "CHANGE_CUSTOMERS_TOOL_CREDIT_FORM_NAME":
      return {
        ...state,
        customerName: action.name,
      };
    case "CHANGE_CUSTOMERS_TOOL_CREDIT_FORM_DATE":
      return {
        ...state,
        date: action.date,
      };
    case "CHANGE_CUSTOMERS_TOOL_CREDIT_FORM_AMOUNTH":
      return {
        ...state,
        amounth: action.amounth,
      };
    case "CHANGE_CUSTOMERS_TOOL_CREDIT_FORM_DESCRIPTION":
      return {
        ...state,
        description: action.description,
      };
    case "RESTART_CUSTOMERS_TOOL_CREDIT_FORM":
      return initialCustomerCreditForm;
    default:
      return state;
  }
};

/*EDITING FORM */
const initialCustomerEditingPaymentForm = {
  name: "",
  date: new Date().toISOString().slice(0, 10),
  amounth: "",
  description: "",
  type: "payment",
};

export const customersToolEditingPaymentFormReducer = (
  state = initialCustomerEditingPaymentForm,
  action
) => {
  switch (action.type) {
    case "LOAD_CUSTOMERS_TOOL_EDITING_PAYMENT_FORM":
      return action.form;
    case "CHANGE_CUSTOMERS_TOOL_EDITING_PAYMENT_FORM_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "CHANGE_CUSTOMERS_TOOL_EDITING_PAYMENT_FORM_DATE":
      return {
        ...state,
        date: action.date,
      };
    case "CHANGE_CUSTOMERS_TOOL_EDITING_PAYMENT_FORM_AMOUNTH":
      return {
        ...state,
        amounth: action.amounth,
      };
    case "CHANGE_CUSTOMERS_TOOL_EDITING_PAYMENT_FORM_DESCRIPTION":
      return {
        ...state,
        description: action.description,
      };
    case "RESTART_CUSTOMERS_TOOL_EDITING_PAYMENT_FORM":
      return initialCustomerEditingPaymentForm;
    default:
      return state;
  }
};

const initialCustomerEditingCreditForm = {
  name: "",
  date: new Date().toISOString().slice(0, 10),
  amounth: "",
  description: "",
  type: "credit",
};
export const customersToolEditingCreditFormReducer = (
  state = initialCustomerEditingCreditForm,
  action
) => {
  switch (action.type) {
    case "LOAD_CUSTOMERS_TOOL_EDITING_CREDIT_FORM":
      return action.form;
    case "CHANGE_CUSTOMERS_TOOL_EDITING_CREDIT_FORM_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "CHANGE_CUSTOMERS_TOOL_EDITING_CREDIT_FORM_DATE":
      return {
        ...state,
        date: action.date,
      };
    case "CHANGE_CUSTOMERS_TOOL_EDITING_CREDIT_FORM_AMOUNTH":
      return {
        ...state,
        amounth: action.amounth,
      };
    case "CHANGE_CUSTOMERS_TOOL_EDITING_CREDIT_FORM_DESCRIPTION":
      return {
        ...state,
        description: action.description,
      };
    case "RESTART_CUSTOMERS_TOOL_EDITING_CREDIT_FORM":
      return initialCustomerEditingCreditForm;
    default:
      return state;
  }
};
