import styles from '../../styles/CalculatorTool.module.css'
import { useSelector } from 'react-redux'
function CurrentOperation (){
    const currentOperation = useSelector(state=>state.customerCalculatorTool)
    return(
        <div className={styles.OperationContainer}>
            {currentOperation}
        </div>
    )
}

export default CurrentOperation