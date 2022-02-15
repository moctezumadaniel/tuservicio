import { combineReducers } from "redux";
import { customerInformationReducer } from "./customerInformation";

const servicePageRootReducer = combineReducers({
  customerInformation: customerInformationReducer,
});

export default servicePageRootReducer;
