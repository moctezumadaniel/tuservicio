import CustomerInformation from '../../models/customer/customerInformation'

export const findCustomerClients = (customerId, done) =>{
    CustomerInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err);
        done(null, data.customers)
    })
}

export const insertCustomerClientOperation = (customerId, newCustomerOperation, done)=>{
    CustomerInformation.find({"customerId":customerId},(err,data)=>{
        if(err) console.log(err);
        data.customers.push(newCustomerOperation);
        data.save((err, dataUpdated)=>{
            if(err) console.log(err);
            done(null, dataUpdated)
        })
    })
}

export const deleteCustomerClientOperation = (customerId, operationId, done) =>{
    CustomerInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err);
        data.customers.filter(
            i => i._id !== operationId
        )
        data.save((err, dataUpdated)=>{
            if(err) console.log(err)
            done(null, dataUpdated)
        })
    })
}