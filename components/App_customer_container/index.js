import CustomerServiceDashboard from "../Customer_service_dashboard";
import PreferencesTab from "../Preferences_tab";
import UserMessagesTab from "../User_messages_tab";

function AppCustomerContainer(){
    return(
        <div>
            <CustomerServiceDashboard/>
            <UserMessagesTab/>
            <PreferencesTab/>
        </div>
    )
}
export default AppCustomerContainer