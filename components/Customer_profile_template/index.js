import TopBar from "./Top_description";
import MoreInformation from "./MoreInformation";
import TabButtons from "./TabButtons";
import ServicesTab from "./ServicesTab";
import ReviewsTab from "./ReviewsTab";
import BookingTab from "./BookingTab";
import axios from "axios";
import { useSelector } from "react-redux";
function CustomerProfileTemplate() {
  const currentTab = useSelector((state) => state.pageStatus.currentTab);
  return (
    <div>
      <TopBar />
      <MoreInformation />
      <TabButtons />
      {currentTab === "Services" && <ServicesTab />}
      {currentTab === "Reviews" && <ReviewsTab />}
      {currentTab === "Reservations" && <BookingTab />}
    </div>
  );
}

export default CustomerProfileTemplate;
