import { useSelector } from "react-redux";
import NewReview from "./NewReview";

const Modals = {
  NewReview: <NewReview />,
};

const CustomerProfilModals = () => {
  const modalStatus = useSelector((state) => state.pageStatus.modal);
  console.log(modalStatus);
  if (modalStatus !== "") {
    return Modals[modalStatus];
  } else {
    return "";
  }
};

export default CustomerProfilModals;
