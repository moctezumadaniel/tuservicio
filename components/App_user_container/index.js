import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { loadAllUserInformation } from "../../redux/actions/UserInformation";
import axios from "axios";
import MainTabButtons from "../Main_tab_buttons";

const UserMessagesTab = dynamic(() => import("../User_messages_tab"));
const UserServicesTab = dynamic(() => import("../User_services_tab"));
const PreferencesTab = dynamic(() => import("../Preferences_tab"));

function AppUserContainer() {
  const userInformation = useSelector((state) => state.userInformation);

  const dispatch = useDispatch();
  const { isAuthenticated, isLoading, user } = useAuth0();
  function setUserInformationState(data) {
    dispatch(loadAllUserInformation(data));
  }
  useEffect(() => {
    if (isAuthenticated && !isLoading && user) {
      axios
        .get(`api/user/getCreateUserInformation`, {
          params: {
            user: user.sub,
          },
        })
        .then((response) => setUserInformationState(response.data))
        .catch((error) => console.log(error));
    }
  }, []);
  console.log(userInformation);
  return (
    <div>
      <MainTabButtons />
      <UserServicesTab />
      <PreferencesTab />
      <UserMessagesTab />
    </div>
  );
}
export default AppUserContainer;
