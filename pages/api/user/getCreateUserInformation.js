import connectDB from '../../../middleware/mongodb'
import UserInformation from '../../../models/user/userInformation'
export default async function getCreateUserInformation(req, res){
    const { method } = req;
    await connectDB()
    const userId = req.body.user
    switch(method){
        case 'GET':
            try{
                const user = await UserInformation.find({"userId":userId});
                res.status(200).json({ success: true, data: user });
            }catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try{
                UserInformation.create({"userId":userId})
            }catch (error) {
                res.status(400).json({ success: false })
            }
    }
}
