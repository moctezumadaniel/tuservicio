const mongoose = require('mongoose')
import UserPublicInformation from '../../models/user/userPublicInformation'

export const findUserReservations = (userId, done) =>{
    UserPublicInformation.find({listOfReservations:userId},(err, data)=>{
        if(err) console.log(err)
        data.
        done(null, data)
    })
}