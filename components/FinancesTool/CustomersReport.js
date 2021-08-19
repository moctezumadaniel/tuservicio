import styles from '../../styles/FinancesTool.module.css'
import { Doughnut, Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
function CustomersReport (){
    const customersTitle = 'Clientes'
    const financesTool = useSelector(state => state.financesTool)
    const noOperationsMessage = 'Sin operaciones en el periodo seleccionado'
    

    return(
        <div className={styles.FinanceComponentContainer}>
            <div className={styles.Title}>{customersTitle}</div>
            
            <div className={styles.ChartContainer}>
            {financesTool.customersKeys.length > 0 && financesTool.customersAmounths.length > 0 ?
            <Doughnut
                className={styles.SalesChart}
                data={{
                    labels: financesTool.customersKeys,
                    datasets: [{
                        label: '',
                        data: financesTool.customersAmounths,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    },
                ],

                }}
                height={400}
                width={400}
            />
            :
            <span className={styles.ErrorMessage}>
                {noOperationsMessage}
            </span>
            }
            </div>
        </div>
    )
}
export default CustomersReport