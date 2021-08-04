import connectDB from '../../../middleware/mongodb'
import CustomerPublicProfileInformation from '../../../models/customer/customerPublicInformation'
export default async function searchServices(req, res){
    const {search} = req.query
    await connectDB()
    try{
        CustomerPublicProfileInformation.find({
            $text:{$search: search}
        },(err, data) =>{
            if(err) console.log(400)
            res.status(200).json(data)
        })
    }
    catch(err){
        res.status(400)
    }
}