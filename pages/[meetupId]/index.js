import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from "react";
import Head from "next/head";

export default function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta type="description" content={props.meetupData.description} /> 
            </Head>
            <MeetupDetail
            image = {props.meetupData.image}
            title = {props.meetupData.title}
            address= {props.meetupData.description}
            description= {props.meetupData.description}
            />
        </Fragment>
    );
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://Arthur:Arthur123@cluster0.abqnhca.mongodb.net/meetupDatabse?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetupsCollection');

    const meetups = await meetupsCollection.find({}/*filter criteria */, {_id: 1} /* only fetch ids, nothing else */).toArray();

    client.close(); 

    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() }
        })),
    };
}

export async function getStaticProps(context) {
    //fetch data for a single meetup

    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://Arthur:Arthur123@cluster0.abqnhca.mongodb.net/meetupDatabse?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetupsCollection');

    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});

    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            },
        }
    }
}