import styles from '../../styles/CalculatorTool.module.css'
function CalculatorButtons (){
    const deleteButton = '<'
    const grandTotal = '25,000,000,000'
    return(
        <div className={styles.CalculatorButtonsContainer}>
            <div className={styles.ButtonsRow}>
                <div className={styles.GrandTotal}>=</div>
                <div className={styles.GrandTotal}>{grandTotal}</div>
            </div>
            <div className={styles.ButtonsRow}>
                <button className={styles.HighlightButton}>{deleteButton}</button>
                <button className={styles.HighlightButton}>%</button>
                <button className={styles.HighlightButton}>V</button>
                <button className={styles.HighlightButton}>C</button>
            </div>
                
            <div className={styles.ButtonsRow}>
                <button className={styles.CleanButton}>7</button>
                <button className={styles.CleanButton}>8</button>
                <button className={styles.CleanButton}>9</button>
                <button className={styles.HighlightButton}>/</button>
            </div>
                
            <div className={styles.ButtonsRow}>
                <button className={styles.CleanButton}>4</button>
                <button className={styles.CleanButton}>5</button>
                <button className={styles.CleanButton}>6</button>
                <button className={styles.HighlightButton}>x</button>
            </div>

            <div className={styles.ButtonsRow}>
                <button className={styles.CleanButton}>1</button>
                <button className={styles.CleanButton}>2</button>
                <button className={styles.CleanButton}>3</button>
                <button className={styles.HighlightButton}>-</button>
            </div>

            <div className={styles.ButtonsRow}>
                <button className={styles.CleanButton}>0</button>
                <button className={styles.CleanButton}>.</button>
                <button className={styles.HighlightButton}>=</button>
                <button className={styles.HighlightButton}>+</button>
            </div>
        </div>
    )
}
export default CalculatorButtons