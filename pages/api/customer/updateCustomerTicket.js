import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation'

export default async function updateCustomerTicket(req, res){
    const { method } = req
    const customerId = req.body.customerId
    const ticket = req.body.ticket
    await connectDB()
    if(method === "PATCH"){
        try{
            CustomerInformation.find({"customerId":customerId}, (err, data)=>{
                if(err) console.log(err);
                data.tickets.filter(
                    i => i._id !== ticket._id
                )
                data.tickets.push(ticket)
                data.save()
                res.status(200)
            })
        }catch(err){
            res.status(200).json({succes: false})
        }
    }
}