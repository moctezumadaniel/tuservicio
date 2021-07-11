import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation'

export default async function updateCustomerOrder(req, res){
    const { customerId } = req.body
    const { id } = req.body
    const { number } = req.body
    const { date } = req.body
    const { description } = req.body
    const { fullfiled } = req.body
    const { items } = req.body
    await connectDB()
    try{
        CustomerInformation.findOneAndUpdate({ 
            'customerId': customerId,
            'orders._id':id
        },{
            $set : {
                'orders.$.number':number,
                'orders.$.date':date,
                'orders.$.description':description,
                'orders.$.fullfiled':fullfiled,
                'orders.$.items':items,
        }},{
            new:true
        },(err,data) => {
            if(err) console.log(err)
            res.status(200).json(data)
        }
    )
    }catch(err){
        res.status(200)
    }
}