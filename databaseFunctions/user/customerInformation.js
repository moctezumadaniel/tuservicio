import UserInformation from '../../models/user/userInformation'

export const changeUserName = (userId, newName, done) =>{
    UserInformation.find({"userId":userId}, (err, data)=>{
        if(err) console.log(err);
        data.name = newName;
        data.save((err, updatedData)=>{
            if(err) console.log(err)
            done(null, updatedData)
        })
    })
}

export const changeUserPhone = (userId, phone, done) =>{
    UserInformation.find({"userId":userId}, (err, data)=>{
        if(err) console.log(err);
        data.phone = phone;
        data.save((err, updatedData)=>{
            if(err) console.log(err)
            done(null, updatedData)
        })
    })
}

export const changeUserEmail = (userId, email, done) =>{
    UserInformation.find({"userId":userId}, (err, data)=>{
        if(err) console.log(err);
        data.email = email;
        data.save((err, updatedData)=>{
            if(err) console.log(err)
            done(null, updatedData)
        })
    })
}
