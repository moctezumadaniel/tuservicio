import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation';

export default async function deleteCustomerClientOperation(req, res){
    const { method } = req
    const customerId = req.body.customerId;
    const operationId = req.body.operationId
    await connectDB()
    if(method === "DELETE"){
        try{
            CustomerInformation.find({"customerId":customerId}, (err, data)=>{
                if(err) console.log(err);
                data.customers.filter(
                    i => i._id !== operationId
                )
                data.save()
                res.status(200)
            })
        }catch(err){
            res.status(400).json({ success: false })
        }
    }
}