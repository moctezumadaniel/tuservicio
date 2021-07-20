import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation';

export default async function updateCustomerClientOperation(req, res){
    const { customerId } = req.body;
    const { name } = req.body;
    const { date } = req.body;
    const { amounth } = req.body;
    const { description } = req.body;
    const { id } = req.body;

    await connectDB()
    try{
        CustomerInformation.findOneAndUpdate({
            customerId,
            'customers._id':id
        },{
            $set:{
                'customers.$.name':name,
                'customers.$.date':date,
                'customers.$.amounth':amounth,
                'customers.$.description':description,
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