import { useSelector } from "react-redux";
import ServiceTabButtons from "./ServiceTabButtons";
import ServiceInformation from "./Customer_profile/ServiceInformation";
import ServiceContactAndMoreInfo from "./Customer_profile/ServiceContactAndMoreInfo";
import styles from "../../styles/CustomerServiceDashboard.module.css";
import ServicesList from "./Customer_profile/ServicesList";
import ProfileForms from "./Customer_profile/Customer_profile_forms";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { LoadingScreen } from "../App_main_container";
const ServiceReservations = dynamic(() => import("./Service_reservations"), {
  loading: () => <LoadingScreen />,
});
const CustomerTools = dynamic(() => import("./Customer_tools"), {
  loading: () => <LoadingScreen />,
});

function CustomerServiceDashboard() {
  const currentGlobalTab = useSelector((state) => state.globalTab);
  const currentTab = useSelector((state) => state.customerDashboardTab);
  const currentTool = useSelector((state) => state.customerActiveTool);
  useEffect(() => window.scrollTo(0, 0));
  return currentGlobalTab === "Services" ? (
    <div>
      {currentTab === "Profile" && <ProfileForms />}
      {currentTool === "None" ? <ServiceTabButtons /> : ""}

      {currentTab === "Profile" ? (
        <div className={styles.ServiceInformationTabContainer}>
          <ServiceInformation />
          <ServiceContactAndMoreInfo />
          <ServicesList />
        </div>
      ) : currentTab === "Reservations" ? (
        <ServiceReservations />
      ) : (
        <CustomerTools />
      )}
    </div>
  ) : (
    ""
  );
}
export default CustomerServiceDashboard;
