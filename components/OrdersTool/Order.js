import styles from '../../styles/CustomerTools.module.css'
import TextField from '@material-ui/core/TextField';

function Order(){
    const orderDescription = 'Orden'
    const orderNumber = '38 - 19-03-2019'
    const inputPlaceholder = 'Escribe aqui el nuevo concepto' 
    const itemDescription = 'Descripcion del articulo, servicio o cualquier cosa para lo que el cliente utilice las ordenes'
    const itemAmounth = '999'
    return(
        <div className={styles.OrderContainer}>

            <div className={styles.OrderTitle}>{orderDescription} {orderNumber}</div>

{/*PLANTILLA DE ARTICULO DE LA ORDEN*/}
            <div className={styles.OrderItemContainer}>
                <div className={styles.OrderItemDescription}>{itemDescription}</div>
                <div className={styles.OrderAmounthContainer}>
                    <button className={styles.DecreaseItemAmounth}> - </button>
                    <div className={styles.ItemAmounth}>{itemAmounth}</div>
                    <button className={styles.IncreaseItemAmounth}> + </button>
                </div>
            </div>

            <TextField className={styles.NewOrderItemInput}
            classes={materialUiStyles.newItemInput}
            multiline={true}
            placeholder={inputPlaceholder}          
            />


        </div>
    )
}
export default Order

const materialUiStyles = {
    newItemInput:{
      borderColor: 'red', 
    }
}