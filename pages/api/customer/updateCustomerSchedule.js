import connectDB from '../../../middleware/mongodb'
import CustomerPublicInformation from '../../../models/customer/customerPublicInformation'

export default async function updateCustomerSchedule(req, res){
    const customerId = req.query.customerId;
    const schedule = req.query.schedule
    await connectDB()

    try{
        CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
            if(err) console.log(err);
            data.schedule = schedule;
            data.save()
            res.status(200).json({ success:true })
        })
    }catch(err){
        res.status(400).json({ success: false })
    }
    
}