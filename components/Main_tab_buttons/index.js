import styles from "../../styles/MainTabButtons.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  changeGlobalToServices,
  changeGlobalToPreferences,
  changeGlobalToMessages,
} from "../../redux/actions/GlobalTab";
import { changeMessagesTabToList } from "../../redux/actions/UserMessagesTab";
import { changeToolToNone } from "../../redux/actions/CustomerActiveTool";
import { changeOrdersToolToDashboard } from ".././../redux/actions/OrdersTool";
import { changeExpenseToolToDashboard } from "../../redux/actions/ExpenseTool";
import { changeCustomersToolToDashboard } from "../../redux/actions/CustomersTool";
import { changeProvidersToolToDashboard } from "../../redux/actions/ProvidersTool";
import { changeTicketsToolToDashboard } from "../../redux/actions/TicketsTool";
import { changeCustomerProfileFormToNone } from "../../redux/actions/CustomerProfileForms";
import { changeCustomerReservationsFormToNone } from "../../redux/actions/CustomerReservationsForms";
import { changeUserPreferencesFormToNone } from "../../redux/actions/UserPreferencesForms";
import { changeToSearch } from "../../redux/actions/UserServicesTab";
function MainTabButtons() {
  const currentTab = useSelector((state) => state.globalTab);
  const currentCustomerTool = useSelector((state) => state.customerActiveTool);
  const currentOrdersToolTab = useSelector((state) => state.ordersTool);
  const currentExpensesToolTab = useSelector((state) => state.expensesTool);
  const currentCustomersTab = useSelector((state) => state.customersTool);
  const currentProvidersTab = useSelector((state) => state.providersTool);
  const currentTicketsTab = useSelector((state) => state.ticketsTool);
  const currentUserServicesTab = useSelector((state) => state.userServicesTab);
  const currentServiceDashboardTab = useSelector(
    (state) => state.customerDashboardTab
  );
  const currentProfileForm = useSelector((state) => state.customerProfileForms);
  const currentReservationForm = useSelector(
    (state) => state.customerReservationsForms
  );
  const messagesStatus = useSelector((state) => state.userMessagesTab);
  const currentPreferenceForm = useSelector(
    (state) => state.userPreferencesForms
  );
  const closeDescription = "< SALIR";
  const goBackDescription = "< ATRAS";
  const closeForm = "CERRAR";
  const dispatch = useDispatch();

  function handleServicesPress() {
    dispatch(changeGlobalToServices());
  }
  function handlePreferencesPress() {
    dispatch(changeGlobalToPreferences());
  }
  function handleMessagesPress() {
    dispatch(changeGlobalToMessages());
  }
  function handleCloseChatPress() {
    dispatch(changeMessagesTabToList());
  }
  function handleCloseToolPress() {
    dispatch(changeToolToNone());
  }
  function handleGoBackToOrders() {
    dispatch(changeOrdersToolToDashboard());
  }
  function handleGoBackToExpenses() {
    dispatch(changeExpenseToolToDashboard());
  }
  function handleGoBackToCustomers() {
    dispatch(changeCustomersToolToDashboard());
  }
  function handleGoBackToProviders() {
    dispatch(changeProvidersToolToDashboard());
  }
  function handleGoBackToTickets() {
    dispatch(changeTicketsToolToDashboard());
  }
  function handleCloseProfileForm() {
    dispatch(changeCustomerProfileFormToNone());
  }
  function handleCloseReservationsForm() {
    dispatch(changeCustomerReservationsFormToNone());
  }
  function handleClosePreferenceForm() {
    dispatch(changeUserPreferencesFormToNone());
  }
  function handleCloseServicePage() {
    dispatch(changeToSearch());
  }
  return (
    <div className={styles.MainTabButtonsContainer}>
      {currentTab === "Services" &&
      currentServiceDashboardTab === "Profile" &&
      currentProfileForm !== "None" ? (
        <button
          className={styles.MainCloseChat}
          onClick={handleCloseProfileForm}
        >
          {closeForm}
        </button>
      ) : currentTab === "Services" &&
        currentServiceDashboardTab === "Reservations" &&
        currentReservationForm !== "None" ? (
        <button
          className={styles.MainCloseChat}
          onClick={handleCloseReservationsForm}
        >
          {closeForm}
        </button>
      ) : currentTab === "Services" &&
        currentServiceDashboardTab === "Tools" &&
        currentOrdersToolTab !== "Dashboard" &&
        currentCustomerTool !== "None" ? (
        <button className={styles.MainCloseChat} onClick={handleGoBackToOrders}>
          {goBackDescription}
        </button>
      ) : currentTab === "Services" &&
        currentServiceDashboardTab === "Tools" &&
        currentProvidersTab !== "Dashboard" &&
        currentCustomerTool !== "None" ? (
        <button
          className={styles.MainCloseChat}
          onClick={handleGoBackToProviders}
        >
          {goBackDescription}
        </button>
      ) : currentTab === "Services" &&
        currentServiceDashboardTab === "Tools" &&
        currentExpensesToolTab !== "Dashboard" &&
        currentCustomerTool !== "None" ? (
        <button
          className={styles.MainCloseChat}
          onClick={handleGoBackToExpenses}
        >
          {goBackDescription}
        </button>
      ) : currentTab === "Services" &&
        currentServiceDashboardTab === "Tools" &&
        currentCustomersTab !== "Dashboard" &&
        currentCustomerTool !== "None" ? (
        <button
          className={styles.MainCloseChat}
          onClick={handleGoBackToCustomers}
        >
          {goBackDescription}
        </button>
      ) : currentTab === "Services" &&
        currentServiceDashboardTab === "Tools" &&
        currentTicketsTab !== "Dashboard" &&
        currentCustomerTool !== "None" ? (
        <button
          className={styles.MainCloseChat}
          onClick={handleGoBackToTickets}
        >
          {goBackDescription}
        </button>
      ) : currentTab === "Services" &&
        currentServiceDashboardTab === "Tools" &&
        currentCustomerTool !== "None" ? (
        <button className={styles.MainCloseChat} onClick={handleCloseToolPress}>
          {closeDescription}
        </button>
      ) : currentTab === "Services" &&
        currentUserServicesTab === "ServicePage" ? (
        <button
          className={styles.MainCloseChat}
          onClick={handleCloseServicePage}
        >
          {closeDescription}
        </button>
      ) : (
        <button
          className={
            currentTab === "Services"
              ? styles.MainTabButtonActive
              : styles.MainTabButton
          }
          onClick={handleServicesPress}
        >
          Servicios
        </button>
      )}

      {messagesStatus === "Chat" && currentTab === "Messages" ? (
        <button className={styles.MainCloseChat} onClick={handleCloseChatPress}>
          {closeDescription}
        </button>
      ) : (
        <button
          className={
            currentTab === "Messages"
              ? styles.MainTabButtonActive
              : styles.MainTabButton
          }
          onClick={handleMessagesPress}
        >
          Mensajes
        </button>
      )}

      {currentPreferenceForm !== "None" && currentTab === "Preferences" ? (
        <button
          className={styles.MainCloseChat}
          onClick={handleClosePreferenceForm}
        >
          {closeDescription}
        </button>
      ) : (
        <button
          className={
            currentTab === "Preferences"
              ? styles.MainTabButtonActive
              : styles.MainTabButton
          }
          onClick={handlePreferencesPress}
        >
          Preferencias
        </button>
      )}
    </div>
  );
}

export default MainTabButtons;
