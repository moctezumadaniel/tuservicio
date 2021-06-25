import connectDB from '../../../middleware/mongodb'
import UserInformation from '../../../models/user/userInformation'

export default async function changeUserEmail(req, res){
    const { userId } = req.body;
    const { newEmail } = req.body;
    const filter = { userId:userId }
    const update = { email:newEmail }
    await connectDB()
    try{
        UserInformation.findOneAndUpdate(filter, update,{
            new:true
        }, (err, data)=>{
            if(err) console.log(err)
            res.status(200).json(data)
        })
    }catch (error) {
        res.status(400).json({ success: false })
    }
}