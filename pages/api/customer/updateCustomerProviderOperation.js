import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation';

export default async function updateCustomerProviderOperation(req, res){
    const { method } = req
    const customerId = req.body.customerId;
    const operation = req.body.operation
    await connectDB()
    if(method === "PATCH"){
        try{
            CustomerInformation.find({"customerId":customerId}, (err, data)=>{
                if(err) console.log(err);
                data.providers.filter(
                    i => i._id !== operation._id
                )
                data.providers.push(operation)
                data.save()
                res.status(200)
            })
        }catch(err){
            res.status(400).json({ success: false })
        }
    }
}