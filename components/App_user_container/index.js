import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { loadAllUserInformation } from "../../redux/actions/UserInformation";
import axios from "axios";
import MainTabButtons from "../Main_tab_buttons";
import { LoadingScreen } from "../App_main_container";
import styles from "../../styles/LoadingScreens.module.css";

const UserMessagesTab = dynamic(() => import("../User_messages_tab"), {
  loading: () => <LoadingScreen />,
});
const UserServicesTab = dynamic(() => import("../User_services_tab"), {
  loading: () => <LoadingScreen />,
});
const PreferencesTab = dynamic(() => import("../Preferences_tab"), {
  loading: () => <LoadingScreen />,
});

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
    <div className={styles.AppMainContainer}>
      <div className={styles.AppContainer}>
        <UserServicesTab />
        <PreferencesTab />
        <UserMessagesTab />
      </div>
      <MainTabButtons />
    </div>
  );
}
export default AppUserContainer;
