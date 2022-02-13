import TopBar from "./Top_description";
import MoreInformation from "./MoreInformation";
import TabButtons from "./TabButtons";
import ServicesTab from "./ServicesTab";
import ReviewsTab from "./ReviewsTab";
import BookingTab from "./BookingTab";
import CloseButton from "./CloseButton";
import axios from "axios";
import { useSelector } from "react-redux";
function CustomerProfileTemplate() {
  const servicePage = useSelector((state) => state.userServicePage);
  console.log(servicePage);
  return (
    <div>
      <TopBar />
      <MoreInformation />
      <TabButtons />
      {/*<ServicesTab/>*/}
      {/*<ReviewsTab/>*/}
      <BookingTab />
      <CloseButton />
    </div>
  );
}

export default CustomerProfileTemplate;
