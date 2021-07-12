import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation';

export default async function deleteCustomerTicket(req, res){
    const { customerId } = req.query;
    const { id } = req.query
    const filter = { customerId: customerId}
    await connectDB()
    try{
        CustomerInformation.findOneAndUpdate(filter,{
            $pull:{
                tickets:{ _id: id}
            }
        },{
            new:true
        },(err, data) =>{
            if(err) console.log(err)
            res.status(200).json(data)
        })
    }catch(err){
        res.status(400).json({ success: false })
    }
    
}