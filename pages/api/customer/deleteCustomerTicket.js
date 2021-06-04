import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation';

export default async function deleteCustomerTicket(req, res){
    const { method } = req
    const customerId = req.body.customerId;
    const ticketId = req.body.ticketId
    await connectDB()
    if(method === "DELETE"){
        try{
            CustomerInformation.find({"customerId":customerId}, (err, data)=>{
                if(err) console.log(err);
                data.tickets.filter(
                    i => i._id !== ticketId
                )
                data.save()
                res.status(200)
            })
        }catch(err){
            res.status(400).json({ success: false })
        }
    }
}