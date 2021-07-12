const mongoose = require('mongoose')
var findOrCreate = require('mongoose-findorcreate')

const customerInformationSchema = mongoose.Schema({
    //ORDERS TOOL
    customerId:String,
    orders:[{
        number:String,
        date:Date,
        description:String,
        fullfiled:Boolean,
        items:[{
            id:String,
            description:String,
            amounth:Number,
        }]
    }],

    //TICKETS TOOL
    tickets:[{
        number:String,
        date:Date,
        name:String,
        items:[{
            id:String,
            description:String,
            amounth:Number,
        }]
    }],

    //EXPENSES TOOL
    expenses:[{
        date:Date,
        amounth:Number,
        description:String
    }],

    //CUSTOMERS TOOL
    customers:[{
        itemType:String,
        date:Date,
        amounth:Number,
        description:String
    }],
    //PROVIDERS TOOL
    providers:[{
        itemType:String,
        date:Date,
        amounth:Number,
        description:String
    }]
})
customerInformationSchema.plugin(findOrCreate)
const CustomerInformation = mongoose.models.CustomerInformation 
    || mongoose.model('CustomerInformation',customerInformationSchema)
module.exports = CustomerInformation