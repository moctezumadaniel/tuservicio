import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation'

export default async function updateCustomerEditingExpense(req, res){
    const { customerId } = req.body
    const { id } = req.body
    const { date } = req.body
    const { amounth } = req.body
    const { description } = req.body
    await connectDB()
    try{
        CustomerInformation.findOneAndUpdate({
            'customerId': customerId,
            'expenses._id':id
        },{
            $set : {
                'expenses.$.date':date,
                'expenses.$.amounth':amounth,
                'expenses.$.description':description,
        }},{
            new:true
        },(err,data) => {
            if(err) console.log(err)
            res.status(200).json(data)
        }
    )
    }catch(err){
        res.status(400)
    }
}