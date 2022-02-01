export const providersToolReducer = (state = "Dashboard", action) => {
  switch (action.type) {
    case "CHANGE_PROVIDERS_TOOL_TO_DASHBOARD":
      return "Dashboard";
    case "CHANGE_PROVIDERS_TOOL_TO_PAYMENT":
      return "Payment";
    case "CHANGE_PROVIDERS_TOOL_TO_CREDIT":
      return "Credit";
    case "CHANGE_PROVIDERS_TOOL_TO_EDITING_CREDIT":
      return "EditingCredit";
    case "CHANGE_PROVIDERS_TOOL_TO_EDITING_PAYMENT":
      return "EditingPayment";
    case "CUSTOMER_LOGOUT":
      return "Dashboard";
    default:
      return state;
  }
};
/*PROVIDER FORMS */

const initialProviderPaymentForm = {
  name: "",
  date: new Date().toISOString().slice(0, 10),
  amounth: "",
  description: "",
  operation: "payment",
};

export const providersToolPaymentFormReducer = (
  state = initialProviderPaymentForm,
  action
) => {
  switch (action.type) {
    case "CHANGE_PROVIDERS_TOOL_PAYMENT_FORM_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "CHANGE_PROVIDERS_TOOL_PAYMENT_FORM_DATE":
      return {
        ...state,
        date: action.date,
      };
    case "CHANGE_PROVIDERS_TOOL_PAYMENT_FORM_AMOUNTH":
      return {
        ...state,
        amounth: action.amounth,
      };
    case "CHANGE_PROVIDERS_TOOL_PAYMENT_FORM_DESCRIPTION":
      return {
        ...state,
        description: action.description,
      };
    case "RESTART_PROVIDERS_TOOL_PAYMENT_FORM":
      return initialProviderPaymentForm;
    default:
      return state;
  }
};

const initialProviderCreditForm = {
  name: "",
  date: new Date().toISOString().slice(0, 10),
  amounth: "",
  description: "",
  operation: "credit",
};

export const providersToolCreditFormReducer = (
  state = initialProviderCreditForm,
  action
) => {
  switch (action.type) {
    case "CHANGE_PROVIDERS_TOOL_CREDIT_FORM_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "CHANGE_PROVIDERS_TOOL_CREDIT_FORM_DATE":
      return {
        ...state,
        date: action.date,
      };
    case "CHANGE_PROVIDERS_TOOL_CREDIT_FORM_AMOUNTH":
      return {
        ...state,
        amounth: action.amounth,
      };
    case "CHANGE_PROVIDERS_TOOL_CREDIT_FORM_DESCRIPTION":
      return {
        ...state,
        description: action.description,
      };
    case "RESTART_PROVIDERS_TOOL_CREDIT_FORM":
      return initialProviderCreditForm;
    default:
      return state;
  }
};

/*PROVIDER EDITING FORMS */

const initialProviderEditingPaymentForm = {
  name: "",
  date: new Date().toISOString().slice(0, 10),
  amounth: "",
  description: "",
  operation: "payment",
};

export const providersToolEditingPaymentFormReducer = (
  state = initialProviderEditingPaymentForm,
  action
) => {
  switch (action.type) {
    case "LOAD_PROVIDERS_TOOL_EDITING_PAYMENT_FORM":
      return action.form;
    case "CHANGE_PROVIDERS_TOOL_EDITING_PAYMENT_FORM_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "CHANGE_PROVIDERS_TOOL_EDITING_PAYMENT_FORM_DATE":
      return {
        ...state,
        date: action.date,
      };
    case "CHANGE_PROVIDERS_TOOL_EDITING_PAYMENT_FORM_AMOUNTH":
      return {
        ...state,
        amounth: action.amounth,
      };
    case "CHANGE_PROVIDERS_TOOL_EDITING_PAYMENT_FORM_DESCRIPTION":
      return {
        ...state,
        description: action.description,
      };
    case "RESTART_PROVIDERS_TOOL_EDITING_PAYMENT_FORM":
      return initialProviderEditingPaymentForm;
    default:
      return state;
  }
};

const initialProviderEditingCreditForm = {
  name: "",
  date: new Date().toISOString().slice(0, 10),
  amounth: "",
  description: "",
  operation: "credit",
};

export const providersToolEditingCreditFormReducer = (
  state = initialProviderEditingCreditForm,
  action
) => {
  switch (action.type) {
    case "LOAD_PROVIDERS_TOOL_EDITING_CREDIT_FORM":
      return action.form;
    case "CHANGE_PROVIDERS_TOOL_EDITING_CREDIT_FORM_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "CHANGE_PROVIDERS_TOOL_EDITING_CREDIT_FORM_DATE":
      return {
        ...state,
        date: action.date,
      };
    case "CHANGE_PROVIDERS_TOOL_EDITING_CREDIT_FORM_AMOUNTH":
      return {
        ...state,
        amounth: action.amounth,
      };
    case "CHANGE_PROVIDERS_TOOL_EDITING_CREDIT_FORM_DESCRIPTION":
      return {
        ...state,
        description: action.description,
      };
    case "RESTART_PROVIDERS_TOOL_EDITING_CREDIT_FORM":
      return initialProviderEditingCreditForm;
    default:
      return state;
  }
};
