import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation'

export default async function updateCustomerEditingService(req, res){
    const { customerId } = req.body;
    const { id } = req.body;
    await connectDB()

    try{
        CustomerInformation.findOneAndUpdate({
            customerId:customerId,
            "orders._id":id
        },{
            $set:{
                'orders.$.fullfiled':true,
            }
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