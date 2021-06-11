const mongoose = require('mongoose')
var findOrCreate = require('mongoose-findorcreate')

const userInformationSchema = new mongoose.Schema({
    name:String,
    phoneNumber:String,
    email:String,
    password:String,
    reviews:[String],
    issuesAndComments:[String],
    reservations:[String],
    previousServices:[String],
    favoriteServices:[String],
    userId:String,
    customerId:String,
    currentPlatform:String
})
userInformationSchema.plugin(findOrCreate);
const UserInformation = mongoose.model('UserInformation',userInformationSchema);
module.exports = UserInformation