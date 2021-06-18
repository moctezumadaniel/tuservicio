import connectDB from '../../../middleware/mongodb'
import CustomerPublicInformation from '../../../models/customer/customerPublicInformation'

export default async function updateCustomerAddress(req, res){
    const customerId = req.query.customerId;
    const address = req.query.address
    await connectDB()
    try{
        CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
            if(err) console.log(err);
            data.address = address;
            data.save()
            res.status(200).json({ success:true })
        })
    }catch(err){
        res.status(400).json({ success: false })
    }
}