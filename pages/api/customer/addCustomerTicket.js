import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation';

export default async function addCustomerTicket(req, res){
    const { customerId } = req.body;
    const { number } = req.body;
    const { date } = req.body;
    const { name } = req.body;
    const { items } = req.body;
    const filter = { customerId: customerId }
    await connectDB()
    try{
        CustomerInformation.findOneAndUpdate(filter,{
            $push:{
                tickets:{
                    number,
                    date,
                    name,
                    items
                }
            }
        },{
            new:true
        },(err, data) =>{
            if(err) console.log(err)
            res.status(200).json(data)
        })
    }catch(err){
        res.status(400)
    }
    
}