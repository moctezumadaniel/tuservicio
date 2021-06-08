import connectDB from '../../../middleware/mongodb'
import UserInformation from '../../../models/user/userInformation'
export default async function getCreateUserInformation(req, res){
    connectDB()
    const userId = req.params.user
            try{
                const user = await UserInformation.find({"userId":userId});
                if(user){
                    res.status(200).json({ success: true, data: user });
                }else{
                    UserInformation.create({"userId":userId})
                    const user = await UserInformation.find({"userId":userId});
                    res.status(200).json({ success: true, data: user });
                }
                
            }catch (error) {
                res.status(400).json({ success: false })
            }
}
