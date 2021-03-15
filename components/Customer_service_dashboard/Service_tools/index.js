import styles from '../../../styles/CustomerServiceDashboard.module.css'
import {GrList} from 'react-icons/gr'
import {AiOutlineCalculator} from 'react-icons/ai'
import {IoReceiptOutline} from 'react-icons/io5'
import {BsTools} from 'react-icons/bs'
import {FaPeopleCarry} from 'react-icons/fa'
import {GiReceiveMoney} from 'react-icons/gi'
function ServiceTools (){
    const orders = 'ORDENES';
    const calculator = 'CALCULADORA';
    const tickets = 'NOTAS DE VENTA';
    const expenses = 'GASTOS';
    const customersAndProviders = 'CLIENTES Y PROVEEDORES';
    const charge = 'COBRAR';
    return(
        <div className={styles.ToolBarContainer}>
            <div className={styles.ToolItem}>
                <GrList className={styles.ToolIcon}/>
                <div className={styles.ToolDescription}>{orders}</div>
            </div>
            <div className={styles.ToolItem}>
                <AiOutlineCalculator className={styles.ToolIcon}/>
                <div className={styles.ToolDescription}>{calculator}</div>
            </div>
            <div className={styles.ToolItem}>
                <IoReceiptOutline className={styles.ToolIcon}/>
                <div className={styles.ToolDescription}>{tickets}</div>
            </div>
            <div className={styles.ToolItem}>
                <BsTools className={styles.ToolIconExpenses}/>
                <div className={styles.ToolDescription}>{expenses}</div>
            </div>
            <div className={styles.ToolItem}>
                <FaPeopleCarry className={styles.ToolIcon}/>
                <div className={styles.ToolDescription}>{customersAndProviders}</div>
            </div>
            <div className={styles.ToolItem}>
                <GiReceiveMoney className={styles.ToolIcon}/>
                <div className={styles.ToolDescription}>{charge}</div>
            </div>
        </div>
    )
}
export default ServiceTools