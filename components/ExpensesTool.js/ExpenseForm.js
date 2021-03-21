import styles from '../../styles/ExpensesTool.module.css'
import {useDispatch} from 'react-redux';
import {changeExpenseToolToDashboard} from '../../redux/actions/ExpenseTool'
function ExpenseForm(){
    const dispatch = useDispatch()
    const selectDateButton = 'Seleccionar fecha';
    const amounthInput = 'Escribir monto'
    const saveOrderButton = 'GUARDAR'
    const shareOrderButton = 'COMPARTIR / DESCARGAR'

    function handleSavePress (){
        dispatch(changeExpenseToolToDashboard())
    }
    return(
        <div className={styles.ExpenseFormMainContainer}>
            <div className={styles.DateAmounthContainer}>
                <input type='date' placeholder={selectDateButton} className={styles.DateExpenseInput}/>
                <input type='number' placeholder={amounthInput} className={styles.AmounthExpenseInput}/>
            </div>

            <div className={styles.ExpenseFormButtonsContainer}>
                <button
                onClick={handleSavePress}
                className={styles.SaveButton}>{saveOrderButton}</button>
                <button className={styles.ShareButton}>{shareOrderButton}</button>
            </div>
            <textarea className={styles.ExpenseTextArea}/>
        </div>
    )
}
export default ExpenseForm