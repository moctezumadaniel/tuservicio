import UserPublicInformation from '../../models/user/userPublicInformation'
import CustomerPublicInformation from '../../models/customer/customerPublicInformation'

const UserFavoriteServices = (id,done) =>{
    UserPublicInformation.find({userId:id},(err, data)=>{
        if(err) console.log(err);
        done(null, data.favoriteServices)
    })
}

export const findUserFavoriteServices = (UserFavoriteServices,done) =>{
    let previousServices = []
    for(i in UserFavoriteServices){
        let newServiceProfile = {}
        CustomerPublicInformation.find({customerId:i},(err, data)=>{
            if(err) console.log(err);
            newServiceProfile = {
                customerId:data.customerId,
                name:data.name,
                image:data.image,
                rating:data.rating,
                schedule:data.schedule,
                description:data.description
            }
            previousServices.push(newServiceProfile)
        })
    done(null, previousServices)
    }
}