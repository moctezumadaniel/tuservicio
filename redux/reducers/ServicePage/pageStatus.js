const initialState = {
  currentTab: "Reservations",
  moreInformation: "None",
  modal: "",
};
export const pageStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TAB_TO_SERVICES":
      return {
        ...state,
        currentTab: "Services",
      };
    case "TAB_TO_REVIEWS":
      return {
        ...state,
        currentTab: "Reviews",
      };
    case "TAB_TO_RESERVATIONS":
      return {
        ...state,
        currentTab: "Reservations",
      };
    case "OPEN_MORE_INFORMATION":
      return {
        ...state,
        moreInformation: "MoreInformation",
      };
    case "OPEN_ADDRESS":
      return {
        ...state,
        moreInformation: "Address",
      };
    case "OPEN_NEW_REVIEW_MODAL":
      return {
        ...state,
        modal: "NewReview",
      };
    default:
      return state;
  }
};
