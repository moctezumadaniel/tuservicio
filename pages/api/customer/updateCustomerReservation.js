import connectDB from '../../../middleware/mongodb'
import CustomerPublicInformation from '../../../models/customer/customerPublicInformation'

export default async function updateCustomerReservation(req, res){
    const { method } = req
    const customerId = req.body.customerId;
    const reservation = req.body.reservation
    await connectDB()
    if(method === "PATCH"){
        try{
            CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
                if(err) console.log(err);
                data.listOfReservations.filter(
                    i => i._id !== reservation._id
                )
                data.listOfReservations.push(reservation);
                data.save()
                res.status(200)
            })
        }catch(err){
            res.status(400).json({ success: false })
        }
    }
}