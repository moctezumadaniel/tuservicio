import styles from '../../styles/TicketsTool.module.css'
function TicketForm(){
    const ticketTitle = 'Nota '
    const ticketNumber = '38-19032021'
    const newItemTitle = 'Nuevo concepto'
    const deleteItemButton = 'Eliminar'
    const newDescriptionPlaceholder = 'Escribe la descripción del nuevo concepto';
    const newAmounthPlaceholder = 'Escribe el monto del concepto'
    const addConceptButton = 'AGREGAR'
    const namePlaceholder = 'Escribe el nombre del cliente'
    const grandTotalTitle = 'Total'
    const grandTotal = '$25,000'
    return(
        <div className={styles.TicketsToolMainContainer}>
            <div className={styles.TicketTitle}>
                {ticketTitle}{ticketNumber}
            </div>
{/*DATE AND NAME OF THE CUSTOMER */}
            <div className={styles.TicketDateCustomerContainer}>
                <input type='date' className={styles.TicketDateInput}/>
                <input type='text' className={styles.TicketNameInput}
                placeholder={namePlaceholder}/>
            </div>
{/*LIST OF ITEMS ADDED */}
            <div className={styles.TicketItemContainer}>
                <div className={styles.TicketDescription}>Nueva descripcion del servicio</div>
                <div className={styles.ItemAmounthDescription}>
                    <div className={styles.TicketAmounth}>120,000,000,000.24</div>
                    <button className={styles.DeleteItemButton}>{deleteItemButton}</button>
                </div>
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
            
{/*TICKET GRAND TOTAL*/}
<div className={styles.GrandTotalContainer}>
                <div className={styles.GrandTotalTitle}>{grandTotalTitle}</div>
                <div className={styles.GrandTotal}>{grandTotal}</div>
            </div>

        </div>
    )
}
export default TicketForm