import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation';

export default async function getCustomerInformation(req, res){
    const { method } = req
    const customerId = req.body.customerId;
    await connectDB();
    if(method === "GET"){
        try{
            const user = CustomerInformation.find({"customerId":customerId})
            res.status(200).json({success: true, date:user})
        }catch(err){
            res.status(400).json({success: false})
        }
    }
}