import styles from '../../styles/OrdersTool.module.css'
import {useSelector, useDispatch} from 'react-redux'
import 
{
changeCustomerOrderFormDate,
changeCustomerOrderFormDescription,
changeCustomerOrderFormNewItemDescription,
changeCustomerOrderFormNewItemAmounth,
addItemToCustomerOrderForm,
removeItemFromOrderForm,
changeCustomerOrderFormItemAmounth,
changeCustomerOrderFormItemDescription,
restartCustomerOrderForm,
changeCustomerOrderFormNumber
} from '../../redux/actions/OrdersTool'
import axios from 'axios'
import { updateCustomerInformationOrders } from '../../redux/actions/CustomerInformation'
function ListOfItems (){
    const deleteItem = 'Eliminar'
    const orderItems = useSelector(state=>state.customerOrderToolForm.items)
    const dispatch = useDispatch()
    function handleDeleteItemPress(id){
        dispatch(removeItemFromOrderForm(id))
    }
    const handleChangeOrderItemAmounth = (id) => (event)=>{
        dispatch(changeCustomerOrderFormItemAmounth(id,event.target.value))
    }
    const handleChangeOrderItemDescription = (id) => (event)=>{
        dispatch(changeCustomerOrderFormItemDescription(id,event.target.value))
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
    const orderNumber = useSelector(state => state.customerOrderToolForm.number)
    const currentOrder = useSelector(state => state.customerOrderToolForm)
    const orderDate = useSelector(state=>state.customerOrderToolForm.date)
    const orderDescription = useSelector(state=>state.customerOrderToolForm.description)
    const newItemDescription = useSelector(state=>state.customerOrderToolForm.newItemDescription)
    const newItemAmounth = useSelector(state=>state.customerOrderToolForm.newItemAmounth)
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
        dispatch(changeCustomerOrderFormNumber(orderNumber))
        return orderNumber
    }
    const descriptionPlaceholder = 'Escribe la descripción'
    const saveOrderButton = 'GUARDAR'
    const inputPlaceholder = 'Escribe aqui el nuevo concepto' 
    const itemDescription = 'Descripcion del articulo, servicio o cualquier cosa para lo que el cliente utilice las ordenes'
    const itemAmounth = '999'
    const newItemTitle = 'Nuevo concepto'
    const newDescriptionPlaceholder = 'Escribe la descripción'
    const newAmounthPlaceholder = 'Escribe la cantidad'
    const addItemButton = 'AGREGAR'
    const dispatch = useDispatch()
    const handleDateChange = event=>{
        dispatch(changeCustomerOrderFormDate(event.target.value),
        dispatch(changeCustomerOrderFormNumber(getOrderNumber(orders, event.target.value))))
    }
    const handleDescriptionChange = event =>{
        dispatch(changeCustomerOrderFormDescription(event.target.value))
    }
    const handleNewItemDescriptionChange = event =>{
        dispatch(changeCustomerOrderFormNewItemDescription(event.target.value))
    }
    const handleNewItemAmounthChange = event =>{
        dispatch(changeCustomerOrderFormNewItemAmounth(event.target.value))
    }
    function handleAddItemPress(){
        dispatch(addItemToCustomerOrderForm())
    }
    function addCustomerOrder(customerId, newOrder){
        axios.post(`api/customer/addCustomerOrder`,{
            customerId,
            number:newOrder.number,
            date:newOrder.date,
            description:newOrder.description,
            fullfiled:newOrder.fullfiled,
            items:newOrder.items

        })
        .then(response => {
            if(response.data){
                dispatch(updateCustomerInformationOrders(response.data.orders),
                dispatch(restartCustomerOrderForm()))
                console.log(response)
            }
        })
        .catch(error => console.log(error))
    }
    return(
       <div className={styles.OrderFormMainContainer}>
           {/*TITLE AND SAVE BUTTON */}
           <div className={styles.OrderFormTitle}>{`${orderNumber}-${orderDate}`}</div>
            <div className={styles.SaveOrderButtonContainer}>
                <button className={styles.SaveOrderButton}
                onClick={()=>addCustomerOrder(customerId, currentOrder)}>
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
                
                {newItemDescription !== "" && newItemAmounth !== "" ?
                <button className={styles.SaveNewItemButton}
                onClick={handleAddItemPress}
                >{addItemButton}</button>
                :''}
            </div>
       </div>
    )
}
export default Order

