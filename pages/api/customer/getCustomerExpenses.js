import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation'

export default function getCustomerExpenses(req, res){
    const { method } = req
    const customerId = req.body.customerId
    await connectDB()
    if(method === "GET"){
        try{
            const user = CustomerInformation.find({"customerId":customerId})
            const expenses = user.expenses;
            res.status(200).json({ success: true, data: expenses})
        }catch(err){
            res.status(400).json({success: false})
        }
    }
}