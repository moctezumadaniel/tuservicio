const mongoose = require('mongoose')

const userPublicInformationSchema = mongoose.Schema({
    //All the strings are ids to update the reservations and services
    reservations:[String],
    previousServices:[String],
    favoriteServices:[String]
})

const UserPublicInformation = mongoose.model('CustomerPublicInformation',userPublicInformationSchema)

export default UserPublicInformation