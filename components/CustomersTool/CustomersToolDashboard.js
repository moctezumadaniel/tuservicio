import styles from '../../styles/CustomersTool.module.css'
function CustomersToolDashboard (){
    const searchCustomer = 'Escribe el nombre del cliente';
    const newPayment = '+ Cobro';
    const newCredit = '+ Crédito';
    const customerName = 'Nombre Completo del Cliente';
    const grandTotalCreditDescription = 'Cobros pendientes:';
    const grandTotalCredit = '$25,000';
    
    const paymentDate = '23 de Marzo'
    const totalPayment = '$12,500';
    const paymentDescription = 'Descripción del pago de la deuda Descripción del pago de la deuda Descripción del pago de la deuda';

    const creditDate = '21 de Marzo'
    const totalCredit = '$12,500';
    const CreditDescription = 'Descripción del pago de la deuda Descripción del pago de la deuda Descripción del pago de la deuda';

    const openAndEdit = 'VER O EDITAR';

    return(
        <div className={styles.MainDashboardContainer}>
            <input type='text' placeholder={searchCustomer}
            className={styles.CustomersSearch}/>

            <div className={styles.AddButtonsContainer}>
                <button className={styles.AddPaymentButton}>{newPayment}</button>
                <button className={styles.AddCreditButton}>{newCredit}</button>
            </div>
{/*LIST OF CUSTOMERS OR CUSTOMER*/}
            <div>
                <div className={styles.CustomerName}>{customerName}</div>

                <div className={styles.CustomerCreditContainer}>
                    <div className={styles.CustomerCreditDescription}>{grandTotalCreditDescription}</div>
                    <div>{grandTotalCredit}</div>
                </div>
{/*CONTAINER OF THE CLIENTS PAYMENTS AND CREDITS */}
                <div className={styles.CustomerItemsContainer}>

{/*CUSTOMER PAYMENT TEMPLATE */}
                    <div className={styles.CustomerPaymentItemContainer}>
                        <div className={styles.ItemTitleContainer}>
                            <div>{paymentDate}</div>
                            <div className={styles.PaymentAmounth}>{totalPayment}</div>
                        </div>
                        <div>{paymentDescription}</div>
                        <div className={styles.OpenEditButtonContainer}>
                            <button className={styles.OpenEditButton}>{openAndEdit}</button>
                        </div>
                    </div>

{/*CUSTOMER CREDIT TEMPLATE */}
                    <div className={styles.CustomerCreditItemContainer}>
                        <div className={styles.ItemTitleContainer}>
                            <div>{creditDate}</div>
                            <div className={styles.CreditAmounth}>{totalCredit}</div>
                        </div>
                        <div>{CreditDescription}</div>
                        <div className={styles.OpenEditButtonContainer}>
                            <button className={styles.OpenEditButton}>{openAndEdit}</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default CustomersToolDashboard