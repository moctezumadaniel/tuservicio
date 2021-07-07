import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation'

export default async function addCustomerOrder(req, res){
    const { customerId } = req.body
    const { number } = req.body
    const { date } = req.body
    const { description } = req.body
    const { fullfiled } = req.body
    const { items } = req.body
    const filter = { customerId: customerId }
    await connectDB()
    try{
        CustomerInformation.findOneAndUpdate(filter,{
            $push:{
                orders:{
                    number,
                    date,
                    description,
                    fullfiled,
                    items
                }
            }
        },{
            new: true
        }, (err, data)=>{
            if(err) console.log(err)
            res.status(200).json(data)
        })
    }catch(err){
        res.status(200)
    }
    
}