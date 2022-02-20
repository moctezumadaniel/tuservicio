import { useSelector } from "react-redux";
import NewReviewModal from "./NewReviewModal";

const Modals = {
  NewReview: <NewReviewModal />,
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
