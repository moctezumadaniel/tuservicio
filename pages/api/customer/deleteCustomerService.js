import connectDB from '../../../middleware/mongodb'
import CustomerPublicProfileInformation from '../../../models/customer/customerPublicInformation';

export default async function deleteCustomerService(req, res){
    const { customerId } = req.query;
    const { id } = req.query;
    const filter = { customerId: customerId }
    await connectDB();
        try{
            CustomerPublicProfileInformation.findOneAndUpdate(filter,{
                $pull: {listOfServices:{_id:id}}
            },{
                new:true
            },(err, data) =>{
                if(err) console.log(err)
                res.status(200).json(data)
            })
        }catch(err){
            res.status(400).json({success: false})
        }
}