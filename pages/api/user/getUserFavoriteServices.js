import connectDB from '../../../middleware/mongodb'
import CustomerPublicProfileInformation from '../../../models/customer/customerPublicInformation';
import UserPublicInformation from '../../../models/user/userPublicInformation';

export default async function getUserFavoriteServices(req, res){
    const { method } = req;
    const userId = req.body.userId;
    await connectDB()
    const listOfFavoriteServices = [];
    if(method === "GET"){
        try{
            const user = UserPublicInformation.find({"userId":userId});
            const UserPreviousServices = user.favoriteServices;
            for(i in UserPreviousServices){
                listOfFavoriteServices.push(
                CustomerPublicProfileInformation.find({"customerId":i.customerId})
                )
            }
            res.json(200).json({ success: true, data: listOfFavoriteServices })
        }catch{
            res.json(400).json({ success: false })
        }
        
    }
}