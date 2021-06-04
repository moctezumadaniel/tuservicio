import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation';

export default async function addCustomerProviderOperation(req, res){
    const { method } = req
    const customerId = req.body.customerId;
    const newOperation = req.body.newOperation
    await connectDB()
    if(method === "POST"){
        try{
            CustomerInformation.find({"customerId":customerId}, (err, data)=>{
                if(err) console.log(err);
                data.providers.push(newOperation)
                data.save()
                res.status(200)
            })
        }catch(err){
            res.status(400).json({ success: false })
        }
    }
}