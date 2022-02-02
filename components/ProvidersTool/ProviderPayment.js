import styles from "../../styles/ProvidersTool.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeProvidersToolPaymentFormName,
  changeProvidersToolPaymentFormDate,
  changeProvidersToolPaymentFormAmounth,
  changeProvidersToolPaymentFormDescription,
  restartProvidersToolPaymentForm,
  changeProvidersToolToDashboard,
} from "../../redux/actions/ProvidersTool";
import axios from "axios";
import { updateCustomerInformationProviders } from "../../redux/actions/CustomerInformation";
function ProviderPayment() {
  const nameInput = "Escribe el nombre del proveedor";
  const amounthInput = "Escribe el monto del pago";
  const save = "GUARDAR PAGO";
  const share = "COMPARTIR / GUARDAR";
  /*FORM STATE */
  const customerId = useSelector(
    (state) => state.customerInformation.customerId
  );
  const formState = useSelector((state) => state.providersToolPaymentForm);
  const dispatch = useDispatch();
  const handleProviderNameChange = (event) => {
    dispatch(changeProvidersToolPaymentFormName(event.target.value));
  };
  const handleDateChange = (event) => {
    dispatch(changeProvidersToolPaymentFormDate(event.target.value));
  };
  const handleAmounthChange = (event) => {
    dispatch(changeProvidersToolPaymentFormAmounth(event.target.value));
  };
  const handleDescriptionChange = (event) => {
    dispatch(changeProvidersToolPaymentFormDescription(event.target.value));
  };
  function addPayment(customerId, newPayment) {
    if (!newPayment.date || !newPayment.operation) return;
    axios
      .post(`api/customer/addProviderOperation`, {
        customerId,
        name: newPayment.name,
        date: newPayment.date,
        amounth: newPayment.amounth,
        description: newPayment.description,
        operation: newPayment.operation,
      })
      .then((response) => {
        if (response.data) {
          dispatch(
            updateCustomerInformationProviders(response.data.providers),
            dispatch(
              restartProvidersToolPaymentForm(),
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
          className={styles.SavePaymentButton}
          onClick={() => addPayment(customerId, formState)}
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
export default ProviderPayment;
