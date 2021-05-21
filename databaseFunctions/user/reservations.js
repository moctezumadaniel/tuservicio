import UserPublicInformation from '../../models/user/userPublicInformation'

export const findUserReservations = (userId, done) =>{
    UserPublicInformation.find({"listOfReservations.userId":userId},(err, data)=>{
        if(err) console.log(err)
        done(null, data)
    })
}