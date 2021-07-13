import connectDB from '../../../middleware/mongodb'
import CustomerPublicProfileInformation from '../../../models/customer/customerPublicInformation';

export default async function handler(req, res){
    const { customerName } = req.query;
    console.log(customerName)
    await connectDB();
    try{
        CustomerPublicProfileInformation.find(
            (err, data) =>{
            if(err) console.log(err)
            res.status(200).json(data)
        })
    }catch(err){
        res.status(400)
    }
}