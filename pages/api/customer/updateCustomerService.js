import connectDB from '../../../middleware/mongodb'
import CustomerPublicInformation from '../../../models/customer/customerPublicInformation'

export default async function updateCustomerService(req, res){
    const { method } = req
    const customerId = req.body.customerId;
    const service = req.body.service
    await connectDB()
    if(method === "PATCH"){
        try{
            CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
                if(err) console.log(err);
                data.listOfServices.filter(
                    i => i._id !== service._id
                )
                data.listOfServices.push(service);
                data.save()
                res.status(200)
            })
        }catch(err){
            res.status(400).json({ success: false })
        }
    }
}