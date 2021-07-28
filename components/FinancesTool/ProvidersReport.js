import styles from '../../styles/FinancesTool.module.css'
import { Doughnut, Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
function ProvidersReport (){
    const providersTitle = 'Proveedores'
    const financesTool = useSelector(state => state.financesTool)
    
    console.log(financesTool)
    return(
        <div className={styles.FinanceComponentContainer}>
            <div className={styles.Title}>{providersTitle}</div>
            <div className={styles.ChartContainer}>
            <Doughnut
                className={styles.SalesChart}
                data={{
                    labels: financesTool.providersKeys,
                    datasets: [{
                        label: '',
                        data: financesTool.providersAmounths,
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
            </div>
        </div>
    )
}
export default ProvidersReport