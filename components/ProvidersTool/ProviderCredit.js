import styles from "../../styles/ProvidersTool.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeProvidersToolCreditFormName,
  changeProvidersToolCreditFormDate,
  changeProvidersToolCreditFormAmounth,
  changeProvidersToolCreditFormDescription,
  changeProvidersToolToDashboard,
  restartProvidersToolCreditForm,
} from "../../redux/actions/ProvidersTool";
import axios from "axios";
import { updateCustomerInformationProviders } from "../../redux/actions/CustomerInformation";

function ProviderCredit() {
  const nameInput = "Escribe el nombre del proveedor";
  const amounthInput = "Escribe el monto del crédito";
  const save = "GUARDAR CRÉDITO";
  const share = "COMPARTIR / GUARDAR";
  /*FORM STATE */
  const customerId = useSelector(
    (state) => state.customerInformation.customerId
  );
  const formState = useSelector((state) => state.providersToolCreditForm);
  const dispatch = useDispatch();
  const handleProviderNameChange = (event) => {
    dispatch(changeProvidersToolCreditFormName(event.target.value));
  };
  const handleDateChange = (event) => {
    dispatch(changeProvidersToolCreditFormDate(event.target.value));
  };
  const handleAmounthChange = (event) => {
    dispatch(changeProvidersToolCreditFormAmounth(event.target.value));
  };
  const handleDescriptionChange = (event) => {
    dispatch(changeProvidersToolCreditFormDescription(event.target.value));
  };
  function addCredit(customerId, newCredit) {
    if (!newCredit.date || !newCredit.operation) return;
    axios
      .post(`api/customer/addProviderOperation`, {
        customerId,
        name: newCredit.name,
        date: newCredit.date,
        amounth: newCredit.amounth,
        description: newCredit.description,
        operation: newCredit.operation,
      })
      .then((response) => {
        if (response.data) {
          dispatch(
            updateCustomerInformationProviders(response.data.providers),
            dispatch(
              restartProvidersToolCreditForm(),
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
          onClick={() => addCredit(customerId, formState)}
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
export default ProviderCredit;
