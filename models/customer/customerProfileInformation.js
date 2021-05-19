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
    images:{type:[String]},

    listOfServices:[{
        title:{type:String, required:true},
        image:{type:String},
        price:{type:Number},
        description:{type:String}
    }],

    listOfReservations:[{
        date:Date,
        customerName:String,
        description:String
    }],

    listOfSchedules:{
        monday:[{
            start:String,
            end:String,
            description:String
        }],
        tuesday:[{
            start:String,
            end:String,
            description:String
        }],
        wednesday:[{
            start:String,
            end:String,
            description:String
        }],
        thursday:[{
            start:String,
            end:String,
            description:String
        }],
        friday:[{
            start:String,
            end:String,
            description:String
        }],
        saturday:[{
            start:String,
            end:String,
            description:String
        }],
        sunday:[{
            start:String,
            end:String,
            description:String
        }]
    }
})

const CustomerProfileInformation = mongoose.model('CustomerProfileInformation',customerProfileInformationSchema)

export default CustomerProfileInformation;