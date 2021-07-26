import styles from '../../styles/FinancesTool.module.css'
import { Doughnut, Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
function ProvidersReport (){
    const providersTitle = 'Proveedores'
    const providers = useSelector(state => state.customerInformation.providers)
    const groupedProviders = () =>{
        return providers.reduce((obj, operation) =>{
            const key = operation.name
            if(obj[key] == null) obj[key] = [];
            obj[key].push(operation)
            return obj
        },{})
    }
    function getOperationDebt(operation){
        if(operation.operation == 'payment'){
            return -operation.amounth
        }else return operation.amounth
    }
    const totalDebtPerProvider = () =>{
        const keys = Object.keys(groupedProviders())
        return keys.map(key => {
            return groupedProviders()[key].reduce((acum, operation) => 
            acum + getOperationDebt(operation), 0
            )
        })
        
    }
    console.log(groupedProviders())
    console.log(totalDebtPerProvider())
    return(
        <div className={styles.FinanceComponentContainer}>
            <div className={styles.Title}>{providersTitle}</div>
            <div className={styles.ChartContainer}>
            <Doughnut
                className={styles.SalesChart}
                data={{
                    labels: Object.keys(groupedProviders()),
                    datasets: [{
                        label: '',
                        data: totalDebtPerProvider(),
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