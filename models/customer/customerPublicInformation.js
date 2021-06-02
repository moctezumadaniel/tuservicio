const mongoose = require('mongoose');

const customerPublicInformationSchema = mongoose.Schema({
    
    customerId:String,
    //INFORMATION
    image:{type:String},
    name:{type:String, required:true},
    workdays:[{type:String, required:true}],
    schedule:[{
        day:{type:String, required: true},
        start:{type:String, required: true}
    }],
    shortDescription:{type:String},
    rating:Number,

    //CONTACT AND MORE DETAILS
    phoneNumber:{type:String},
    address:{type:String},
    moreInformation:{type:String},
    images:{type:[String]},

    listOfServices:[{
        title:{type:String, required:true},
        image:{type:String},
        price:{type:Number},
        description:{type:String}
    }],

    listOfReservations:[{
        date:Date,
        customerId:String,
        userId:String,
        description:String,
        state:String
    }],

    listOfSchedules:[{
            day:String,
            start:String,
            end:String,
            description:String,
            state:String,
            customerId:String
        }],
        
    
})

const CustomerPublicProfileInformation = mongoose.model('CustomerPublicProfileInformation',customerPublicInformationSchema)
module.exports = CustomerPublicProfileInformation