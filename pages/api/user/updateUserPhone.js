import connectDB from '../../../middleware/mongodb'
import UserInformation from '../../../models/user/userInformation'

export default async function changeUserPhone(req, res){
    const { userId } = req.body;
    const { newPhone } = req.body;
    const filter = { userId: userId }
    const update = { phoneNumber: newPhone }
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