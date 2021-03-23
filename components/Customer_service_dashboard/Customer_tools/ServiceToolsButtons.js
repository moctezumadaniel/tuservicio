import styles from '../../../styles/CustomerServiceDashboard.module.css'
import {GrList} from 'react-icons/gr'
import {AiOutlineCalculator} from 'react-icons/ai'
import {IoReceiptOutline} from 'react-icons/io5'
import {BsTools} from 'react-icons/bs'
import {FaPeopleCarry} from 'react-icons/fa'
import {GiReceiveMoney} from 'react-icons/gi'
import {IoIosPeople} from "react-icons/io";
import {FaRegChartBar} from 'react-icons/fa'
import {useDispatch} from 'react-redux'
import {changeToolToExpenses, changeToolToOrders, changeToolToCustomers} from '../../../redux/actions/CustomerActiveTool'
function ServiceToolsButtons (){
    const dispatch = useDispatch()
    function handleOrderPress(){
        dispatch(changeToolToOrders())
    }
    function handleExpensesPress(){
        dispatch(changeToolToExpenses())
    }
    function handleCustomersPress(){
        dispatch(changeToolToCustomers())
    }
    const orders = 'ORDENES';
    const calculator = 'CALCULADORA';
    const tickets = 'NOTAS DE VENTA';
    const expenses = 'GASTOS';
    const customers = 'CLIENTES';
    const providers = 'PROVEEDORES'
    const finance = 'MIS FINANZAS'
    const charge = 'COBRAR';
    return(
        <div className={styles.ToolBarContainer}>
            <div className={styles.ToolItem}
            onClick={handleOrderPress}>
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
            <div className={styles.ToolItem}
            onClick={handleExpensesPress}>
                <BsTools className={styles.ToolIconExpenses}/>
                <div className={styles.ToolDescription}>{expenses}</div>
            </div>
            <div className={styles.ToolItem}
            onClick={handleCustomersPress}>
                <IoIosPeople className={styles.ToolIcon}/>
                <div className={styles.ToolDescription}>{customers}</div>
            </div>

            <div className={styles.ToolItem}>
                <FaPeopleCarry className={styles.ToolIcon}/>
                <div className={styles.ToolDescription}>{providers}</div>
            </div>

            <div className={styles.ToolItem}>
                <FaRegChartBar className={styles.ToolIcon}/>
                <div className={styles.ToolDescription}>{finance}</div>
            </div>

            <div className={styles.ToolItem}>
                <GiReceiveMoney className={styles.ToolIcon}/>
                <div className={styles.ToolDescription}>{charge}</div>
            </div>
        </div>
        
    )
}
export default ServiceToolsButtons