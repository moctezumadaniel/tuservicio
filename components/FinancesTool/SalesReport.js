import styles from '../../styles/FinancesTool.module.css'
import { Bar, Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
function SalesReport() {
    const salesTitle = 'Ventas'
    const financesTool = useSelector(state => state.financesTool)

    return (
        <div className={styles.FinanceComponentContainer}>
            <div className={styles.Title}>{salesTitle}</div>
            <div className={styles.ChartContainer}>
                <Line
                    className={styles.SalesChart}
                    data={{
                        labels: financesTool.incomeKeys,
                        datasets: [{
                            label: '',
                            data: financesTool.incomeAmounths,
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
                    options={{
                        maintainAspectRatio: true,
                        responsive: true,
                    }}
        
                />  
            </div>
        </div>
    )
}
export default SalesReport