import styles from '../../../styles/CustomerServiceDashboard.module.css'
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
                <div className={styles.ToolIcon}></div>
                <div className={styles.ToolDescription}>{orders}</div>
            </div>
            <div className={styles.ToolItem}>
                <div className={styles.ToolIcon}></div>
                <div className={styles.ToolDescription}>{calculator}</div>
            </div>
            <div className={styles.ToolItem}>
                <div className={styles.ToolIcon}></div>
                <div className={styles.ToolDescription}>{tickets}</div>
            </div>
            <div className={styles.ToolItem}>
                <div className={styles.ToolIcon}></div>
                <div className={styles.ToolDescription}>{expenses}</div>
            </div>
            <div className={styles.ToolItem}>
                <div className={styles.ToolIcon}></div>
                <div className={styles.ToolDescription}>{customersAndProviders}</div>
            </div>
            <div className={styles.ToolItem}>
                <div className={styles.ToolIcon}></div>
                <div className={styles.ToolDescription}>{charge}</div>
            </div>
        </div>
    )
}
export default ServiceTools