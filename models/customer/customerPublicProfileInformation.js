const mongoose = require('mongoose');

const customerPublicProfileInformationSchema = mongoose.Schema({
    
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

const CustomerPublicProfileInformation = mongoose.model('CustomerPublicProfileInformation',customerPublicProfileInformationSchema)

export default CustomerPublicProfileInformation;