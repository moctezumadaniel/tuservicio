import styles from '../../styles/TicketsTool.module.css'
function ReceiptsTool(){
    const newItemTitle = 'Nuevo concepto'
    return(
        <div className={styles.TicketsToolMainContainer}>
{/*LIST OF ITEMS ADDED */}
            <div className={styles.TicketItemContainer}>
                <div className={styles.TicketDescription}>NUEVA DESCRI</div>
                <div className={styles.TicketAmounth}>12000</div>
            </div>

            <div className={styles.TicketItemContainer}>
                <div className={styles.TicketDescription}>NUEVA DESCRI</div>
                <div className={styles.TicketAmounth}>12000</div>
            </div>

            <div className={styles.TicketItemContainer}>
                <div className={styles.TicketDescription}>NUEVA DESCRI</div>
                <div className={styles.TicketAmounth}>12000</div>
            </div>
{/*NEW ITEM FORM */}
            <div className={styles.InputTicketItemContainer}>
                <div className={styles.NewItemTitle}>{newItemTitle}</div>
                <textarea className={styles.InputTicketDescription}/>
                <input type='number' className={styles.InputTicketAmounth}/>
            </div>

        </div>
    )
}
export default ReceiptsTool