import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';

export default function NewMeetupPage() {

    const router = useRouter();

    const addMeetupHandler = async (enteredMeetupData) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        const data = await response.json();

        console.log(data);

        router.replace('/');
    };
    
    return (
        <Fragment>
            <Head>
                <title>Create a New Meetup</title>
                <meta name='description' content='Quickly and easily create a new meetup!' />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </Fragment>
    )
}