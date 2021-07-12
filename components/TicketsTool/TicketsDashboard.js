import styles from '../../styles/TicketsTool.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {changeTicketsToolToTicket} from '../../redux/actions/TicketsTool'
function TicketsList(){
    const customerInformation = useSelector(state => state.customerInformation)
    const allTickets = customerInformation.tickets;
    const openEditTicket = 'VER O EDITAR'
    const ticketsTitle = 'Notas de venta'
    function calculateGrandTotal(items){
        return items
        .reduce((acumulator, currentValue) => acumulator + parseFloat(currentValue.amounth || 0), 0)
        .toFixed(2)
    }
    function generateDescription(items){
        return items
        .reduce((acumulator, item) => acumulator + " " + item.description, "")
    }
    if(allTickets.length > 0){
        return(
            <>
                <div className={styles.TicketsListTitle}>{ticketsTitle}</div>
                <div className={styles.TicketsListContainer}>
                {allTickets.map(ticket =>(
                    <div className={styles.TicketPreviewContainer}>
                        <div className={styles.TicketPreviewNumberAmounthContainer}>
                            <div className={styles.TicketNumberPreview}>{`${ticket.number}-${ticket.date.slice(0,10)}`}</div>
                            <div className={styles.TicketAmounthPreview}>{`$${calculateGrandTotal(ticket.items)}`}</div>
                        </div>
                        <div className={styles.TicketNamePreview}>
                            {ticket.name}
                        </div>
                        <div className={styles.TicketPreviewDescription}>
                            {generateDescription(ticket.items)}
                        </div>
                        <div className={styles.OpenEditTicketContainer}>
                            <button className={styles.OpenEditTicket}>{openEditTicket}</button>
                        </div>
                    </div>
                ))

                }
                </div>
            </>
        )
    }
    else return ""
}
function TicketsDashboard (){
    const dispatch = useDispatch()

    const addTicketButton = '+ Agregar nota de venta';
    function handleNewTicketPress(){
        dispatch(changeTicketsToolToTicket())
    }
    return(
        <div className={styles.TicketsDashboardMainContainer}>
{/*BUTTON TO ADD TICKET */}
            <div className={styles.AddTicketButtonContainer}>
                <button className={styles.AddTicketButton}
                onClick={handleNewTicketPress}>
                    {addTicketButton}
                </button>
            </div>

            <TicketsList/>
        </div>
    )
}
export default TicketsDashboard