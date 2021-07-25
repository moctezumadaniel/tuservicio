import styles from '../../styles/FinancesTool.module.css'
import { Bar, Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
function SalesReport() {
    const salesTitle = 'Ventas'
    const tickets = useSelector(state => state.customerInformation.tickets)
    const ticketsGrupedPerDay = () => {
        return tickets.reduce((obj, ticket)=>{
            const key = ticket.date.slice(0,10)
            if(obj[key]== null) obj[key] = [];
            obj[key].push(ticket)
            return obj
        },{})
    }
    function getTicketGrandTotal(ticket){
        return ticket.items.reduce((acum, item) => 
        acum + (item.amounth || 0), 0
        )
        
    }
    function totalSalesPerDay(){
        const keys = Object.keys(ticketsGrupedPerDay())
        return keys.map(key => {
            return ticketsGrupedPerDay()[key].reduce((acum, ticket) =>
            acum + getTicketGrandTotal(ticket),0
            )
        })
    }
    console.log(ticketsGrupedPerDay())
    console.log(ticketsGrupedPerDay())
    console.log(totalSalesPerDay())
    return (
        <div className={styles.FinanceComponentContainer}>
            <div className={styles.Title}>{salesTitle}</div>
            <div className={styles.ChartContainer}>
                <Line
                    className={styles.SalesChart}
                    data={{
                        labels: Object.keys(ticketsGrupedPerDay()),
                        datasets: [{
                            label: '',
                            data: totalSalesPerDay(),
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