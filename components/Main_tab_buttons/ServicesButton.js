import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/MainTabButtons.module.css";
import { changeGlobalToServices } from "../../redux/actions/GlobalTab";
import { changeToolToNone } from "../../redux/actions/CustomerActiveTool";
import { changeOrdersToolToDashboard } from ".././../redux/actions/OrdersTool";
import { changeExpenseToolToDashboard } from "../../redux/actions/ExpenseTool";
import { changeCustomersToolToDashboard } from "../../redux/actions/CustomersTool";
import { changeProvidersToolToDashboard } from "../../redux/actions/ProvidersTool";
import { changeTicketsToolToDashboard } from "../../redux/actions/TicketsTool";
import { changeCustomerProfileFormToNone } from "../../redux/actions/CustomerProfileForms";
import { changeCustomerReservationsFormToNone } from "../../redux/actions/CustomerReservationsForms";
import { changeToSearch } from "../../redux/actions/UserServicesTab";
const ServicesButton = () => {
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
  const closeDescription = "< SALIR";
  const goBackDescription = "< ATRAS";
  const closeForm = "CERRAR";
  const dispatch = useDispatch();
  function handleServicesPress() {
    dispatch(changeGlobalToServices());
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
  function handleCloseServicePage() {
    dispatch(changeToSearch());
  }
  return (
    <>
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
    </>
  );
};

export default ServicesButton;
