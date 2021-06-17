import connectDB from '../../../middleware/mongodb'
import CustomerPublicInformation from '../../../models/customer/customerPublicInformation'

export default async function updateCustomerShortDescription(req, res){
    const customerId = req.query.customerId;
    const shortDescription = req.query.shortDescription
    await connectDB()

    try{
        CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
            if(err) console.log(err);
            data.shortDescription = shortDescription;
            data.save()
            res.status(200).json({ succes: true })
        })
    }catch(err){
        res.status(400).json({ success: false })
    }
    
}