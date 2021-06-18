import connectDB from '../../../middleware/mongodb'
import CustomerPublicInformation from '../../../models/customer/customerPublicInformation'

export default async function updateCustomerPhoneNumber(req, res){
    const customerId = req.query.customerId;
    const phoneNumber = req.query.phoneNumber
    await connectDB()
    try{
        CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
            if(err) console.log(err);
            data.phoneNumber = phoneNumber;
            data.save()
            res.status(200).json({ success:true })
        })
    }catch(err){
        res.status(400).json({ success: false })
    }
    
}