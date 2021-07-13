import styles from '../../styles/TicketsTool.module.css'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import { updateCustomerInformationTickets } from '../../redux/actions/CustomerInformation'
import { addItemToCustomerEditingTicketForm, 
    changeCustomerEditingTicketFormDate, 
    changeCustomerEditingTicketFormName, 
    changeCustomerEditingTicketFormNewItemAmounth, 
    changeCustomerEditingTicketFormNewItemDescription, 
    changeEditingTicketItemAmounth, 
    changeEditingTicketItemDescription, 
    removeItemFromEditingTicketForm } from '../../redux/actions/CustomerEditingTicket'
import { changeTicketsToolToDashboard } from '../../redux/actions/TicketsTool'
function ListOfConcepts(){
    const deleteItemButton = 'Eliminar'
    const ticketItems = useSelector(state=>state.customerEditingTicket.items)
    const dispatch = useDispatch()
    function handleDeleteItemPress(id){
        dispatch(removeItemFromEditingTicketForm(id))
    }
    const handleChangeTicketItemDescription= (id) => (event)=>{
        dispatch(changeEditingTicketItemDescription(id,event.target.value))
    }
    const handleChangeTicketItemAmounth = (id) => (event) =>{
        dispatch(changeEditingTicketItemAmounth(id,event.target.value))
    }
    return(
        <>
        {
        
        ticketItems
        .map(item=>{
            return(
                <div key={item.id}>
                    <div className={styles.TicketItemContainer}>
                        <textarea 
                        className={styles.TicketDescription}
                        value={item.description}
                        onChange={handleChangeTicketItemDescription(item.id)}/>
                        <div className={styles.ItemAmounthDescription}>
                            <input type='number' className={styles.TicketAmounth}
                            value={item.amounth}
                            onChange={handleChangeTicketItemAmounth(item.id)}/>
                            <button className={styles.DeleteItemButton}
                            onClick={()=>handleDeleteItemPress(item.id)}>{deleteItemButton}</button>
                        </div>
                    </div>
                </div>
            )
        })
        
        }
        </>
    )
}

function EditingTicket(){
    const ticketTitle = 'Nota '
    const saveTicketButton = 'GUARDAR'
    const newItemTitle = 'Nuevo concepto'
    const newDescriptionPlaceholder = 'Escribe la descripción del nuevo concepto';
    const newAmounthPlaceholder = 'Escribe el monto del concepto'
    const addConceptButton = 'AGREGAR'
    const namePlaceholder = 'Escribe el nombre del cliente'
    const grandTotalTitle = 'Total'
    const editingTitle = '(Edición)'

    const dispatch = useDispatch()
    const handleTicketDateChange = event =>{
        dispatch(changeCustomerEditingTicketFormDate(event.target.value))
    }
    const handleCustomerNameChange = event =>{
        dispatch(changeCustomerEditingTicketFormName(event.target.value))
    }
    const handleNewDescriptionChange = event =>{
        dispatch(changeCustomerEditingTicketFormNewItemDescription(event.target.value))
    }
    const handleNewAmounthChange = event =>{
        dispatch(changeCustomerEditingTicketFormNewItemAmounth(event.target.value))
    }
    function handleAddItemPress (){
        dispatch(addItemToCustomerEditingTicketForm())
    }

    const customerInformation = useSelector(state => state.customerInformation)
    const previousTickets = customerInformation.tickets
    const currentTicket = useSelector(state => state.customerEditingTicket)
    const ticketDate = currentTicket.date.slice(0,10)
    const ticketName = currentTicket.name
    const ticketNumber = currentTicket.number
    const newItemDescription = currentTicket.newItemDescription
    const newItemAmounth = currentTicket.newItemAmounth
/*DATA AND LOGIC TO CALCULATE THE TICKET GRAND TOTAL*/
    const ticketItems = currentTicket.items
    const ticketGrandTotal = 
        ticketItems
        .reduce((acumulator, currentValue) => acumulator + parseFloat(currentValue.amounth || 0), 0)
        .toFixed(2);
    function calculateTicketNumber(date, tickets){
        console.log(tickets)
        console.log(date.toString())
        const previousTicket = previousTickets.filter(
            ticket => ticket._id == currentTicket._id
        )
        const numbersFromTicketsWithSelectedDate = tickets.map(
            ticket =>{
                if(ticket.date.slice(0,10) == date && ticket.number){
                    return parseInt(ticket.number)
                } else return 0
            }
        )
        console.log(numbersFromTicketsWithSelectedDate)
        const lastTicketNumber = numbersFromTicketsWithSelectedDate.length > 0? 
            Math.max(...numbersFromTicketsWithSelectedDate)
            :0;
        console.log(lastTicketNumber)
        const ticketNumber = lastTicketNumber + 1
        if(previousTicket[0].date.slice(0,10) === date){
            return(previousTicket[0].date.slice(0,10))
        }else return ticketNumber
    }
    function editTicket(customerId, editingTicket){
        axios.patch(`api/customer/updateCustomerTicket`,{
            customerId,
            id:editingTicket._id,
            number: editingTicket.number,
            date: editingTicket.date,
            name: editingTicket.name,
            items:editingTicket.items,

        })
        .then(response => {
            if(response.data){
                dispatch(updateCustomerInformationTickets(response.data.tickets),
                dispatch(changeTicketsToolToDashboard()))
                console.log(response)
            }
        })
        .catch(error => console.log(error))
    }
    return(
        <div className={styles.TicketsToolMainContainer}>
            <div className={styles.TicketTitle}>
                {`${ticketTitle}${ticketNumber}-${ticketDate} ${editingTitle}`}
            </div>
            <div className={styles.TicketSaveButtonContainer}>
                <button className={styles.SaveTicketButton}
                onClick={()=>editTicket(customerInformation.customerId, currentTicket)}>
                    {saveTicketButton}
                </button>
            </div>
{/*DATE AND NAME OF THE CUSTOMER */}
            <div className={styles.TicketDateCustomerContainer}>
                <input type='date' className={styles.TicketDateInput}
                onChange={handleTicketDateChange}
                value={ticketDate}/>

                <input type='text' className={styles.TicketNameInput}
                placeholder={namePlaceholder}
                onChange={handleCustomerNameChange}
                value={ticketName}/>
            </div>

            <ListOfConcepts/>

{/*NEW ITEM FORM */}
            <div className={styles.InputTicketItemContainer}>
                <div className={styles.NewItemTitle}>{newItemTitle}</div>
                <textarea className={styles.InputTicketDescription}
                placeholder={newDescriptionPlaceholder}
                onChange={handleNewDescriptionChange}
                value={newItemDescription}/>

                <input type='number' className={styles.InputTicketAmounth}
                placeholder={newAmounthPlaceholder}
                onChange={handleNewAmounthChange}
                value={newItemAmounth}/>

                {newItemDescription && newItemAmounth ?
                <button className={styles.AddItemButton}
                onClick={handleAddItemPress}>{addConceptButton}</button>
                :""}
            </div>
            
{/*TICKET GRAND TOTAL*/}
            <div className={styles.GrandTotalContainer}>
                <div className={styles.GrandTotalTitle}>{grandTotalTitle}</div>
                <div className={styles.GrandTotal}>{"$"+ticketGrandTotal}</div>
            </div>

        </div>
    )
}
export default EditingTicket