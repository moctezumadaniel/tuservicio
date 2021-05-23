import CustomerInformation from '../../models/customer/customerInformation'

export const findCustomerTickets = (customerId, done) =>{
    CustomerInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err);
        done(null, data.tickets)
    })
}

export const insertCustomerOrder = (customerId, newTicket, done)=>{
    CustomerInformation.find({"customerId":customerId},(err,data)=>{
        if(err) console.log(err);
        data.tickets.push(newTicket);
        data.save((err, dataUpdated)=>{
            if(err) console.log(err);
            done(null, dataUpdated)
        })
    })
}

export const deleteCustomerOrder = (customerId, ticketId, done) =>{
    CustomerInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err);
        data.tickets.filter(
            i => i._id !== ticketId
        )
        data.save((err, dataUpdated)=>{
            if(err) console.log(err)
            done(null, dataUpdated)
        })
    })
}