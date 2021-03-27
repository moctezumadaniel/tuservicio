import styles from '../../styles/OrdersTool.module.css'

function Order(){
    const orderDescription = 'Orden '
    const orderNumber = '38-19/03/2019'
    const saveOrderButton = 'GUARDAR'
    const deleteItem = 'Eliminar'
    const inputPlaceholder = 'Escribe aqui el nuevo concepto' 
    const itemDescription = 'Descripcion del articulo, servicio o cualquier cosa para lo que el cliente utilice las ordenes'
    const itemAmounth = '999'
    const newItemTitle = 'Nuevo concepto'
    const addItemButton = 'AGREGAR'
    return(
       <div className={styles.OrderFormMainContainer}>
           {/*TITLE AND SAVE BUTTON */}
           <div className={styles.OrderFormTitle}>{orderDescription}{orderNumber}</div>
            <div className={styles.SaveOrderButtonContainer}>
                <button className={styles.SaveOrderButton}>{saveOrderButton}</button>
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
                <textarea className={styles.DescriptionOrderInput}/>
                <input type='number' className={styles.AmounthOrderInput}/>
                <button className={styles.SaveNewItemButton}>{addItemButton}</button>
            </div>
       </div>
    )
}
export default Order

