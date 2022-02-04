import styles from "../../styles/CustomersTool.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCustomersToolEditingPaymentFormName,
  changeCustomersToolEditingPaymentFormDate,
  changeCustomersToolEditingPaymentFormAmounth,
  changeCustomersToolEditingPaymentFormDescription,
  restartCustomersToolEditingPaymentForm,
  changeCustomersToolToDashboard,
} from "../../redux/actions/CustomersTool";
import axios from "axios";
import { updateCustomerInformationCustomers } from "../../redux/actions/CustomerInformation";
function CustomerEditingPayment() {
  const nameInput = "Escribe el nombre del cliente";
  const amounthInput = "Escribe el monto del cobro";
  const save = "GUARDAR COBRO";
  const share = "COMPARTIR / GUARDAR";
  /*COMPONENT STATE */
  const customerId = useSelector(
    (state) => state.customerInformation.customerId
  );
  const formState = useSelector(
    (state) => state.customersToolEditingPaymentForm
  );
  const dispatch = useDispatch();
  const handleCustomerNameChange = (event) => {
    dispatch(changeCustomersToolEditingPaymentFormName(event.target.value));
  };
  const handleDateChange = (event) => {
    dispatch(changeCustomersToolEditingPaymentFormDate(event.target.value));
  };
  const handleAmounthChange = (event) => {
    dispatch(changeCustomersToolEditingPaymentFormAmounth(event.target.value));
  };
  const handleDescriptionChange = (event) => {
    dispatch(
      changeCustomersToolEditingPaymentFormDescription(event.target.value)
    );
  };
  function saveCustomerPayment(customerId, editingPayment) {
    if (!editingPayment.date || !editingPayment.name || !editingPayment._id)
      return console.log("ERROR", editingPayment);
    axios
      .patch(`api/customer/updateCustomerClientOperation`, {
        customerId,
        name: editingPayment.name,
        date: editingPayment.date,
        amounth: editingPayment.amounth,
        description: editingPayment.description,
        id: editingPayment._id,
      })
      .then((response) => {
        if (response.data) {
          dispatch(
            updateCustomerInformationCustomers(response.data.customers),
            dispatch(
              restartCustomersToolEditingPaymentForm(),
              dispatch(changeCustomersToolToDashboard())
            )
          );
          console.log(response);
        }
      })
      .catch((error) => console.log(error));
  }
  console.log(formState);
  return (
    <div className={styles.CreditFormContainer}>
      <input
        type="text"
        className={styles.CustomerNameInput}
        placeholder={nameInput}
        value={formState.name}
        onChange={handleCustomerNameChange}
      />

      <div className={styles.SecondaryInputsContainer}>
        <input
          type="date"
          className={styles.DateInput}
          value={formState.date ? formState.date.slice(0, 10) : ""}
          onChange={handleDateChange}
        />
        <input
          type="number"
          className={styles.AmounthInput}
          placeholder={amounthInput}
          value={formState.amounth}
          onChange={handleAmounthChange}
        />
      </div>

      <div className={styles.SecondaryButtonsContainer}>
        <button
          className={styles.SavePaymentButton}
          onClick={() => saveCustomerPayment(customerId, formState)}
        >
          {save}
        </button>
        <button className={styles.ShareButton}>{share}</button>
      </div>

      <textarea
        className={styles.TextAreaForm}
        value={formState.description}
        onChange={handleDescriptionChange}
      />
    </div>
  );
}
export default CustomerEditingPayment;
