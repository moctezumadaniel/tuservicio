const mongoose = require('mongoose');

const customerProfileInformationSchema = mongoose.Schema({
    
    //INFORMATION
    image:{type:String},
    name:{type:String, required:true},
    workdays:{type:[String], required:true},
    schedule:{type:[String], required:true},
    shprtDescription:{type:String},

    //CONTACT AND MORE DETAILS
    phoneNumber:{type:String},
    address:{type:String},
    moreInformation:{type:String},
    images:{type:[String]}
})

const CustomerProfileInformation = mongoose.model('CustomerProfileInformation',customerProfileInformationSchema)

export default CustomerProfileInformation;