import connectDB from '../../../middleware/mongodb'
import CustomerPublicInformation from '../../../models/customer/customerPublicInformation'

export default async function updateCustomerSchedule(req, res){
    const { method } = req
    const customerId = req.body.customerId;
    const schedule = req.body.schedule
    await connectDB()
    if(method === "PATCH"){
        try{
            CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
                if(err) console.log(err);
                data.schedule = schedule;
                data.save()
                res.status(200)
            })
        }catch(err){
            res.status(400).json({ success: false })
        }
    }
}