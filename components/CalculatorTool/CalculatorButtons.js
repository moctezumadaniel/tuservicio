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
                <button className={styles.HighlightButton} value='delete'>{deleteButton}</button>
                <button className={styles.HighlightButton} value='%'>%</button>
                <button className={styles.HighlightButton} value='minimize'>V</button>
                <button className={styles.HighlightButton} value='clear'>C</button>
            </div>
                
            <div className={styles.ButtonsRow}>
                <button className={styles.CleanButton} value='7'>7</button>
                <button className={styles.CleanButton} value='8'>8</button>
                <button className={styles.CleanButton} value='9'>9</button>
                <button className={styles.HighlightButton} value='/'>/</button>
            </div>
                
            <div className={styles.ButtonsRow}>
                <button className={styles.CleanButton} value='4'>4</button>
                <button className={styles.CleanButton} value='5'>5</button>
                <button className={styles.CleanButton} value='6'>6</button>
                <button className={styles.HighlightButton} value='*'>x</button>
            </div>

            <div className={styles.ButtonsRow}>
                <button className={styles.CleanButton} value='1'>1</button>
                <button className={styles.CleanButton} value='2'>2</button>
                <button className={styles.CleanButton} value='3'>3</button>
                <button className={styles.HighlightButton} value='-'>-</button>
            </div>

            <div className={styles.ButtonsRow}>
                <button className={styles.CleanButton} value='0'>0</button>
                <button className={styles.CleanButton} value='.'>.</button>
                <button className={styles.HighlightButton} value='equal'>=</button>
                <button className={styles.HighlightButton} value='+'>+</button>
            </div>
        </div>
    )
}
export default CalculatorButtons