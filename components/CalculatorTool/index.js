import styles from '../../styles/CalculatorTool.module.css'
import CalculatorButtons from "./CalculatorButtons";
import CurrentOperation from "./CurrentOperation";

function CalculatorTool (){
    return(
        <div className={styles.MainCalculatorContainer}>
            <CurrentOperation/>
            <CalculatorButtons/>
        </div>
    )
}
export default CalculatorTool