const initialState = {};
export const userServicePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_SERVICE_PAGE_SET_INFORMATION":
      return action.information;
    default:
      return state;
  }
};
