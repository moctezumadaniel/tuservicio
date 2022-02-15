export const customerInformationReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CUSTOMER_INFORMATION":
      return action.information;
    default:
      return state;
  }
};
