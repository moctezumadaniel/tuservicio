import connectDB from '../../../middleware/mongodb'
import CustomerPublicInformation from '../../../models/customer/customerPublicInformation'

export default async function updateCustomerEditingReservation(req, res){
    const { customerId } = req.body;
    const { id } = req.body;
    const { day } = req.body;
    const { start } = req.body;
    const { end } = req.body;
    const { description } = req.body;
    await connectDB()

    try{
        CustomerPublicInformation.findOneAndUpdate({
            customerId:customerId,
            "listOfSchedules._id":id
        },{
            $set:{
                'listOfSchedules.$.day':day,
                'listOfSchedules.$.start':start,
                'listOfSchedules.$.end':end,
                'listOfSchedules.$.description':description,
            }
        },{
            new:true
        },(err, data)=>{
            if(err) console.log(err)
            res.status(200).json(data)
        })
    }catch(err){
        res.status(400).json({ success: false })
    }
    
}