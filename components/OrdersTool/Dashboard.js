import styles from '../../styles/OrdersTool.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeOrdersToolToOrder } from '../../redux/actions/OrdersTool'

function PendingOrders() {
    const customerInformation = useSelector(state => state.customerInformation)
    const orders = customerInformation.orders
    const pendingOrders = orders.filter(order => order.fullfiled === false)
    const pendingTitle = 'Pendientes'
    const seeEditButton = 'Ver o editar'
    const doneOrderButton = 'Orden atendida'

    if (pendingOrders.length > 0) {
        return(
            <>
            <div className={styles.Titles}>{pendingTitle}</div>
            <div className={styles.PendingItemContainer}>
            {
            pendingOrders.map(order => (                  
                <div className={styles.ItemPendingContainer} key={order._id}>
                    <div className={styles.OrderIdentifier}>{order.number}{order.date.slice(0,10)}</div>
                    <div>
                        {order.description && order.description.length > 140? 
                        order.description.slice(0,141) + "..."
                        :order.description ?
                        order.description
                        :""}
                    </div>
                    <div className={styles.ButtonsContainer}>
                        <button className={styles.SeeOrEditButton}>{seeEditButton}</button>
                        <button className={styles.OrderDoneButton}>{doneOrderButton}</button>
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

function FullfiledOrders() {
    const customerInformation = useSelector(state => state.customerInformation)
    const orders = customerInformation.orders
    const fullfiledOrders = orders.filter(order => order.fullfiled === true)
    const ordersFullfiled = 'Atendidas'
    const seeEditButton = 'Ver o editar'
    const deleteEditing = 'Eliminar'

    if (fullfiledOrders.length > 0) {
        return(
            <>
            <div className={styles.Titles}>{ordersFullfiled}</div>
            <div className={styles.EditingItemContainer}>
            {
            fullfiledOrders.map(order => (                  
                <div className={styles.ItemPendingContainer} key={order._id}>
                    <div className={styles.OrderIdentifier}>{order.number}{order.date}</div>
                    <div>
                        {order.description && order.description.length > 140? 
                        order.description.slice(0,141) + "..."
                        :order.description ?
                        order.description
                        :""}
                    </div>
                    <div className={styles.ButtonsContainer}>
                        <button className={styles.ContinueEditiingButton}>{seeEditButton}</button>
                        <button className={styles.DeleteEditingItem}>{deleteEditing}</button>
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

function OrdersDashboard() {
    const dispatch = useDispatch()
    function handleNewOrderPress() {
        dispatch(changeOrdersToolToOrder())
    }

    const addButton = '+ Crear nueva orden'

    return (
        <div className={styles.ordersMainContainer}>
            <button className={styles.NewOrderButton}
                onClick={handleNewOrderPress}>{addButton}
            </button>

            <PendingOrders/>
            <FullfiledOrders/>


        </div>
    )
}
export default OrdersDashboard