import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation'

export default async function addCustomerExpense(req, res){
    const { customerId } = req.body
    const { date } = req.body
    const { amounth } = req.body
    const { description } = req.body
    await connectDB()
    try{
        CustomerInformation.findOneAndUpdate({
            customerId
        },{
            $push:{
                expenses:{
                    date,
                    amounth,
                    description
                }
            }
        },{
            new:true
        },(err, data) =>{
            if(err) console.log(err)
            res.status(200).json(data)
        })
    }catch(err){
        res.status(200).json({succes: false})
    }
}