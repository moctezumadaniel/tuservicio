import styles from '../../styles/ExpensesTool.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { 
    changeExpenseToolToDashboard,
    changeExpensesToolFormDate,
    changeExpensesToolFormAmounth,
    changeExpensesToolFormDescription 
} from '../../redux/actions/ExpenseTool'
function ExpenseForm() {
    
    const selectDateButton = 'Seleccionar fecha';
    const amounthInput = 'Escribir monto'
    const saveOrderButton = 'GUARDAR'
    const shareOrderButton = 'COMPARTIR / DESCARGAR'
/*FORM STATE */
    const formState = useSelector(state=>state.expensesToolForm)
    const dispatch = useDispatch()
    function handleSavePress() {
        dispatch(changeExpenseToolToDashboard())
    }
    const handleDateChange = (event)=>{
        dispatch(changeExpensesToolFormDate(event.target.value))
    }
    const handleAmounthChange = (event)=>{
        dispatch(changeExpensesToolFormAmounth(event.target.value))
    }
    const handleDescriptionChange = (event)=>{
        dispatch(changeExpensesToolFormDescription(event.target.value))
    }
    return (
        <div className={styles.ExpenseFormMainContainer}>
            <div className={styles.DateAmounthContainer}>
                <input type='date' 
                placeholder={selectDateButton} 
                className={styles.DateExpenseInput} 
                value={formState.date}
                onChange={handleDateChange}/>

                <input type='number' 
                placeholder={amounthInput} 
                className={styles.AmounthExpenseInput} 
                value={formState.amounth}
                onChange={handleAmounthChange}/>
            </div>

            <div className={styles.ExpenseFormButtonsContainer}>
                <button
                    onClick={handleSavePress}
                    className={styles.SaveButton}>{saveOrderButton}</button>
                <button className={styles.ShareButton}>{shareOrderButton}</button>
            </div>
            <textarea className={styles.ExpenseTextArea} 
            value={formState.description}
            onChange={handleDescriptionChange}/>
        </div>
    )
}
export default ExpenseForm