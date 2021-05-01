import styles from '../../styles/CalculatorTool.module.css'
import { useDispatch, useSelector } from 'react-redux';
import{
    addItemToCustomerCalculator,
    addSignToCustomerCalculatorItem,
    addNumberToCustomerCalculatorItem
} from '../../redux/actions/CustomerCalculatorTool'
function CalculatorButtons (){
    const currentItems = useSelector(state=>state.customerCalculatorTool.items)
    const dispatch = useDispatch()
    const handleButtonPress = event =>{
        console.log(event.target.value)
        switch(event.target.value){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                console.log("numero presionado")
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                console.log("signo presionado")
                break;
            case 'delete':
                console.log("eliminar numero")
                break;
            case 'minimize':
                console.log('miniminar calculadora')
                break;
            case 'clear':
                console.log('eliminar toda la operación')
                break;
            default:
                console.log('ERROR EN PRESION')
                break;
            
        }
    }
    const deleteButton = '<'
    const grandTotal = '25,000,000,000'
    return(
        <div className={styles.CalculatorButtonsContainer}>
            <div className={styles.ButtonsRow}>
                <div className={styles.GrandTotal}>=</div>
                <div className={styles.GrandTotal}>{grandTotal}</div>
            </div>
            <div className={styles.ButtonsRow}>
                <button className={styles.HighlightButton} value='delete'
                onClick={handleButtonPress}>{deleteButton}</button>
                <button className={styles.HighlightButton} value='%'
                onClick={handleButtonPress}>%</button>
                <button className={styles.HighlightButton} value='minimize'
                onClick={handleButtonPress}>V</button>
                <button className={styles.HighlightButton} value='clear'
                onClick={handleButtonPress}>C</button>
            </div>
                
            <div className={styles.ButtonsRow}>
                <button className={styles.CleanButton} value='7'
                onClick={handleButtonPress}>7</button>
                <button className={styles.CleanButton} value='8'
                onClick={handleButtonPress}>8</button>
                <button className={styles.CleanButton} value='9'
                onClick={handleButtonPress}>9</button>
                <button className={styles.HighlightButton} value='/'
                onClick={handleButtonPress}>/</button>
            </div>
                
            <div className={styles.ButtonsRow}>
                <button className={styles.CleanButton} value='4'
                onClick={handleButtonPress}>4</button>
                <button className={styles.CleanButton} value='5'
                onClick={handleButtonPress}>5</button>
                <button className={styles.CleanButton} value='6'
                onClick={handleButtonPress}>6</button>
                <button className={styles.HighlightButton} value='*'
                onClick={handleButtonPress}>x</button>
            </div>

            <div className={styles.ButtonsRow}>
                <button className={styles.CleanButton} value='1'
                onClick={handleButtonPress}>1</button>
                <button className={styles.CleanButton} value='2'
                onClick={handleButtonPress}>2</button>
                <button className={styles.CleanButton} value='3'
                onClick={handleButtonPress}>3</button>
                <button className={styles.HighlightButton} value='-'
                onClick={handleButtonPress}>-</button>
            </div>

            <div className={styles.ButtonsRow}>
                <button className={styles.CleanButton} value='0'
                onClick={handleButtonPress}>0</button>
                <button className={styles.CleanButton} value='.'
                onClick={handleButtonPress}>.</button>
                <button className={styles.HighlightButton} value='equal'
                onClick={handleButtonPress}>=</button>
                <button className={styles.HighlightButton} value='+'
                onClick={handleButtonPress}>+</button>
            </div>
        </div>
    )
}
export default CalculatorButtons