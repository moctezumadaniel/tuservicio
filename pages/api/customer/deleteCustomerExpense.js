import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation'

export default async function deleteCustomerExpense(req, res){
    const { customerId } = req.query
    const { id } = req.query
    await connectDB()
    try{
        CustomerInformation.findOneAndUpdate({
            customerId
        },{
            $pull:{
                expenses:{ _id: id }
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