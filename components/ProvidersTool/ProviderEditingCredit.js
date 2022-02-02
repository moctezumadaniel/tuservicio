import styles from "../../styles/ProvidersTool.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeProvidersToolToDashboard,
  changeProvidersToolEditingCreditFormName,
  changeProvidersToolEditingCreditFormDate,
  changeProvidersToolEditingCreditFormAmounth,
  changeProvidersToolEditingCreditFormDescription,
  restartProvidersToolEditingCreditForm,
} from "../../redux/actions/ProvidersTool";
import axios from "axios";
import { updateCustomerInformationProviders } from "../../redux/actions/CustomerInformation";

function ProviderEditingCredit() {
  const nameInput = "Escribe el nombre del proveedor";
  const amounthInput = "Escribe el monto del crédito";
  const save = "GUARDAR CRÉDITO";
  const share = "COMPARTIR / GUARDAR";
  /*FORM STATE */
  const customerId = useSelector(
    (state) => state.customerInformation.customerId
  );
  const formState = useSelector(
    (state) => state.providersToolEditingCreditForm
  );
  const dispatch = useDispatch();
  const handleProviderNameChange = (event) => {
    dispatch(changeProvidersToolEditingCreditFormName(event.target.value));
  };
  const handleDateChange = (event) => {
    dispatch(changeProvidersToolEditingCreditFormDate(event.target.value));
  };
  const handleAmounthChange = (event) => {
    dispatch(changeProvidersToolEditingCreditFormAmounth(event.target.value));
  };
  const handleDescriptionChange = (event) => {
    dispatch(
      changeProvidersToolEditingCreditFormDescription(event.target.value)
    );
  };
  function editCredit(customerId, editingCredit) {
    if (!editingCredit.date || !editingCredit.id || !editingCredit.operation)
      return;
    axios
      .post(`api/customer/updateCustomerProviderOperation`, {
        customerId,
        name: editingCredit.name,
        date: editingCredit.date,
        amounth: editingCredit.amounth,
        description: editingCredit.description,
        operation: editingCredit.operation,
        id: editingCredit._id,
      })
      .then((response) => {
        if (response.data) {
          dispatch(
            updateCustomerInformationProviders(response.data.providers),
            dispatch(
              restartProvidersToolEditingCreditForm(),
              dispatch(changeProvidersToolToDashboard())
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
        onChange={handleProviderNameChange}
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
          onClick={() => editCredit(customerId, formState)}
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
export default ProviderEditingCredit;
