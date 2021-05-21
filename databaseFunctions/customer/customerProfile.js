import CustomerPublicInformation from '../../models/customer/customerPublicInformation'

const findCustomerProfile = (customerId, done)=>{
    CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err);
        done(null, data)
    })
}