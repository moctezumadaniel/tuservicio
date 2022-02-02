import styles from "../../styles/CustomersTool.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCustomersToolCreditFormName,
  changeCustomersToolCreditFormDate,
  changeCustomersToolCreditFormAmounth,
  changeCustomersToolCreditFormDescription,
  restartCustomersToolCreditForm,
  changeCustomersToolEditingCreditFormName,
  changeCustomersToolEditingCreditFormDate,
  changeCustomersToolEditingCreditFormAmounth,
  changeCustomersToolEditingCreditFormDescription,
  restartCustomersToolEditingCreditForm,
  changeCustomersToolToDashboard,
} from "../../redux/actions/CustomersTool";
import axios from "axios";
import { updateCustomerInformationCustomers } from "../../redux/actions/CustomerInformation";
function CustomerEditingCredit() {
  const nameInput = "Escribe el nombre del cliente";
  const amounthInput = "Escribe el monto del crédito";
  const save = "GUARDAR CRÉDITO";
  const share = "COMPARTIR / GUARDAR";
  /*COMPONENT STATE */
  const customerId = useSelector(
    (state) => state.customerInformation.customerId
  );
  const formState = useSelector(
    (state) => state.customersToolEditingCreditForm
  );
  const dispatch = useDispatch();
  const handleCustomerNameChange = (event) => {
    dispatch(changeCustomersToolEditingCreditFormName(event.target.value));
  };
  const handleDateChange = (event) => {
    dispatch(changeCustomersToolEditingCreditFormDate(event.target.value));
  };
  const handleAmounthChange = (event) => {
    dispatch(changeCustomersToolEditingCreditFormAmounth(event.target.value));
  };
  const handleDescriptionChange = (event) => {
    dispatch(
      changeCustomersToolEditingCreditFormDescription(event.target.value)
    );
  };
  function saveCustomerCredit(customerId, editingCredit) {
    if (!editingCredit.date || !newCredit.name) return;
    axios
      .post(`api/customer/updateCustomerClientOperation`, {
        customerId,
        name: editingCredit.name,
        date: editingCredit.date,
        amounth: editingCredit.amounth,
        description: editingCredit.description,
        id: editingCredit._id,
      })
      .then((response) => {
        if (response.data) {
          dispatch(
            updateCustomerInformationCustomers(response.data.customers),
            dispatch(restartCustomersToolEditingCreditForm()),
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
export default CustomerEditingCredit;
