import connectDB from '../../../middleware/mongodb'
import CustomerPublicInformation from '../../../models/customer/customerPublicInformation';

export default async function deleteCustomerReservation (req, res){
    const { customerId } = req.query;
    const { id } = req.query;
    const filter = { customerId: customerId }
    await connectDB()
    try{
        CustomerPublicInformation.findOneAndUpdate(filter,{
            $pull:{listOfReservations:{ _id: id}}
        },{
            new:true
        },(err, data)=>{
            if(err) console.log(err)
            res.status(200).json(data)
        })
    }
    catch(err){
        res.status(400)
    }

}