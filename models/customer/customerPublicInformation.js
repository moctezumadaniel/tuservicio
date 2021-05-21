const mongoose = require('mongoose');

const customerPublicInformationSchema = mongoose.Schema({
    
    customerId:String,
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
        customerId:String,
        userId:String,
        description:String,
        state:String
    }],

    listOfSchedules:{
        monday:[{
            start:String,
            end:String,
            description:String,
            state:String,
            customerId:String
        }],
        tuesday:[{
            start:String,
            end:String,
            description:String,
            state:String,
            customerId:String

        }],
        wednesday:[{
            start:String,
            end:String,
            description:String,
            state:String,
            customerId:String

        }],
        thursday:[{
            start:String,
            end:String,
            description:String,
            state:String,
            customerId:String

        }],
        friday:[{
            start:String,
            end:String,
            description:String,
            state:String,
            customerId:String

        }],
        saturday:[{
            start:String,
            end:String,
            description:String,
            state:String,
            customerId:String

        }],
        sunday:[{
            start:String,
            end:String,
            description:String,
            state:String,
            customerId:String


        }]
    }
})

const CustomerPublicInformation = mongoose.model('CustomerPublicProfileInformation',customerPublicInformationSchema)

export default CustomerPublicInformation;