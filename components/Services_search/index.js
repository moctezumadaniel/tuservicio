import ServicesSearch from "./ServicesSearch";
import CustomerProfileTemplate from "../Customer_profile_template";
import { useSelector } from "react-redux";
function UserServiceSearch() {
  const currentTab = useSelector((state) => state.userServiceSearchTab);
  return currentTab === "Profile" ? (
    <CustomerProfileTemplate />
  ) : (
    <ServicesSearch />
  );
}
export default UserServiceSearch;
