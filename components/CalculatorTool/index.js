import CalculatorButtons from "./CalculatorButtons";
import CurrentOperation from "./CurrentOperation";

function CalculatorTool (){
    return(
        <div>
            <CurrentOperation/>
            <CalculatorButtons/>
        </div>
    )
}
export default CalculatorTool