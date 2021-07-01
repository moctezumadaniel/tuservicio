import connectDB from '../../../middleware/mongodb'
import CustomerPublicInformation from '../../../models/customer/customerPublicInformation'

export default async function updateCustomerEditingService(req, res){
    const { customerId } = req.body;
    const { id } = req.body;
    const { title } = req.body;
    const { image } = req.body;
    const { price } = req.body;
    const { description } = req.body;
    await connectDB()

    try{
        CustomerPublicInformation.findOneAndUpdate({
            customerId:customerId,
            "listOfServices._id":id
        },{
            $set:{
                'listOfServices.$.title':title,
                'listOfServices.$.image':image,
                'listOfServices.$.price':price,
                'listOfServices.$.description':description,
            }
        },{
            new:true
        },(err, data)=>{
            if(err) console.log(err)
            res.status(200).json(data)
        })
    }catch(err){
        res.status(400).json({ success: false })
    }
    
}