import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

export default function HomePage(props) { 
    return <MeetupList meetups={props.meetups} />
};

export async function getStaticProps() {
    // fetch data from an API/database
    // read files in file system

    const client = await MongoClient.connect('mongodb+srv://Arthur:Arthur123@cluster0.abqnhca.mongodb.net/meetupDatabse?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetupsCollection');
    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            })),
        },
        revalidate: 1
    };
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     //fetch data from an API

//     return {
//         props: {
//             meetups: dummy_meetups
//         }
//     };
// }