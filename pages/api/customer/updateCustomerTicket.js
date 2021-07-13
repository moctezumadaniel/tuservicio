import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation'

export default async function updateCustomerTicket(req, res){
    const { customerId } = req.body
    const { id } = req.body
    const { number } = req.body
    const { date } = req.body
    const { name } = req.body
    const { items } = req.body

    await connectDB()
    try{
        CustomerInformation.findOneAndUpdate({
            customerId,
            "tickets._id":id
        },{
            $set:{
                'tickets.$.number': number,
                'tickets.$.date': date,
                'tickets.$.name': name,
                'tickets.$.items': items,
            }
        },{
            new:true
        },(err, data) =>{
            if(err) console.log(err)
            res.status(200).json(data)
        })
    }catch(err){
        res.status(200).json({succes: false})
    }
}