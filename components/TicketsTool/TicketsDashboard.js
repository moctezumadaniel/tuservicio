import styles from '../../styles/TicketsTool.module.css'
import {useDispatch} from 'react-redux'
import {changeTicketsToolToTicket} from '../../redux/actions/TicketsTool'
function TicketsDashboard (){
    const dispatch = useDispatch()

    const addTicketButton = '+ Agregar nota de venta';
    const TicketsTitle = 'Notas de venta';
    const TicketNumber = '35-19/03/2021';
    const TicketGrandTotal = '$25,000'
    const TicketsShortDescription = 'Descripcion corta de los conceptos dentro de la nota de venta'
    const openEditTicket = 'VER O EDITAR'

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
{/*LIST OF TICKETS*/}
            <div>
                <div className={styles.TicketsListTitle}>{TicketsTitle}</div>
                <div className={styles.TicketsListContainer}>

                {/*TICKET ITEM*/}
                    <div className={styles.TicketPreviewContainer}>
                        <div className={styles.TicketPreviewNumberAmounthContainer}>
                            <div className={styles.TicketNumberPreview}>{TicketNumber}</div>
                            <div className={styles.TicketAmounthPreview}>{TicketGrandTotal}</div>
                        </div>
                        <div>
                            {TicketsShortDescription}
                        </div>
                        <div className={styles.OpenEditTicketContainer}>
                            <button className={styles.OpenEditTicket}>{openEditTicket}</button>
                        </div>
                    </div>

                    <div className={styles.TicketPreviewContainer}>
                        <div className={styles.TicketPreviewNumberAmounthContainer}>
                            <div className={styles.TicketNumberPreview}>{TicketNumber}</div>
                            <div className={styles.TicketAmounthPreview}>{TicketGrandTotal}</div>
                        </div>
                        <div>
                            {TicketsShortDescription}
                        </div>
                        <div className={styles.OpenEditTicketContainer}>
                            <button className={styles.OpenEditTicket}>{openEditTicket}</button>
                        </div>
                    </div>

                    <div className={styles.TicketPreviewContainer}>
                        <div className={styles.TicketPreviewNumberAmounthContainer}>
                            <div className={styles.TicketNumberPreview}>{TicketNumber}</div>
                            <div className={styles.TicketAmounthPreview}>{TicketGrandTotal}</div>
                        </div>
                        <div>
                            {TicketsShortDescription}
                        </div>
                        <div className={styles.OpenEditTicketContainer}>
                            <button className={styles.OpenEditTicket}>{openEditTicket}</button>
                        </div>
                    </div>

                    <div className={styles.TicketPreviewContainer}>
                        <div className={styles.TicketPreviewNumberAmounthContainer}>
                            <div className={styles.TicketNumberPreview}>{TicketNumber}</div>
                            <div className={styles.TicketAmounthPreview}>{TicketGrandTotal}</div>
                        </div>
                        <div>
                            {TicketsShortDescription}
                        </div>
                        <div className={styles.OpenEditTicketContainer}>
                            <button className={styles.OpenEditTicket}>{openEditTicket}</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default TicketsDashboard