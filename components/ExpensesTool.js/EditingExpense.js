import styles from '../../styles/ExpensesTool.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { 
    changeExpenseToolToDashboard,
} from '../../redux/actions/ExpenseTool'
import axios from 'axios'
import { updateCustomerInformationExpenses } from '../../redux/actions/CustomerInformation';
import { changeExpensesToolEditingFormAmounth, 
    changeExpensesToolEditingFormDate, 
    changeExpensesToolEditingFormDescription, 
    restartExpensesEditingToolForm
} from '../../redux/actions/CustomerEditingExpense';
function EditingExpense() {
    const customerInformation = useSelector(state => state.customerInformation)
    const selectDateButton = 'Seleccionar fecha';
    const amounthInput = 'Escribir monto'
    const saveOrderButton = 'GUARDAR'
    const shareOrderButton = 'COMPARTIR / DESCARGAR'
/*FORM STATE */
    const formState = useSelector(state=>state.expensesToolEditingForm)
    const dispatch = useDispatch()

    const handleDateChange = (event)=>{
        dispatch(changeExpensesToolEditingFormDate(event.target.value))
    }
    const handleAmounthChange = (event)=>{
        dispatch(changeExpensesToolEditingFormAmounth(event.target.value))
    }
    const handleDescriptionChange = (event)=>{
        dispatch(changeExpensesToolEditingFormDescription(event.target.value))
    }

    function editExpense (customerId, editingExpense){
        axios.patch(`api/customer/updateCustomerEditingExpense`,{
            customerId,
            id: editingExpense._id,
            date: editingExpense.date,
            amounth: editingExpense.amounth,
            description: editingExpense.description
        })
        .then(response =>{
            if(response.data){
                dispatch(updateCustomerInformationExpenses(response.data.expenses),
                dispatch(restartExpensesEditingToolForm()),
                dispatch(changeExpenseToolToDashboard()))
                console.log(response)
            }
        })
        .catch(error => console.log(error))
    }

    return (
        <div className={styles.ExpenseFormMainContainer}>
            <div className={styles.DateAmounthContainer}>
                <input type='date' 
                placeholder={selectDateButton} 
                className={styles.DateExpenseInput} 
                value={formState.date ? formState.date.slice(0,10):""}
                onChange={handleDateChange}/>

                <input type='number' 
                placeholder={amounthInput} 
                className={styles.AmounthExpenseInput} 
                value={formState.amounth}
                onChange={handleAmounthChange}/>
            </div>

            <div className={styles.ExpenseFormButtonsContainer}>
                <button
                    className={styles.SaveButton}
                    onClick={()=>editExpense(customerInformation.customerId, formState)}>
                        {saveOrderButton}
                </button>
                <button className={styles.ShareButton}>{shareOrderButton}</button>
            </div>
            <textarea className={styles.ExpenseTextArea} 
            value={formState.description}
            onChange={handleDescriptionChange}/>
        </div>
    )
}
export default EditingExpense