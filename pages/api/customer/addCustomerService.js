import connectDB from '../../../middleware/mongodb'
import CustomerPublicInformation from '../../../models/customer/customerPublicInformation'

export default async function addCustomerService(req, res){
    const { customerId } = req.body;
    const  { title }  = req.body;
    const  { image }  = req.body;
    const  { price }  = req.body;
    const  { description }  = req.body;
    const filter = { customerId: customerId }
    await connectDB()
    try{
        CustomerPublicInformation.findOneAndUpdate(filter, {
            $push:{listOfServices:{
                title,
                image,
                price,
                description
            }}
        },{
            new:true
        },(err, data)=>{
            if(err) console.log(err)
            res.status(200).json(data)
        })
    }catch(err){
        res.status(400).json({ success: false })
    }
}