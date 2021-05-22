import CustomerInformation from '../../models/customer/customerInformation'

export const findCustomerTickets = (customerId, done) =>{
    CustomerInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err);
        done(null, data.tickets)
    })
}