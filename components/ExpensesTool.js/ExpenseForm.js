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
        <div>
            <div>
                <input type='date' placeholder={selectDateButton}/>
                <input type='number' placeholder={amounthInput}/>
            </div>

            <div>
                <button
                onClick={handleSavePress}>{saveOrderButton}</button>
                <button>{shareOrderButton}</button>
            </div>
        </div>
    )
}
export default ExpenseForm