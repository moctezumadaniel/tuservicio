import connectDB from '../../../middleware/mongodb'
import UserInformation from '../../../models/user/userInformation'

export default async function changeUserEmail(req, res){
    const { method } = req;
    const userId = req.body.userId;
    const newEmail = req.body.newEmail;
    await connectDB()
    if(method === 'PATCH'){
        try{
            UserInformation.find({"userId":userId}, (err, data)=>{
                if(err) console.log(err);
                data.email = newEmail;
                data.save()
                res.status(200)
            })
        }catch (error) {
            res.status(400).json({ success: false })
        }
    }
}