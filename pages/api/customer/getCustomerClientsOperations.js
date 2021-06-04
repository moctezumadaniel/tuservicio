import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation';

export default async function getCustomerClientsOperations(req, res){
    const { method } = req
    const customerId = req.body.customerId;
    await connectDB()
    if(method === "GET"){
        try{
            const user = CustomerInformation.find({"customerId":customerId})
            const operations = user.customers
            res.status(200).json({ success: true, data: operations})
        }catch(err){
            res.status(400).json({ success: false })
        }
    }
}