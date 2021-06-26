import connectDB from '../../../middleware/mongodb'
import CustomerPublicInformation from '../../../models/customer/customerPublicInformation'

export default async function updateCustomerMoreInformation(req, res){
    const { customerId } = req.body;
    const { moreInformation } = req.body;
    const filter = { customerId: customerId }
    const update = { moreInformation: moreInformation }
    await connectDB()
    try{
        CustomerPublicInformation.findOneAndUpdate(filter, update, {
            new:true
        }, (err, data)=>{
            if(err) console.log(err)
            res.status(200).json(data)
        })
    }catch(err){
        res.status(400).json({ success: false })
    }
}