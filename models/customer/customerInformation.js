const mongoose = require('mongoose')

const customerInformationSchema = mongoose.Schema({
    //ORDERS TOOL
    orders:[{
        ticketNumber:String,
        date:Date,
        description:String,
        items:[{
            id:String,
            description:String,
            amounth:Number,
        }]
    }],

    //TICKETS TOOL
    tickets:[{
        ticketNumber:String,
        date:Date,
        description:String,
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

const CustomerInformation = mongoose.model('customerInformation',customerInformationSchema)

export default CustomerInformation