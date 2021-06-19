import connectDB from '../../../middleware/mongodb'
import CustomerInformation from '../../../models/customer/customerInformation';

export default async function handler(req, res){
    const user = req.query.user;
    await connectDB();

    try{
        CustomerInformation.findOrCreate({ "customerId":user },
        {
            orders:[],
            tickets:[],
            expenses:[],
            customers:[],
            providers:[]
        }, (err, data)=>{
            if(err) console.log(err)
            res.status(200).json(data)
        })
    }catch(err){
        res.status(400)
    }
}