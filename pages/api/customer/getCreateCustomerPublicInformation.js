import connectDB from '../../../middleware/mongodb'
import CustomerPublicProfileInformation from '../../../models/customer/customerPublicInformation'
export default async function handler(req, res) {
    const user = req.query.user;
    await connectDB();

    try {
        CustomerPublicProfileInformation.findOrCreate({ "customerId": user},
        {
            image:"",
            name:"No has establecido el nombre de tu negocio",
            workdays:{
                monday:false,
                tuesday:false,
                wednesday:false,
                thursday:false,
                friday:false,
                saturday:false,
                sunday:false
            },
            schedule:{
                monday:{
                    opening:"",
                    closing:""
                },
                tuesday:{
                    opening:"",
                    closing:""
                },
                wednesday:{
                    opening:"",
                    closing:""
                },
                thursday:{
                    opening:"",
                    closing:""
                },
                friday:{
                    opening:"",
                    closing:""
                },
                saturday:{
                    opening:"",
                    closing:""
                },
                saturday:{
                    opening:"",
                    closing:""
                },
            },
            shortDescription:"Escribe una descripcion corta de tu negocio",
            rating:"",
        
            //CONTACT AND MORE DETAILS
            phoneNumber:"No has establecido el teléfono de tu servicio",
            address:"No has establecido la dirección de tu negocio",
            moreInformation:"Escribe toda la información que deseas tus clientes conozcan sobre tu negocio",
            images:[],
        
            listOfServices:[],
        
            listOfReservations:[],
        
            listOfSchedules:[], 
        },(err, data)=>{
            if(err) console.log(err)
            res.status(200).json(data)
        })
    } catch (err) {
        res.status(400)

    }
}