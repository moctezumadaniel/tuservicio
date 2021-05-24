import CustomerPublicInformation from '../../models/customer/customerPublicInformation'

export const findCustomerProfile = (customerId, done)=>{
    CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err);
        done(null, data)
    })
}
//CUSTOMER RESERVATIONS
export const addCustomerReservation = (customerId, reservation, done) =>{
    CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err)
        data.listOfReservations.push(reservation)
        data.save((err, updatedData)=>{
            if(err) console.log(err)
            done(null, updatedData)
        })
    })
}

export const updatecustomerReservation = (customerId, reservation, done) =>{
    CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err)
        data.listOfReservations.filter(
            i => i._id !== reservation._id
        );
        data.listOfReservations.push(reservation);
        data.save((err, updatedData)=>{
            if(err) console.log(err)
            done(null, updatedData)
        })
    })
}
//CUSTOMER SCHEDULE
export const addCustomerSchedule = (customerId, schedule, done) =>{
    CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err)
        data.listOfSchedules.push(schedule)
        data.save((err, updatedData)=>{
            if(err) console.log(err)
            done(null, updatedData)
        })
    })
}

export const updatecustomerSchedule = (customerId, schedule, done) =>{
    CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err)
        data.listOfSchedules.filter(
            i => i._id !== schedule._id
        );
        data.listOfSchedules.push(schedule);
        data.save((err, updatedData)=>{
            if(err) console.log(err)
            done(null, updatedData)
        })
    })
}