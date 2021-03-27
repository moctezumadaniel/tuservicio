import styles from '../../styles/TicketsTool.module.css'
function ReceiptsTool(){
    const ticketTitle = 'Nota '
    const ticketNumber = '38-19032021'
    const newItemTitle = 'Nuevo concepto'
    const newDescriptionPlaceholder = 'Escribe la descripción del nuevo concepto';
    const newAmounthPlaceholder = 'Escribe el monto del nuevo concepto'
    const addConceptButton = 'AGREGAR'
    return(
        <div className={styles.TicketsToolMainContainer}>
            <div className={styles.TicketTitle}>
                {ticketTitle}{ticketNumber}
            </div>
{/*LIST OF ITEMS ADDED */}
            <div className={styles.TicketItemContainer}>
                <div className={styles.TicketDescription}>Nueva descripcion del servicio</div>
                <div className={styles.TicketAmounth}>120,000,000,000.24</div>
            </div>

            <div className={styles.TicketItemContainer}>
                <div className={styles.TicketDescription}>Esta es otra descripcion del servicio</div>
                <div className={styles.TicketAmounth}>12,000</div>
            </div>

{/*NEW ITEM FORM */}
            <div className={styles.InputTicketItemContainer}>
                <div className={styles.NewItemTitle}>{newItemTitle}</div>
                <textarea className={styles.InputTicketDescription}
                placeholder={newDescriptionPlaceholder}/>
                <input type='number' className={styles.InputTicketAmounth}
                placeholder={newAmounthPlaceholder}/>
                <button className={styles.AddItemButton}>{addConceptButton}</button>
            </div>

        </div>
    )
}
export default ReceiptsTool