import connectDB from "../../../middleware/mongodb";
import CustomerPublicProfileInformation from "../../../models/customer/customerPublicInformation";
export default async function handler(req, res) {
  const user = req.query.user;
  await connectDB();

  try {
    CustomerPublicProfileInformation.findOrCreate(
      { customerId: user },
      {
        image: "",
        name: "",
        workdays: {
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
        },
        schedule: {
          monday: {
            opening: "",
            closing: "",
          },
          tuesday: {
            opening: "",
            closing: "",
          },
          wednesday: {
            opening: "",
            closing: "",
          },
          thursday: {
            opening: "",
            closing: "",
          },
          friday: {
            opening: "",
            closing: "",
          },
          saturday: {
            opening: "",
            closing: "",
          },
          sunday: {
            opening: "",
            closing: "",
          },
        },
        shortDescription: "",
        rating: "",

        //CONTACT AND MORE DETAILS
        phoneNumber: "",
        address: "",
        moreInformation: "",
        images: [],

        listOfServices: [],

        listOfReservations: [],

        listOfSchedules: [],
      },
      (err, data) => {
        if (err) console.log(err);
        res.status(200).json(data);
      }
    );
  } catch (err) {
    res.status(400);
  }
}
