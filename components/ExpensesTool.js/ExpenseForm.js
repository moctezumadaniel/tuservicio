import styles from "../../styles/ExpensesTool.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeExpenseToolToDashboard,
  changeExpensesToolFormDate,
  changeExpensesToolFormAmounth,
  changeExpensesToolFormDescription,
  restartExpensesToolForm,
} from "../../redux/actions/ExpenseTool";
import axios from "axios";
import { updateCustomerInformationExpenses } from "../../redux/actions/CustomerInformation";
function ExpenseForm() {
  const customerInformation = useSelector((state) => state.customerInformation);
  const selectDateButton = "Seleccionar fecha";
  const amounthInput = "Escribir monto";
  const saveOrderButton = "GUARDAR";
  const shareOrderButton = "COMPARTIR / DESCARGAR";
  /*FORM STATE */
  const formState = useSelector((state) => state.expensesToolForm);
  const dispatch = useDispatch();

  const handleDateChange = (event) => {
    dispatch(changeExpensesToolFormDate(event.target.value));
  };
  const handleAmounthChange = (event) => {
    dispatch(changeExpensesToolFormAmounth(event.target.value));
  };
  const handleDescriptionChange = (event) => {
    dispatch(changeExpensesToolFormDescription(event.target.value));
  };

  function addExpense(customerId, newExpense) {
    if (!newExpense.date || newExpense.amounth <= 0) return;
    axios
      .post(`api/customer/addCustomerExpense`, {
        customerId,
        date: newExpense.date,
        amounth: newExpense.amounth,
        description: newExpense.description,
      })
      .then((response) => {
        if (response.data) {
          dispatch(
            updateCustomerInformationExpenses(response.data.expenses),
            dispatch(restartExpensesToolForm()),
            dispatch(changeExpenseToolToDashboard())
          );
          console.log(response);
        }
      })
      .catch((error) => console.log(error));
  }
  console.log(formState);
  return (
    <div className={styles.ExpenseFormMainContainer}>
      <div className={styles.DateAmounthContainer}>
        <input
          type="date"
          placeholder={selectDateButton}
          className={styles.DateExpenseInput}
          value={formState.date}
          onChange={handleDateChange}
        />

        <input
          type="number"
          placeholder={amounthInput}
          className={styles.AmounthExpenseInput}
          value={formState.amounth}
          onChange={handleAmounthChange}
        />
      </div>

      <div className={styles.ExpenseFormButtonsContainer}>
        <button
          className={styles.SaveButton}
          onClick={() => addExpense(customerInformation.customerId, formState)}
        >
          {saveOrderButton}
        </button>
        <button className={styles.ShareButton}>{shareOrderButton}</button>
      </div>
      <textarea
        className={styles.ExpenseTextArea}
        value={formState.description}
        onChange={handleDescriptionChange}
      />
    </div>
  );
}
export default ExpenseForm;
