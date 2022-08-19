import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';

export default function HomePage(props) { 
    return (
        <Fragment>
            <Head>
                <title>Meetups</title>
                <meta name='description' content='Browse a large list of meetups!' />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
};

export async function getServerSideProps() {
    // fetch data from an API/database
    // read files in file system

    const client = await MongoClient.connect('mongodb+srv://Arthur:Arthur123@cluster0.abqnhca.mongodb.net/meetupDatabse?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetupsCollection');x
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