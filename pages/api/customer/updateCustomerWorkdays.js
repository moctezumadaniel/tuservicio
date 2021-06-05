import connectDB from '../../../middleware/mongodb'
import CustomerPublicInformation from '../../../models/customer/customerPublicInformation'

export default async function updateCustomerWorkdays(req, res){
    const { method } = req
    const customerId = req.body.customerId;
    const workdays = req.body.workdays
    await connectDB()
    if(method === "PATCH"){
        try{
            CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
                if(err) console.log(err);
                data.workdays = workdays;
                data.save()
                res.status(200)
            })
        }catch(err){
            res.status(400).json({ success: false })
        }
    }
}