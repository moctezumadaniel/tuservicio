const mongoose = require('mongoose')

const userInformationSchema = new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    password:String,
    reviews:[String],
    problemsAndComments:[String],
    userId:String,
    customerId:String,
    currentPlatform:String
})

const UserInformation = mongoose.model('UserInformation',userInformationSchema);
module.exports = UserInformation