import connectDB from '../../../middleware/mongodb'
import CustomerPublicInformation from '../../../models/customer/customerPublicInformation'

export default async function updateCustomerMoreInformation(req, res){
    const customerId = req.query.customerId;
    const moreInformation = req.query.moreInformation
    await connectDB()
    try{
        CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
            if(err) console.log(err);
            data.moreInformation = moreInformation;
            data.save()
            res.status(200).json({ success:true })
        })
    }catch(err){
        res.status(400).json({ success: false })
    }
}