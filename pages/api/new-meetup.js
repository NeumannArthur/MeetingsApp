import { MongoClient } from 'mongodb';
// api/new-meetup
// POST /api/new-meetup
//mongodb+srv://Arthur:<Arthur123>@cluster0.abqnhca.mongodb.net/?retryWrites=true&w=majority

export default async function handler(req, res) {

    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://Arthur:Arthur123@cluster0.abqnhca.mongodb.net/meetupDatabse?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetupsCollection');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup inserted!'});
    }

}