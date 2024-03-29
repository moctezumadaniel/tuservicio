const mongoose = require("mongoose");
var findOrCreate = require("mongoose-findorcreate");

const customerPublicInformationSchema = mongoose.Schema({
  customerId: String,
  //INFORMATION
  image: { type: String },
  name: { type: String },
  workdays: {},
  schedule: {},
  shortDescription: { type: String },
  rating: Number,

  //CONTACT AND MORE DETAILS
  phoneNumber: { type: String },
  address: { type: String },
  moreInformation: { type: String },
  images: { type: [String] },

  listOfServices: [
    {
      title: { type: String, required: true },
      image: { type: String },
      price: { type: Number },
      description: { type: String },
    },
  ],

  listOfReservations: [
    {
      day: String,
      start: String,
      end: String,
      name: String,
      customerId: String,
      userId: String,
      description: String,
      state: String,
    },
  ],

  listOfSchedules: [
    {
      day: String,
      start: String,
      end: String,
      description: String,
      state: String,
      customerId: String,
    },
  ],
});

customerPublicInformationSchema.plugin(findOrCreate);
customerPublicInformationSchema.index({
  name: "text",
  shortDescription: "text",
  moreInformation: "text",
  address: "text",
});
const CustomerPublicProfileInformation =
  mongoose.models.CustomerPublicProfileInformation ||
  mongoose.model(
    "CustomerPublicProfileInformation",
    customerPublicInformationSchema
  );
module.exports = CustomerPublicProfileInformation;
