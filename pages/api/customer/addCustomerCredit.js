import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation';

export default async function addCustomerClientOperation(req, res){
    const { customerId } = req.body;
    const { name } = req.body;
    const { date } = req.body;
    const { amounth } = req.body;
    const { description } = req.body;
    const operation = req.body.type;
    
    await connectDB()
    try{
        CustomerInformation.findOneAndUpdate({
            customerId
        },{
            $push:{
                customers:{
                        name,
                        date,
                        amounth,
                        description,
                        operation
                }
            }
        },{
            new:true
        },(err, data) =>{
            if(err) console.log(err)
            res.status(200).json(data)
        })
    }catch(err){
        res.status(400).json({ success: false })
    }
}