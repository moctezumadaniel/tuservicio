import connectDB from '../../../middleware/mongodb'
import UserInformation from '../../../models/user/userInformation'

export default async function changeUserPhone(req, res){
    const userId = req.query.userId;
    const newPhone = req.query.newPhone;
    await connectDB()
    try{
        UserInformation.find({"userId":userId}, (err, data)=>{
            if(err) console.log(err);
            data.phone = newPhone;
            data.save()
            res.status(200).json({ success: true})

        })
    }catch (error) {
        res.status(400).json({ success: false })
    }
    
}