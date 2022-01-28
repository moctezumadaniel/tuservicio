import connectDB from "../../../middleware/mongodb";
import UserInformation from "../../../models/user/userInformation";
export default async function handler(req, res) {
  await connectDB();
  const user = req.query.user;
  try {
    UserInformation.findOrCreate(
      { userId: user },
      {
        name: "",
        phoneNumber: "",
        email: "",
        reviews: [],
        issuesAndComments: [],
        reservations: [],
        previousServices: [],
        favoriteServices: [],
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
