import styles from '../../styles/OrdersTool.module.css'
import {useSelector, useDispatch} from 'react-redux'
import 
{changeCustomerOrderFormDate,
changeCustomerOrderFormDescription} from '../../redux/actions/OrdersTool'
function Order(){
    const items = useSelector(state=>state.customerOrderToolForm.items)
    console.log(items)
    const orderDate = useSelector(state=>state.customerOrderToolForm.newItem.date)
    console.log(orderDate)
    const orderDescription = useSelector(state=>state.customerOrderToolForm.newItem.description)
    console.log(orderDescription)
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
    const dispatch = useDispatch()
    const handleDateChange = event=>{
        dispatch(changeCustomerOrderFormDate(event.target.value))
    }
    const handleDescriptionChange = event =>{
        dispatch(changeCustomerOrderFormDescription(event.target.value))
    }
    return(
       <div className={styles.OrderFormMainContainer}>
           {/*TITLE AND SAVE BUTTON */}
           <div className={styles.OrderFormTitle}>{orderDescription}{orderNumber}</div>
            <div className={styles.SaveOrderButtonContainer}>
                <button className={styles.SaveOrderButton}>{saveOrderButton}</button>
            </div>
{/*DATE AND NAME OF THE CUSTOMER */}
            <div className={styles.OrderDateDescriptionContainer}>
                <input type='date' className={styles.OrderDateInput}
                onChange={handleDateChange}
                value={orderDate}/>
                <input type='text' className={styles.OrderDescriptionInput}
                placeholder={descriptionPlaceholder}
                onChange={handleDescriptionChange}/>
            </div>
            {/*LIST OF ITEMS ADDED */}
            <div >

                <div className={styles.OrderItemContainer}>
                    <div className={styles.OrderItemDescrription}>{itemDescription}</div>
                    <div className={styles.ItemAmounthDeleteContainer}>
                        <button className={styles.DeleteItemButton}>{deleteItem}</button>
                        <div className={styles.ItemAmounthContainer}>
                            <button className={styles.IncreaseDecreaseButtons}>-</button>
                            <div>{itemAmounth}</div>
                            <button className={styles.IncreaseDecreaseButtons}>+</button>
                        </div>
                    </div>
                </div>

                <div className={styles.OrderItemContainer}>
                    <div className={styles.OrderItemDescrription}>{itemDescription}</div>
                    <div className={styles.ItemAmounthDeleteContainer}>
                        <button className={styles.DeleteItemButton}>{deleteItem}</button>
                        <div className={styles.ItemAmounthContainer}>
                            <button className={styles.IncreaseDecreaseButtons}>-</button>
                            <div>{itemAmounth}</div>
                            <button className={styles.IncreaseDecreaseButtons}>+</button>
                        </div>
                    </div>
                </div>

            </div>

            {/*NEW ITEM FORM */}
            <div className={styles.OrderItemForm}>
                <div className={styles.NewItemTitle}>{newItemTitle}</div>
                <textarea className={styles.DescriptionOrderInput}
                placeholder={newDescriptionPlaceholder}/>
                <input type='number' className={styles.AmounthOrderInput}
                placeholder={newAmounthPlaceholder}/>
                <button className={styles.SaveNewItemButton}>{addItemButton}</button>
            </div>
            <div>{orderDate}{orderDescription}</div>
       </div>
    )
}
export default Order

