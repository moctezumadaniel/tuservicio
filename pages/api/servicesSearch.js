import {connectToDatabase } from '../../middleware/mongodb';

export default async function serviceSearch (req, res){
    const {db} = await connectToDatabase();
    
    const data = await db.collection("listingsAndReviews").find({}).limit(20).toArray()

    res.json(data)
}