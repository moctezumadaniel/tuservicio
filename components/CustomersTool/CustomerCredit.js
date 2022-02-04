import styles from "../../styles/CustomersTool.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCustomersToolCreditFormName,
  changeCustomersToolCreditFormDate,
  changeCustomersToolCreditFormAmounth,
  changeCustomersToolCreditFormDescription,
  restartCustomersToolCreditForm,
  changeCustomersToolToDashboard,
} from "../../redux/actions/CustomersTool";
import axios from "axios";
import { updateCustomerInformationCustomers } from "../../redux/actions/CustomerInformation";
function CustomerCredit() {
  const nameInput = "Escribe el nombre del cliente";
  const amounthInput = "Escribe el monto del crédito";
  const save = "GUARDAR CRÉDITO";
  const share = "COMPARTIR / GUARDAR";
  /*COMPONENT STATE */
  const customerId = useSelector(
    (state) => state.customerInformation.customerId
  );
  const formState = useSelector((state) => state.customersToolCreditForm);
  const dispatch = useDispatch();
  const handleCustomerNameChange = (event) => {
    dispatch(changeCustomersToolCreditFormName(event.target.value));
  };
  const handleDateChange = (event) => {
    dispatch(changeCustomersToolCreditFormDate(event.target.value));
  };
  const handleAmounthChange = (event) => {
    dispatch(changeCustomersToolCreditFormAmounth(event.target.value));
  };
  const handleDescriptionChange = (event) => {
    dispatch(changeCustomersToolCreditFormDescription(event.target.value));
  };
  function saveCustomerCredit(customerId, newCredit) {
    if (!newCredit.date || !newCredit.type || !newCredit.customerName)
      return console.log("ERRORRR", newCredit);
    axios
      .post(`api/customer/addCustomerOperation`, {
        customerId,
        name: newCredit.customerName,
        date: newCredit.date,
        amounth: newCredit.amounth,
        description: newCredit.description,
        operation: newCredit.type,
      })
      .then((response) => {
        if (response.data) {
          dispatch(
            updateCustomerInformationCustomers(response.data.customers),
            dispatch(restartCustomersToolCreditForm()),
            dispatch(changeCustomersToolToDashboard())
          );
          console.log(response);
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className={styles.CreditFormContainer}>
      <input
        type="text"
        className={styles.CustomerNameInput}
        placeholder={nameInput}
        value={formState.customerName}
        onChange={handleCustomerNameChange}
      />

      <div className={styles.SecondaryInputsContainer}>
        <input
          type="date"
          className={styles.DateInput}
          value={formState.date}
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
          className={styles.SaveCreditButton}
          onClick={() => saveCustomerCredit(customerId, formState)}
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
export default CustomerCredit;
