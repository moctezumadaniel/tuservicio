import CustomerInformation from '../../models/customer/customerInformation'

export const findCustomerProviders = (customerId, done) =>{
    CustomerInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err);
        done(null, data.providers)
    })
}

export const insertCustomerProviderOperation = (customerId, newProviderOperation, done)=>{
    CustomerInformation.find({"customerId":customerId},(err,data)=>{
        if(err) console.log(err);
        data.providers.push(newProviderOperation);
        data.save((err, dataUpdated)=>{
            if(err) console.log(err);
            done(null, dataUpdated)
        })
    })
}

export const deleteCustomerProviderOperation = (customerId, operationId, done) =>{
    CustomerInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err);
        data.providers.filter(
            i => i._id !== operationId
        )
        data.save((err, dataUpdated)=>{
            if(err) console.log(err)
            done(null, dataUpdated)
        })
    })
}

export const updateCustomerProviderOperation = (customerId, operation, done) =>{
    CustomerInformation.find({"customerId":customerId}), (err, data)=>{
        if(err) console.log(err)
        data.providers.filter(
            i => i._id !== operation._id
        )
        data.providers.push(operation)
        data.save((err,dataUpdated)=>{
            if(err) console.log(err)
            done(null, dataUpdated)
        })

    }
}