import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation';

export default async function getCustomerTickets(req, res){
    const { method } = req
    const customerId = req.body.customerId;
    await connectDB();
    if(method === "GET"){
        try{
            const user = CustomerInformation.find({"customerId":customerId})
            const tickets = user.tickets;
            res.status(200).json({success: true, date:tickets})
        }catch(err){
            res.status(400).json({success: false})
        }
    }
}