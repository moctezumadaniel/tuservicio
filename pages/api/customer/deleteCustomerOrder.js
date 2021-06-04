import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation'

export default async function deleteCustomerOrder(req, res){
    const { method } = req
    const customerId = req.body.customerId
    const orderId = req.body.orderId
    await connectDB()
    if(method === "DELETE"){
        try{
            CustomerInformation.find({"customerId":customerId}, (err, data)=>{
                if(err) console.log(err);
                data.orders.filter(
                    i => i._id !== orderId
                )
                data.save()
                res.status(200)
            })
        }catch(err){
            res.status(200).json({succes: false})
        }
    }
}