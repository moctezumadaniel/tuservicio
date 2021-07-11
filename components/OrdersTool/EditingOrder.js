import styles from '../../styles/OrdersTool.module.css'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import { updateCustomerInformationOrders } from '../../redux/actions/CustomerInformation'
import { addItemToCustomerEditingOrderForm, 
    changeCustomerEditingOrderFormDate, 
    changeCustomerEditingOrderFormDescription, 
    changeCustomerEditingOrderFormItemAmounth, 
    changeCustomerEditingOrderFormItemDescription, 
    changeCustomerEditingOrderFormNewItemAmounth, 
    changeCustomerEditingOrderFormNewItemDescription, 
    changeCustomerEditingOrderFormNumber, 
    removeItemFromEditingOrderForm, 
    restartCustomerEditingOrderForm } from '../../redux/actions/CustomerEditingOrder'
import { changeOrdersToolToDashboard } from '../../redux/actions/OrdersTool'
function ListOfItems (){
    const deleteItem = 'Eliminar'
    const orderItems = useSelector(state=>state.customerEditingOrder.items)
    const dispatch = useDispatch()
    function handleDeleteItemPress(id){
        dispatch(removeItemFromEditingOrderForm(id))
    }
    const handleChangeOrderItemAmounth = (id) => (event)=>{
        dispatch(changeCustomerEditingOrderFormItemAmounth(id,event.target.value))
    }
    const handleChangeOrderItemDescription = (id) => (event)=>{
        dispatch(changeCustomerEditingOrderFormItemDescription(id,event.target.value))
    }
    return (
        <div>
        {
            orderItems
            .map((item)=>{

                return(
                <div key={item.id}>
                    <div className={styles.OrderItemContainer}>
                        <textarea className={styles.OrderItemDescrription}
                        value={item.description}
                        onChange={handleChangeOrderItemDescription(item.id)}/>
                        <div className={styles.ItemAmounthDeleteContainer}>
                            <div className={styles.ItemAmounthContainer}>
                                <button className={styles.IncreaseDecreaseButtons}>-</button>
                                <input 
                                className={styles.ItemAmounth}
                                type='number'
                                value={item.amounth}
                                onChange={handleChangeOrderItemAmounth(item.id)}/>
                                <button className={styles.IncreaseDecreaseButtons}>+</button>
                            </div>
                            <button className={styles.DeleteItemButton}
                            onClick={()=>handleDeleteItemPress(item.id)}>{deleteItem}</button>
                            
                        </div>
                    </div>
                    
                </div>
                
                )
                
            })
        }
        </div>
    )
    
}

function Order(){
    const customerInformation = useSelector(state => state.customerInformation)
    const customerId = customerInformation.customerId
    const orders = customerInformation.orders
    const orderNumber = useSelector(state => state.customerEditingOrder.number)
    const currentOrder = useSelector(state => state.customerEditingOrder)
    console.log(currentOrder)
    const orderDate = useSelector(state=>state.customerEditingOrder.date.slice(0,10))
    const orderDescription = useSelector(state=>state.customerEditingOrder.description)
    const newItemDescription = useSelector(state=>state.customerEditingOrder.newItemDescription)
    const newItemAmounth = useSelector(state=>state.customerEditingOrder.newItemAmounth)
    const descriptionPlaceholder = 'Escribe la descripción'
    const saveOrderButton = 'GUARDAR'
    const newItemTitle = 'Nuevo concepto'
    const newDescriptionPlaceholder = 'Escribe la descripción'
    const newAmounthPlaceholder = 'Escribe la cantidad'
    const addItemButton = 'AGREGAR'
    const editingTitle = '(Editando)'
    const dispatch = useDispatch()
    function getOrderNumber (orders, date){
        console.log(orders)
        console.log(date.toString())
        const numbersFromOrderWithSelectedDate = orders.map(
            order =>{
                if(order.date.slice(0,10) == date && order.number){
                    return parseInt(order.number)
                } else return 0
            }
        )
        console.log(numbersFromOrderWithSelectedDate)
        const lastOrderNumber = Math.max(...numbersFromOrderWithSelectedDate) || 0;
        console.log(lastOrderNumber)
        const orderNumber = lastOrderNumber + 1
        dispatch(changeCustomerEditingOrderFormNumber(orderNumber))
        return orderNumber
    }
    
    const handleDateChange = event=>{
        dispatch(changeCustomerEditingOrderFormDate(event.target.value),
        dispatch(changeCustomerEditingOrderFormNumber(getOrderNumber(orders, event.target.value))))
    }
    const handleDescriptionChange = event =>{
        dispatch(changeCustomerEditingOrderFormDescription(event.target.value))
    }
    const handleNewItemDescriptionChange = event =>{
        dispatch(changeCustomerEditingOrderFormNewItemDescription(event.target.value))
    }
    const handleNewItemAmounthChange = event =>{
        dispatch(changeCustomerEditingOrderFormNewItemAmounth(event.target.value))
    }
    function handleAddItemPress(){
        dispatch(addItemToCustomerEditingOrderForm())
    }
    function saveEditingOrder(customerId, editingOrder){
        axios.patch(`api/customer/updateCustomerOrder`,{
            customerId,
            id:editingOrder._id,
            number:editingOrder.number,
            date:editingOrder.date,
            description:editingOrder.description,
            fullfiled:editingOrder.fullfiled,
            items:editingOrder.items

        })
        .then(response => {
            if(response.data){
                dispatch(updateCustomerInformationOrders(response.data.orders),
                dispatch(restartCustomerEditingOrderForm()),
                dispatch(changeOrdersToolToDashboard()))
                console.log(response)
            }
        })
        .catch(error => console.log(error))
    }
    return(
       <div className={styles.OrderFormMainContainer}>
           {/*TITLE AND SAVE BUTTON */}
           <div className={styles.OrderFormTitle}>{`${orderNumber}-${orderDate} ${editingTitle}`}</div>
            <div className={styles.SaveOrderButtonContainer}>
                <button className={styles.SaveOrderButton}
                onClick={()=>saveEditingOrder(customerId, currentOrder)}>
                    {saveOrderButton}
                </button>
            </div>
{/*DATE AND NAME OF THE CUSTOMER */}
            <div className={styles.OrderDateDescriptionContainer}>
                <input type='date' className={styles.OrderDateInput}
                onChange={handleDateChange}
                value={orderDate}/>
                <input type='text' className={styles.OrderDescriptionInput}
                value={orderDescription}
                onChange={handleDescriptionChange}
                placeholder={descriptionPlaceholder}/>
            </div>
            
            <ListOfItems/>

            {/*NEW ITEM FORM */}
            <div className={styles.OrderItemForm}>
                <div className={styles.NewItemTitle}>{newItemTitle}</div>

                <textarea className={styles.DescriptionOrderInput}
                placeholder={newDescriptionPlaceholder}
                onChange={handleNewItemDescriptionChange}
                value={newItemDescription}/>

                <input type='number' className={styles.AmounthOrderInput}
                placeholder={newAmounthPlaceholder}
                onChange={handleNewItemAmounthChange}
                value={newItemAmounth}/>
                
                {newItemDescription && newItemAmounth  ?
                <button className={styles.SaveNewItemButton}
                onClick={handleAddItemPress}
                >{addItemButton}</button>
                :''}
            </div>
       </div>
    )
}
export default Order

