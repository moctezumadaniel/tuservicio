import connectDB from '../../../middleware/mongodb'
import UserPublicInformation from '../../../models/user/userPublicInformation';

export default async function getUserReservations(res, res){
    const { method } = req;
    const userId = req.body.userId;
    await connectDB()
    if(method === "GET"){
        try{
            const user = UserPublicInformation.find({"userId":userId})
            const listOfReservations = user.reservations
            res.status(200).json({ success: true, data: listOfReservations })
        }catch{
            res.status(400).json({ success: false })
        }
    }
}