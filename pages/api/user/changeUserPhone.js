import connectDB from '../../../middleware/mongodb'
import UserInformation from '../../../models/user/userInformation'

export default async function changeUserPhone(req, res){
    const { method } = req;
    const userId = req.body.userId;
    const newPhone = req.body.newPhone;
    await connectDB()
    if(method === 'PATCH'){
        try{
            UserInformation.find({"userId":userId}, (err, data)=>{
                if(err) console.log(err);
                data.phone = newPhone;
                data.save()
                res.status(200)

            })
        }catch (error) {
            res.status(400).json({ success: false })
        }
    }
}