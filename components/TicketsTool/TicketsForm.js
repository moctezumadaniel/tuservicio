import styles from '../../styles/TicketsTool.module.css'
import {useDispatch, useSelector} from 'react-redux'
import 
{
    changeCustomerTicketFormDate,
    changeCustomerTicketFormName,
    changeCustomerTicketFormNewItemDescription,
    changeCustomerTicketFormNewItemAmounth,
    addItemToCustomerTicketForm,
} from '../../redux/actions/CustomerTicketsTool'
function TicketForm(){
    const ticketTitle = 'Nota '
    const ticketNumber = '38-19032021'
    const saveTicketButton = 'GUARDAR'
    const newItemTitle = 'Nuevo concepto'
    const deleteItemButton = 'Eliminar'
    const newDescriptionPlaceholder = 'Escribe la descripción del nuevo concepto';
    const newAmounthPlaceholder = 'Escribe el monto del concepto'
    const addConceptButton = 'AGREGAR'
    const namePlaceholder = 'Escribe el nombre del cliente'
    const grandTotalTitle = 'Total'
    const grandTotal = '$25,000'

    const dispatch = useDispatch()
    const handleTicketDateChange = event =>{
        dispatch(changeCustomerTicketFormDate(event.target.value))
    }
    const handleCustomerNameChange = event =>{
        dispatch(changeCustomerTicketFormName(event.target.value))
    }
    const handleNewDescriptionChange = event =>{
        dispatch(changeCustomerTicketFormNewItemDescription(event.target.value))
    }
    const handleNewAmounthChange = event =>{
        dispatch(changeCustomerTicketFormNewItemAmounth(event.target.value))
    }
    function handleAddItemPress (){
        dispatch(addItemToCustomerTicketForm())
    }

    const ticketDate = useSelector(state=>state.customerTicketsToolForm.date)
    const ticketName = useSelector(state=>state.customerTicketsToolForm.name)
    const newItemDescription = useSelector(state=>state.customerTicketsToolForm.newItemDescription)
    const newItemAmounth = useSelector(state=>state.customerTicketsToolForm.newItemAmounth)

    return(
        <div className={styles.TicketsToolMainContainer}>
            <div className={styles.TicketTitle}>
                {ticketTitle}{ticketNumber}
            </div>
            <div className={styles.TicketSaveButtonContainer}>
                <button className={styles.SaveTicketButton}>{saveTicketButton}</button>
            </div>
{/*DATE AND NAME OF THE CUSTOMER */}
            <div className={styles.TicketDateCustomerContainer}>
                <input type='date' className={styles.TicketDateInput}
                onChange={handleTicketDateChange}/>
                <input type='text' className={styles.TicketNameInput}
                placeholder={namePlaceholder}
                onChange={handleCustomerNameChange}/>
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
                placeholder={newDescriptionPlaceholder}
                onChange={handleNewDescriptionChange}/>

                <input type='number' className={styles.InputTicketAmounth}
                placeholder={newAmounthPlaceholder}
                onChange={handleNewAmounthChange}/>
                <button className={styles.AddItemButton}
                onClick={handleAddItemPress}>{addConceptButton}</button>
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