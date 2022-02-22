import TopBar from "./Top_description";
import MoreInformation from "./MoreInformation";
import TabButtons from "./TabButtons";
import ServicesTab from "./ServicesTab";
import ReviewsTab from "./ReviewsTab";
import BookingTab from "./BookingTab";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCustomerInformation } from "../../redux/actions/ServicePage/CustomerInformation";
function CustomerProfileTemplate(props) {
  const dispatch = useDispatch();
  const customerInformation = useSelector((state) => state.customerInformation);
  const currentTab = useSelector((state) => state.pageStatus.currentTab);
  console.log(customerInformation);
  useEffect(() => {
    if (!props.id) return;
    axios
      .get(`/api/customer/getCreateCustomerPublicInformation`, {
        params: {
          user: props.id,
        },
      })
      .then((response) => dispatch(setCustomerInformation(response.data)))
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, [props.id]);
  if (customerInformation.customerId) {
    return (
      <div style={{ overflowY: "scroll ", height: "100vh" }}>
        <TopBar />
        <MoreInformation />
        <TabButtons />
        {currentTab === "Services" && <ServicesTab />}
        {currentTab === "Reviews" && <ReviewsTab />}
        {currentTab === "Reservations" && <BookingTab />}
      </div>
    );
  } else return <div>CArgando</div>;
}

export default CustomerProfileTemplate;
