import styles from "../../styles/TicketsTool.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCustomerTicketFormDate,
  changeCustomerTicketFormName,
  changeCustomerTicketFormNewItemDescription,
  changeCustomerTicketFormNewItemAmounth,
  addItemToCustomerTicketForm,
  removeItemFromTicketForm,
  changeTicketItemDescription,
  changeTicketItemAmounth,
  changeCustomerTicketFormNumber,
} from "../../redux/actions/CustomerTicketsTool";
import axios from "axios";
import { updateCustomerInformationTickets } from "../../redux/actions/CustomerInformation";
import { changeTicketsToolToDashboard } from "../../redux/actions/TicketsTool";
function ListOfConcepts() {
  const deleteItemButton = "Eliminar";
  const ticketItems = useSelector(
    (state) => state.customerTicketsToolForm.items
  );
  const dispatch = useDispatch();
  function handleDeleteItemPress(id) {
    dispatch(removeItemFromTicketForm(id));
  }
  const handleChangeTicketItemDescription = (id) => (event) => {
    dispatch(changeTicketItemDescription(id, event.target.value));
  };
  const handleChangeTicketItemAmounth = (id) => (event) => {
    dispatch(changeTicketItemAmounth(id, event.target.value));
  };
  return (
    <>
      {ticketItems.map((item) => {
        return (
          <div key={item.id}>
            <div className={styles.TicketItemContainer}>
              <textarea
                className={styles.TicketDescription}
                value={item.description}
                onChange={handleChangeTicketItemDescription(item.id)}
              />
              <div className={styles.ItemAmounthDescription}>
                <input
                  type="number"
                  className={styles.TicketAmounth}
                  value={item.amounth}
                  onChange={handleChangeTicketItemAmounth(item.id)}
                />
                <button
                  className={styles.DeleteItemButton}
                  onClick={() => handleDeleteItemPress(item.id)}
                >
                  {deleteItemButton}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

function TicketForm() {
  const ticketTitle = "Nota";
  const saveTicketButton = "GUARDAR";
  const newItemTitle = "Nuevo concepto";
  const newDescriptionPlaceholder = "Escribe la descripción del nuevo concepto";
  const newAmounthPlaceholder = "Escribe el monto del concepto";
  const addConceptButton = "AGREGAR";
  const namePlaceholder = "Escribe el nombre del cliente";
  const grandTotalTitle = "Total";

  const customerInformation = useSelector((state) => state.customerInformation);
  const currentTickets = customerInformation.tickets;
  const currentTicket = useSelector((state) => state.customerTicketsToolForm);
  const ticketDate = useSelector((state) => state.customerTicketsToolForm.date);
  const ticketNumber = currentTicket.number;
  const ticketName = useSelector((state) => state.customerTicketsToolForm.name);
  const newItemDescription = useSelector(
    (state) => state.customerTicketsToolForm.newItemDescription
  );
  const newItemAmounth = useSelector(
    (state) => state.customerTicketsToolForm.newItemAmounth
  );

  const dispatch = useDispatch();
  const handleTicketDateChange = (event) => {
    dispatch(
      changeCustomerTicketFormDate(event.target.value),
      dispatch(
        changeCustomerTicketFormNumber(
          calculateTicketNumber(event.target.value, currentTickets)
        )
      )
    );
  };
  const handleCustomerNameChange = (event) => {
    dispatch(changeCustomerTicketFormName(event.target.value));
  };
  const handleNewDescriptionChange = (event) => {
    dispatch(changeCustomerTicketFormNewItemDescription(event.target.value));
  };
  const handleNewAmounthChange = (event) => {
    dispatch(changeCustomerTicketFormNewItemAmounth(event.target.value));
  };
  function handleAddItemPress() {
    dispatch(addItemToCustomerTicketForm());
  }

  /*DATA AND LOGIC TO CALCULATE THE TICKET GRAND TOTAL*/
  const ticketItems = useSelector(
    (state) => state.customerTicketsToolForm.items
  );
  const ticketGrandTotal = ticketItems
    .reduce(
      (acumulator, currentValue) =>
        acumulator + parseFloat(currentValue.amounth || 0),
      0
    )
    .toFixed(2);

  function calculateTicketNumber(date, tickets) {
    console.log(tickets);
    console.log(date.toString());
    const numbersFromTicketsWithSelectedDate = tickets.map((ticket) => {
      if (!ticket.date) return 0;
      if (ticket.date.slice(0, 10) == date && ticket.number) {
        return parseInt(ticket.number);
      } else return 0;
    });
    console.log(numbersFromTicketsWithSelectedDate);
    const lastTicketNumber =
      numbersFromTicketsWithSelectedDate.length > 0
        ? Math.max(...numbersFromTicketsWithSelectedDate)
        : 0;
    console.log(lastTicketNumber);
    const ticketNumber = lastTicketNumber + 1;
    return ticketNumber;
  }
  function addTicket(customerId, newTicket) {
    if (!newTicket.date || !newTicket.number) return;
    axios
      .post(`api/customer/addCustomerTicket`, {
        customerId,
        number: newTicket.number,
        date: newTicket.date,
        name: newTicket.name,
        items: newTicket.items,
      })
      .then((response) => {
        if (response.data) {
          dispatch(
            updateCustomerInformationTickets(response.data.tickets),
            dispatch(changeTicketsToolToDashboard())
          );
          console.log(response.data);
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className={styles.TicketsToolMainContainer}>
      <div className={styles.TicketTitle}>
        {`${ticketTitle} ${ticketNumber}-${ticketDate}`}
      </div>
      <div className={styles.TicketSaveButtonContainer}>
        <button
          className={styles.SaveTicketButton}
          onClick={() =>
            addTicket(customerInformation.customerId, currentTicket)
          }
        >
          {saveTicketButton}
        </button>
      </div>
      {/*DATE AND NAME OF THE CUSTOMER */}
      <div className={styles.TicketDateCustomerContainer}>
        <input
          type="date"
          className={styles.TicketDateInput}
          onChange={handleTicketDateChange}
          value={ticketDate}
        />

        <input
          type="text"
          className={styles.TicketNameInput}
          placeholder={namePlaceholder}
          onChange={handleCustomerNameChange}
          value={ticketName}
        />
      </div>

      <ListOfConcepts />

      {/*NEW ITEM FORM */}
      <div className={styles.InputTicketItemContainer}>
        <div className={styles.NewItemTitle}>{newItemTitle}</div>
        <textarea
          className={styles.InputTicketDescription}
          placeholder={newDescriptionPlaceholder}
          onChange={handleNewDescriptionChange}
          value={newItemDescription}
        />

        <input
          type="number"
          className={styles.InputTicketAmounth}
          placeholder={newAmounthPlaceholder}
          onChange={handleNewAmounthChange}
          value={newItemAmounth}
        />

        {newItemDescription !== "" && newItemAmounth !== "" ? (
          <button className={styles.AddItemButton} onClick={handleAddItemPress}>
            {addConceptButton}
          </button>
        ) : (
          ""
        )}
      </div>

      {/*TICKET GRAND TOTAL*/}
      <div className={styles.GrandTotalContainer}>
        <div className={styles.GrandTotalTitle}>{grandTotalTitle}</div>
        <div className={styles.GrandTotal}>{"$" + ticketGrandTotal}</div>
      </div>
    </div>
  );
}
export default TicketForm;
