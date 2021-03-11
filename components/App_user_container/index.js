import PreferencesTab from "../Preferences_tab";
import UserMessagesTab from "../User_messages_tab";
import UserServicesTab from "../User_services_tab";

function AppUserContainer (){
    return(
        <div>
            <UserServicesTab/>
            <PreferencesTab/>
            <UserMessagesTab/>
        </div>
    )
}
export default AppUserContainer



