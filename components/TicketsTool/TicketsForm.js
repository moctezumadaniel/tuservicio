import styles from '../../styles/TicketsTool.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {
changeCustomerTicketFormDate,
changeCustomerTicketFormName,
changeCustomerTicketFormNewItemDescription,
changeCustomerTicketFormNewItemAmounth,
addItemToCustomerTicketForm,
removeItemFromTicketForm,
changeTicketItemDescription
} from '../../redux/actions/CustomerTicketsTool'

function ListOfConcepts(){
    const deleteItemButton = 'Eliminar'
    const ticketItems = useSelector(state=>state.customerTicketsToolForm.items)
    const dispatch = useDispatch()
    function handleDeleteItemPress(id){
        dispatch(removeItemFromTicketForm(id))
    }
    const handleChangeTicketItemDescription= (id) => (event)=>{
        dispatch(changeTicketItemDescription(id,event.target.value))
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
                            <div className={styles.TicketAmounth}>{item.amounth}</div>
                            <button className={styles.DeleteItemButton}
                            onClick={()=>handleDeleteItemPress(item.id)}>{deleteItemButton}</button>
                        </div>
                    </div>
                    {console.log(item)}
                </div>
            )
        })
        
        }
        </>
    )
}

function TicketForm(){
    const ticketTitle = 'Nota '
    const ticketNumber = '38-19032021'
    const saveTicketButton = 'GUARDAR'
    const newItemTitle = 'Nuevo concepto'
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
    /*DATA AND LOGIC TO CALCULATE THE TICKET GRAND TOTAL*/
    const ticketItems = useSelector(state=>state.customerTicketsToolForm.items)
    const ticketGrandTotal = 
        ticketItems
        .reduce((acumulator, currentValue) => acumulator + parseFloat(currentValue.amounth), 0)
        .toFixed(2)

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

                {newItemDescription !== '' && newItemAmounth !== '' ?
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
export default TicketForm