import connectDB from '../../../middleware/mongodb'
import UserInformation from '../../../models/user/userInformation'

export default async function changeUserName(req, res){
    const { method } = req;
    const userId = req.body.userId;
    const newName = req.body.newName;
    await connectDB()
    if(method === 'PATCH'){
        try{
            UserInformation.find({"userId":userId}, (err, data)=>{
                if(err) console.log(err);
                data.name = newName;
                data.save()
                res.status(200)
            })
        }catch (error) {
            res.status(400).json({ success: false })
        }
    }
}