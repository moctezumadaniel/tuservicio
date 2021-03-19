import styles from '../../styles/CustomerTools.module.css'
import {useDispatch} from 'react-redux';
import {changeOrdersToolToOrder} from '../../redux/actions/OrdersTool'
function OrdersDashboard (){
    const dispatch = useDispatch()
    function handleNewOrderPress(){
        dispatch(changeOrdersToolToOrder())
    }

    const addButton = '+ Crear nueva orden'
    const editionTitle = 'En edición'
    const pendingTitle = 'Pendientes'
    const edititingOrderNumber = '37'
    const editingOrderDate = ' - 09-03-2019'
    const editingOrderDescription = 'Descripcion corta de la orden'
    const continueEditingButton = 'Continuar edición'
    const deleteEditing = 'Eliminar'
    
    const pendingOrderNumber = '35'
    const pendingOrderDate = ' - 09-03-2019'
    const pendingOrderDescription = 'Descripcion corta de la orden'
    const seeEditButton = 'Ver o editar'
    const doneOrderButton = 'Orden atendida'


    return(
    <div className={styles.ordersMainContainer}>
        <button className={styles.NewOrderButton}
        onClick={handleNewOrderPress}>{addButton}</button>
{/*LISTA DE ORDENES EN EDICIÓN*/}
        <div className={styles.Titles}>{editionTitle}</div>
        <div className={styles.EditingItemContainer}>

            <div className={styles.ItemEditingContainer}>
                <div className={styles.OrderIdentifier}>{edititingOrderNumber}{editingOrderDate}</div>
                <div>{editingOrderDescription}</div>
                <div className={styles.ButtonsContainer}>
                    <button className={styles.ContinueEditiingButton}>{continueEditingButton}</button>
                    <button className={styles.DeleteEditingItem}>{deleteEditing}</button>
                </div>
            </div>

            <div className={styles.ItemEditingContainer}>
                <div className={styles.OrderIdentifier}>{edititingOrderNumber}{editingOrderDate}</div>
                <div>{editingOrderDescription}</div>
                <div className={styles.ButtonsContainer}>
                    <button className={styles.ContinueEditiingButton}>{continueEditingButton}</button>
                    <button className={styles.DeleteEditingItem}>{deleteEditing}</button>
                </div>
            </div>

        </div>
{/*LISTA DE ORDENES PENDIENTES*/}
        <div className={styles.Titles}>{pendingTitle}</div>

        <div className={styles.PendingItemContainer}>

            <div className={styles.ItemPendingContainer}>
                <div className={styles.OrderIdentifier}>{pendingOrderNumber}{pendingOrderDate}</div>
                <div>{pendingOrderDescription}</div>
                <div className={styles.ButtonsContainer}>
                    <button className={styles.SeeOrEditButton}>{seeEditButton}</button>
                    <button className={styles.OrderDoneButton}>{doneOrderButton}</button>
                </div>
            </div>

            <div className={styles.ItemPendingContainer}>
                <div className={styles.OrderIdentifier}>{pendingOrderNumber}{pendingOrderDate}</div>
                <div>{pendingOrderDescription}</div>
                <div className={styles.ButtonsContainer}>
                    <button className={styles.SeeOrEditButton}>{seeEditButton}</button>
                    <button className={styles.OrderDoneButton}>{doneOrderButton}</button>
                </div>
            </div>

            <div className={styles.ItemPendingContainer}>
                <div className={styles.OrderIdentifier}>{pendingOrderNumber}{pendingOrderDate}</div>
                <div>{pendingOrderDescription}</div>
                <div className={styles.ButtonsContainer}>
                    <button className={styles.SeeOrEditButton}>{seeEditButton}</button>
                    <button className={styles.OrderDoneButton}>{doneOrderButton}</button>
                </div>
            </div>

            <div className={styles.ItemPendingContainer}>
                <div className={styles.OrderIdentifier}>{pendingOrderNumber}{pendingOrderDate}</div>
                <div>{pendingOrderDescription}</div>
                <div className={styles.ButtonsContainer}>
                    <button className={styles.SeeOrEditButton}>{seeEditButton}</button>
                    <button className={styles.OrderDoneButton}>{doneOrderButton}</button>
                </div>
            </div>

            <div className={styles.ItemPendingContainer}>
                <div className={styles.OrderIdentifier}>{pendingOrderNumber}{pendingOrderDate}</div>
                <div>{pendingOrderDescription}</div>
                <div className={styles.ButtonsContainer}>
                    <button className={styles.SeeOrEditButton}>{seeEditButton}</button>
                    <button className={styles.OrderDoneButton}>{doneOrderButton}</button>
                </div>
            </div>

            <div className={styles.ItemPendingContainer}>
                <div className={styles.OrderIdentifier}>{pendingOrderNumber}{pendingOrderDate}</div>
                <div>{pendingOrderDescription}</div>
                <div className={styles.ButtonsContainer}>
                    <button className={styles.SeeOrEditButton}>{seeEditButton}</button>
                    <button className={styles.OrderDoneButton}>{doneOrderButton}</button>
                </div>
            </div>

            <div className={styles.ItemPendingContainer}>
                <div className={styles.OrderIdentifier}>{pendingOrderNumber}{pendingOrderDate}</div>
                <div>{pendingOrderDescription}</div>
                <div className={styles.ButtonsContainer}>
                    <button className={styles.SeeOrEditButton}>{seeEditButton}</button>
                    <button className={styles.OrderDoneButton}>{doneOrderButton}</button>
                </div>
            </div>

        </div>

    </div>
    )
}
export default OrdersDashboard