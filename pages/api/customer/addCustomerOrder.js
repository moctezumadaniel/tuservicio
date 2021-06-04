import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation'

export default async function addCustomerOrder(req, res){
    const { method } = req
    const customerId = req.body.customerId
    const newOrder = req.body.newOrder
    await connectDB()
    if(method === "POST"){
        try{
            CustomerInformation.find({"customerId":customerId}, (err, data)=>{
                if(err) console.log(err);
                data.orders.push(newOrder)
                data.save()
                res.status(200)
            })
        }catch(err){
            res.status(200).json({succes: false})
        }
    }
}