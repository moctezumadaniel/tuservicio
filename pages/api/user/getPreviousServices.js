import connectDB from '../../../middleware/mongodb'
import CustomerPublicProfileInformation from '../../../models/customer/customerPublicInformation';
import UserPublicInformation from '../../../models/user/userPublicInformation';

export default async function getPreviousServices(req, res){
    const { method } = req;
    const userId = req.body.userId;
    await connectDB()
    const listOfPreviousServices = [];
    if(method === "GET"){
        try{
            const user = UserPublicInformation.find({"userId":userId});
            const UserPreviousServices = user.previousServices;
            for(i in UserPreviousServices){
                listOfPreviousServices.push(
                CustomerPublicProfileInformation.find({"customerId":i.customerId})
                )
            }
            res.json(200).json({ success: true, data: listOfPreviousServices })
        }catch{
            res.json(400).json({ success: false })
        }
        
    }
}