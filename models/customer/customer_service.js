const mongoose = require('mongoose')

const customerServiceSchema = mongoose.Schema({
    title:{type:String, required:true},
    image:{type:String},
    price:{type:Number},
    description:{type:String}

})

const CustomerService = mongoose.model('CustomerService',customerServiceSchema)

export default CustomerService;