import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation'

export default async function updateCustomerExpense(req, res){
    const { method } = req
    const customerId = req.body.customerId
    const expense = req.body.expense
    await connectDB()
    if(method === "PATCH"){
        try{
            CustomerInformation.find({"customerId":customerId}, (err, data)=>{
                if(err) console.log(err);
                data.expenses.filter(
                    i => i._id !== expense._id
                )
                data.expenses.push(expense)
                data.save()
                res.status(200)
            })
        }catch(err){
            res.status(200).json({succes: false})
        }
    }
}