import CustomerInformation from '../../models/customer/customerInformation'

export const findCustomerExpenses = (customerId, done) =>{
    CustomerInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err);
        done(null, data.expenses)
    })
}

export const insertCustomerExpense = (customerId, newExpense, done)=>{
    CustomerInformation.find({"customerId":customerId},(err,data)=>{
        if(err) console.log(err);
        data.expenses.push(newExpense);
        data.save((err, dataUpdated)=>{
            if(err) console.log(err);
            done(null, dataUpdated)
        })
    })
}

export const deleteCustomerExpense = (customerId, expensetId, done) =>{
    CustomerInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err);
        data.expenses.filter(
            i => i._id !== expensetId
        )
        data.save((err, dataUpdated)=>{
            if(err) console.log(err)
            done(null, dataUpdated)
        })
    })
}

export const updateCustomerExpense = (customerId, expense, done) =>{
    CustomerInformation.find({"customerId":customerId}), (err, data)=>{
        if(err) console.log(err)
        data.expenses.filter(
            i => i._id !== expense._id
        )
        data.expenses.push(expense)
        data.save((err,dataUpdated)=>{
            if(err) console.log(err)
            done(null, dataUpdated)
        })

    }
}