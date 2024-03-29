import styles from "../../styles/TicketsTool.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTicketsToolToEditingTicket,
  changeTicketsToolToTicket,
} from "../../redux/actions/TicketsTool";
import axios from "axios";
import { updateCustomerInformationTickets } from "../../redux/actions/CustomerInformation";
import { loadCustomerEditingTicket } from "../../redux/actions/CustomerEditingTicket";
function TicketsList() {
  const customerInformation = useSelector((state) => state.customerInformation);
  const allTickets = customerInformation.tickets.sort((a, b) => {
    if (a.date > b.date) {
      return 1;
    }
    if (a.date < b.date) {
      return -1;
    }
    return 0;
  });
  const openEditTicketDescription = "VER O EDITAR";
  const deleteTicketDescription = "ELIMINAR";
  const ticketsTitle = "Notas de venta";
  const dispatch = useDispatch();
  function calculateGrandTotal(items) {
    return items
      .reduce(
        (acumulator, currentValue) =>
          acumulator + parseFloat(currentValue.amounth || 0),
        0
      )
      .toFixed(2);
  }
  function generateDescription(items) {
    return items.reduce(
      (acumulator, item) => acumulator + " " + item.description,
      ""
    );
  }
  function editTicket(ticket) {
    dispatch(
      changeTicketsToolToEditingTicket(),
      dispatch(loadCustomerEditingTicket(ticket))
    );
  }
  function deleteItem(customerId, id) {
    axios
      .delete(`api/customer/deleteCustomerTicket`, {
        params: {
          customerId,
          id,
        },
      })
      .then((response) => {
        if (response.data) {
          dispatch(updateCustomerInformationTickets(response.data.tickets));
        }
      })
      .catch((error) => console.log(error));
  }
  if (allTickets.length > 0) {
    return (
      <>
        <div className={styles.TicketsListTitle}>{ticketsTitle}</div>
        <div className={styles.TicketsListContainer}>
          {allTickets.map((ticket) => (
            <div className={styles.TicketPreviewContainer}>
              <div className={styles.TicketPreviewNumberAmounthContainer}>
                <div className={styles.TicketNumberPreview}>
                  {`${ticket.number}-${
                    ticket.date ? ticket.date.slice(0, 10) : ""
                  }`}
                </div>
                <div
                  className={styles.TicketAmounthPreview}
                >{`$${calculateGrandTotal(ticket.items)}`}</div>
              </div>
              <div className={styles.TicketNamePreview}>{ticket.name}</div>
              <div className={styles.TicketPreviewDescription}>
                {generateDescription(ticket.items)}
              </div>
              <div className={styles.OpenEditTicketContainer}>
                <button
                  className={styles.OpenEditTicket}
                  onClick={() => editTicket(ticket)}
                >
                  {openEditTicketDescription}
                </button>
                <button
                  className={styles.DeleteTicket}
                  onClick={() =>
                    deleteItem(customerInformation.customerId, ticket._id)
                  }
                >
                  {deleteTicketDescription}
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  } else return "";
}
function TicketsDashboard() {
  const dispatch = useDispatch();

  const addTicketButton = "+ Agregar nota de venta";
  function handleNewTicketPress() {
    dispatch(changeTicketsToolToTicket());
  }
  return (
    <div className={styles.TicketsDashboardMainContainer}>
      {/*BUTTON TO ADD TICKET */}
      <div className={styles.AddTicketButtonContainer}>
        <button
          className={styles.AddTicketButton}
          onClick={handleNewTicketPress}
        >
          {addTicketButton}
        </button>
      </div>

      <TicketsList />
    </div>
  );
}
export default TicketsDashboard;
