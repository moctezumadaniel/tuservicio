const mongoose = require('mongoose')

const userPublicInformationSchema = new mongoose.Schema({
    //All the strings are ids to update the reservations and services
    userId:String,
    reservations:[String],
    previousServices:[String],
    favoriteServices:[String]
})

const UserPublicInformation = mongoose.model('UserPublicInformation',userPublicInformationSchema)
module.exports = UserPublicInformation
