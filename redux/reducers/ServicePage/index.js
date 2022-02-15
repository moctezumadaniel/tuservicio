import { combineReducers } from "redux";
import { customerInformationReducer } from "./customerInformation";
import { pageStatusReducer } from "./pageStatus";

const servicePageRootReducer = combineReducers({
  customerInformation: customerInformationReducer,
  pageStatus: pageStatusReducer,
});

export default servicePageRootReducer;
