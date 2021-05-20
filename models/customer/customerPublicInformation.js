const mongoose = require('mongoose');

const customerPublicInformationSchema = mongoose.Schema({
    
    //INFORMATION
    image:{type:String},
    name:{type:String, required:true},
    workdays:{type:[String], required:true},
    schedule:{type:[String], required:true},
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
        customerName:String,
        description:String,
        state:String
    }],

    listOfSchedules:{
        monday:[{
            start:String,
            end:String,
            description:String,
            state:String
        }],
        tuesday:[{
            start:String,
            end:String,
            description:String,
            state:String
        }],
        wednesday:[{
            start:String,
            end:String,
            description:String,
            state:String
        }],
        thursday:[{
            start:String,
            end:String,
            description:String,
            state:String
        }],
        friday:[{
            start:String,
            end:String,
            description:String,
            state:String
        }],
        saturday:[{
            start:String,
            end:String,
            description:String,
            state:String
        }],
        sunday:[{
            start:String,
            end:String,
            description:String,
            state:String

        }]
    }
})

const CustomerPublicInformation = mongoose.model('CustomerPublicProfileInformation',customerPublicInformationSchema)

export default CustomerPublicInformation;