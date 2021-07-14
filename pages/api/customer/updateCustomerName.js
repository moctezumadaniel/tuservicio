import connectDB from '../../../middleware/mongodb'
import CustomerPublicInformation from '../../../models/customer/customerPublicInformation'
export default async function handler(req, res) {
    const { customerId } = req.body
    const { newName } = req.body;

    await connectDB()

    try {
        CustomerPublicInformation.findOneAndUpdate({
            customerId
        },{
            name:newName
        },{
            new:true
        }, (err, data)=>{
            if(err) console.log(err)
            res.status(200).json(data)
            }
        )
    } catch (err) {
        res.status(400).json({ success: false })
    }

}