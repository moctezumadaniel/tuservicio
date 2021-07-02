import connectDB from '../../../middleware/mongodb'
import CustomerPublicInformation from '../../../models/customer/customerPublicInformation'

export default async function addCustomerReservation(req, res){
    const { customerId } = req.body;
    const { date } = req.body;
    const { start } = req.body;
    const { end } = req.body;
    const { name } = req.body;
    const { description } = req.body;
    const filter = { customerId: customerId}
    await connectDB()
    try{
        CustomerPublicInformation.findOneAndUpdate(filter,{
            $push:{
                listOfReservations:{
                    date,
                    start,
                    end,
                    name,
                    description
                }
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