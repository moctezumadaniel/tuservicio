import connectDB from '../../../middleware/mongodb'
import CustomerPublicInformation from '../../../models/customer/customerPublicInformation'

export default async function addCustomerService(req, res){
    const { method } = req
    const customerId = req.body.customerId;
    const service = req.body.service
    await connectDB()
    if(method === "POST"){
        try{
            CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
                if(err) console.log(err);
                data.listOfServices.push(service);
                data.save()
                res.status(200)
            })
        }catch(err){
            res.status(400).json({ success: false })
        }
    }
}