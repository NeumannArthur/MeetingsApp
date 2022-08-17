import NewMeetupForm from '../../components/meetups/MeetupForm';

export default function NewMeetupPage() {
    const addMeetupHandler = (enteredMeetupData)=> {
        console.log(enteredMeetupData);
    };
    
    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}