import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation'

export default async function addCustomerExpense(req, res){
    const { method } = req
    const customerId = req.body.customerId
    const newExpense = req.body.newExpense
    await connectDB()
    if(method === "POST"){
        try{
            CustomerInformation.find({"customerId":customerId}, (err, data)=>{
                if(err) console.log(err);
                data.expenses.push(newExpense)
                data.save()
                res.status(200)
            })
        }catch(err){
            res.status(200).json({succes: false})
        }
    }
}