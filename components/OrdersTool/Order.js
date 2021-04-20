import styles from '../../styles/OrdersTool.module.css'
import {useSelector, useDispatch} from 'react-redux'
import 
{changeCustomerOrderFormDate,
changeCustomerOrderFormDescription,
changeCustomerOrderFormNewItemDescription,
changeCustomerOrderFormNewItemAmounth,
addItemToCustomerOrderForm} from '../../redux/actions/OrdersTool'
import { render } from 'react-dom'
function Order(){
    const orderDate = useSelector(state=>state.customerOrderToolForm.date)
    const order = useSelector(state=>state.customerOrderToolForm)
    console.log(orderDate)
    const orderDescription = useSelector(state=>state.customerOrderToolForm.description)
    console.log(orderDescription)
    const newItemDescription = useSelector(state=>state.customerOrderToolForm.newItemDescription)
    const newItemAmounth = useSelector(state=>state.customerOrderToolForm.newItemAmounth)
    const orderNumber = '38-19/03/2019'
    const descriptionPlaceholder = 'Escribe la descripción'
    const saveOrderButton = 'GUARDAR'
    const deleteItem = 'Eliminar'
    const inputPlaceholder = 'Escribe aqui el nuevo concepto' 
    const itemDescription = 'Descripcion del articulo, servicio o cualquier cosa para lo que el cliente utilice las ordenes'
    const itemAmounth = '999'
    const newItemTitle = 'Nuevo concepto'
    const newDescriptionPlaceholder = 'Escribe la descripción'
    const newAmounthPlaceholder = 'Escribe la cantidad'
    const addItemButton = 'AGREGAR'
    console.log(order)
    const dispatch = useDispatch()
    const handleDateChange = event=>{
        dispatch(changeCustomerOrderFormDate(event.target.value))
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
    return(
       <div className={styles.OrderFormMainContainer}>
           {/*TITLE AND SAVE BUTTON */}
           <div className={styles.OrderFormTitle}>{orderNumber}</div>
            <div className={styles.SaveOrderButtonContainer}>
                <button className={styles.SaveOrderButton}>{saveOrderButton}</button>
            </div>
{/*DATE AND NAME OF THE CUSTOMER */}
            <div className={styles.OrderDateDescriptionContainer}>
                <input type='date' className={styles.OrderDateInput}
                onChange={handleDateChange}
                value={orderDate}/>
                <input type='text' className={styles.OrderDescriptionInput}
                placeholder={orderDescription}
                onChange={handleDescriptionChange}
                placeholder={descriptionPlaceholder}/>
            </div>
            {/*LIST OF ITEMS ADDED */}
            

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
                
                {newItemDescription !== "" || newItemAmounth !== "" ?
                <button className={styles.SaveNewItemButton}
                onClick={handleAddItemPress}
                >{addItemButton}</button>
                :''}
            </div>
            <div>{orderDate}{orderDescription}</div>
       </div>
    )
}
export default Order

{/*function ListOfItems (){
    const orderItems = useSelector(state=>state.customerOrderToolForm.items)
    return(
        
        <div>
            <div className={styles.OrderItemContainer}>
                <div className={styles.OrderItemDescrription}>{item.description}</div>
                <div className={styles.ItemAmounthDeleteContainer}>
                    <button className={styles.DeleteItemButton}>{deleteItem}</button>
                    <div className={styles.ItemAmounthContainer}>
                        <button className={styles.IncreaseDecreaseButtons}>-</button>
                        <div>{item.amounth}</div>
                        <button className={styles.IncreaseDecreaseButtons}>+</button>
                    </div>
                </div>
            </div>
        </div>
        )
    
}*/}