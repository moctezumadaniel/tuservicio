import CustomerPublicInformation from '../../models/customer/customerPublicInformation'

export const findCustomerProfile = (customerId, done)=>{
    CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err);
        done(null, data)
    })
}

//CHANGE CUSTOMER INFORMATION (Image manipulation pending)

export const changeCustomerName = (customerId, newName, done) =>{
    CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err)
        data.name = newName;
        data.save((err, updatedData)=>{
            if(err) console.log(err);
            done(null, updatedData)
        })
    })
}

export const changeCustomerWorkdays = (customerId, workdays, done) =>{
    CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err)
        data.workdays = workdays;
        data.save((err, updatedData)=>{
            if(err) console.log(err);
            done(null, updatedData)
        })
    })
}

export const changeCustomerSchedule = (customerId, schedule, done) =>{
    CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err)
        data.schedule = schedule;
        data.save((err, updatedData)=>{
            if(err) console.log(err);
            done(null, updatedData)
        })
    })
}

export const changeCustomerShortDescription = (customerId, shortDescription, done) =>{
    CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err)
        data.shortDescription = shortDescription;
        data.save((err, updatedData)=>{
            if(err) console.log(err);
            done(null, updatedData)
        })
    })
}

export const changeCustomerPhoneNumber = (customerId, phoneNumber, done) =>{
    CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err)
        data.phoneNumber = phoneNumber;
        data.save((err, updatedData)=>{
            if(err) console.log(err);
            done(null, updatedData)
        })
    })
}

export const changeCustomerAddress = (customerId, address, done) =>{
    CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err)
        data.address = address;
        data.save((err, updatedData)=>{
            if(err) console.log(err);
            done(null, updatedData)
        })
    })
}

export const changeCustomerMoreInformation = (customerId, moreInformation, done) =>{
    CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err)
        data.moreInformation = moreInformation;
        data.save((err, updatedData)=>{
            if(err) console.log(err);
            done(null, updatedData)
        })
    })
}


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
//CUSTOMER SERVICES
export const addCustomerService = (customerId, service, done) =>{
    CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err)
        data.listOfServices.push(service)
        data.save((err, updatedData)=>{
            if(err) console.log(err)
            done(null, updatedData)
        })
    })
}

export const updatecustomerReservation = (customerId, service, done) =>{
    CustomerPublicInformation.find({"customerId":customerId}, (err, data)=>{
        if(err) console.log(err)
        data.listOfServices.filter(
            i => i._id !== service._id
        );
        data.listOfServices.push(service);
        data.save((err, updatedData)=>{
            if(err) console.log(err)
            done(null, updatedData)
        })
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