import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation'

export default async function deleteCustomerExpense(req, res){
    const { method } = req
    const customerId = req.body.customerId
    const expenseId = req.body.expenseId
    await connectDB()
    if(method === "DELETE"){
        try{
            CustomerInformation.find({"customerId":customerId}, (err, data)=>{
                if(err) console.log(err);
                data.expenses.filter(
                    i => i._id !== expenseId
                )
                data.save()
                res.status(200)
            })
        }catch(err){
            res.status(200).json({succes: false})
        }
    }
}