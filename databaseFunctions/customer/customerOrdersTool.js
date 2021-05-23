import CustomerInformation from '../../models/customer/customerInformation'

export const findCustomerOrders = (customerId, done) =>{
    CustomerInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err);
        done(null, data.orders)
    })
}

export const insertCustomerOrder = (customerId, newOrder, done)=>{
    CustomerInformation.find({"customerId":customerId},(err,data)=>{
        if(err) console.log(err);
        data.orders.push(newOrder);
        data.save((err, dataUpdated)=>{
            if(err) console.log(err);
            done(null, dataUpdated)
        })
    })
}

export const deleteCustomerOrder = (customerId, orderId, done) =>{
    CustomerInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err);
        data.orders.filter(
            i => i._id !== orderId
        )
        data.save((err, dataUpdated)=>{
            if(err) console.log(err)
            done(null, dataUpdated)
        })
    })
}